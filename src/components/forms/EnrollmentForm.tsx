import { useState } from 'react';
import { Loader2 } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';

interface EnrollmentFormProps {
  onSuccess?: () => void;
  onClose?: () => void;
}

const EnrollmentForm = ({ onSuccess, onClose }: EnrollmentFormProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    childAgeClass: '',
    courseOfInterest: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Save to database
      const { error: dbError } = await supabase
        .from('enrollments')
        .insert({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          child_age_class: formData.childAgeClass,
          course_of_interest: formData.courseOfInterest
        });

      if (dbError) throw dbError;

      // Send email notification
      const { error: emailError } = await supabase.functions.invoke('send-notification', {
        body: {
          type: 'enrollment',
          data: {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            childAgeClass: formData.childAgeClass,
            courseOfInterest: formData.courseOfInterest
          }
        }
      });

      if (emailError) {
        console.error('Email error:', emailError);
        // Don't throw - form submission succeeded, email is secondary
      }

      toast({
        title: "Success!",
        description: "Thank you for enrolling! We'll be in touch shortly.",
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

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Enroll Your Child</CardTitle>
        <CardDescription>
          Join our programming courses and start your child's tech journey today.
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
            <Label htmlFor="courseOfInterest">Course of Interest *</Label>
            <Select onValueChange={(value) => handleInputChange('courseOfInterest', value)} required>
              <SelectTrigger>
                <SelectValue placeholder="Select a course" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="robotics-microbit-arduino">Robotics with Microbit & Arduino</SelectItem>
                <SelectItem value="python-programming">Python Programming</SelectItem>
                <SelectItem value="web-development">Web Development</SelectItem>
                <SelectItem value="computer-literacy">Computer Literacy</SelectItem>
                <SelectItem value="ai-machine-learning">AI & Machine Learning</SelectItem>
                <SelectItem value="cs-fundamentals">Computer Science Fundamentals</SelectItem>
                <SelectItem value="minecraft-programming">Programming with Minecraft</SelectItem>
                <SelectItem value="multiple-courses">Multiple Courses</SelectItem>
                <SelectItem value="unsure">Not sure yet</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex gap-3 pt-4">
            {onClose && (
              <Button type="button" variant="outline" onClick={onClose} className="flex-1">
                Cancel
              </Button>
            )}
            <Button 
              type="submit" 
              variant="hero" 
              disabled={isSubmitting}
              className="flex-1"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Enrolling...
                </>
              ) : (
                'Enroll Now'
              )}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default EnrollmentForm;