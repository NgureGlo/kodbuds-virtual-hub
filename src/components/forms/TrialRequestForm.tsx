import { useState } from 'react';
import { format } from 'date-fns';
import { Calendar as CalendarIcon, Clock, Loader2 } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { cn } from '@/lib/utils';

interface TrialRequestFormProps {
  onSuccess?: () => void;
  onClose?: () => void;
}

const TrialRequestForm = ({ onSuccess, onClose }: TrialRequestFormProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    childAgeClass: '',
    preferredDate: '',
    preferredTime: ''
  });
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  // Availability logic: Mon-Fri 4-6pm, Sat 8am-12pm
  const isDateAvailable = (date: Date) => {
    const day = date.getDay();
    // Sunday = 0, Monday = 1, etc.
    return day >= 1 && day <= 6; // Monday to Saturday
  };

  const getAvailableTimeSlots = (date: Date | undefined) => {
    if (!date) return [];
    
    const day = date.getDay();
    
    if (day >= 1 && day <= 5) { // Monday to Friday
      return [
        '4:00 PM - 4:45 PM',
        '4:45 PM - 5:30 PM',
        '5:15 PM - 6:00 PM'
      ];
    } else if (day === 6) { // Saturday
      return [
        '8:00 AM - 8:45 AM',
        '8:45 AM - 9:30 AM',
        '9:30 AM - 10:15 AM',
        '10:15 AM - 11:00 AM',
        '11:00 AM - 11:45 AM'
      ];
    }
    
    return [];
  };

  const handleDateSelect = (date: Date | undefined) => {
    setSelectedDate(date);
    setFormData(prev => ({
      ...prev,
      preferredDate: date ? format(date, 'PPP') : '',
      preferredTime: '' // Reset time when date changes
    }));
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Save to database
      const { error: dbError } = await supabase
        .from('trial_requests')
        .insert({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          child_age_class: formData.childAgeClass,
          preferred_time: `${formData.preferredDate} at ${formData.preferredTime}`
        });

      if (dbError) throw dbError;

      // Send email notification
      const { error: emailError } = await supabase.functions.invoke('send-notification', {
        body: {
          type: 'trial_request',
          data: {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            childAgeClass: formData.childAgeClass,
            preferredDate: formData.preferredDate,
            preferredTime: formData.preferredTime
          }
        }
      });

      if (emailError) {
        console.error('Email error:', emailError);
        // Don't throw - form submission succeeded, email is secondary
      }

      toast({
        title: "Success!",
        description: "Thank you! Your trial request has been submitted.",
      });

      onSuccess?.();
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const availableTimeSlots = getAvailableTimeSlots(selectedDate);

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Book Your Free Trial Class</CardTitle>
        <CardDescription>
          Select your preferred date and time. We'll confirm your booking within 24 hours.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="name">Parent/Guardian Name *</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                placeholder="Your full name"
                required
              />
            </div>
            <div>
              <Label htmlFor="email">Email Address *</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                placeholder="your@email.com"
                required
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="phone">Phone Number *</Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                placeholder="+254712345678"
                required
              />
            </div>
            <div>
              <Label htmlFor="childAgeClass">Child's Age/Class *</Label>
              <Select onValueChange={(value) => handleInputChange('childAgeClass', value)} required>
                <SelectTrigger>
                  <SelectValue placeholder="Select age/class" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="6-8">Ages 6-8</SelectItem>
                  <SelectItem value="9-12">Ages 9-12</SelectItem>
                  <SelectItem value="13-15">Ages 13-15</SelectItem>
                  <SelectItem value="16-18">Ages 16-18</SelectItem>
                  <SelectItem value="class1-3">Class 1-3</SelectItem>
                  <SelectItem value="class4-6">Class 4-6</SelectItem>
                  <SelectItem value="class7-8">Class 7-8</SelectItem>
                  <SelectItem value="form1-4">Form 1-4</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div>
            <Label>Preferred Date *</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "w-full justify-start text-left font-normal",
                    !selectedDate && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {selectedDate ? format(selectedDate, "PPP") : "Pick a date"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={selectedDate}
                  onSelect={handleDateSelect}
                  disabled={(date) => {
                    const today = new Date();
                    today.setHours(0, 0, 0, 0);
                    return date < today || !isDateAvailable(date);
                  }}
                  initialFocus
                  className="pointer-events-auto"
                />
              </PopoverContent>
            </Popover>
            <p className="text-sm text-muted-foreground mt-1">
              Available: Monday-Friday (4PM-6PM EAT), Saturday (8AM-12PM EAT)
            </p>
          </div>

          {selectedDate && availableTimeSlots.length > 0 && (
            <div>
              <Label>Preferred Time *</Label>
              <Select onValueChange={(value) => handleInputChange('preferredTime', value)} required>
                <SelectTrigger>
                  <SelectValue placeholder="Select time slot" />
                </SelectTrigger>
                <SelectContent>
                  {availableTimeSlots.map((slot) => (
                    <SelectItem key={slot} value={slot}>
                      <div className="flex items-center">
                        <Clock className="mr-2 h-4 w-4" />
                        {slot}
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          )}

          <div className="flex gap-3 pt-4">
            {onClose && (
              <Button type="button" variant="outline" onClick={onClose} className="flex-1">
                Cancel
              </Button>
            )}
            <Button 
              type="submit" 
              variant="hero" 
              disabled={isSubmitting || !selectedDate || !formData.preferredTime}
              className="flex-1"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Submitting...
                </>
              ) : (
                'Book Free Trial'
              )}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default TrialRequestForm;