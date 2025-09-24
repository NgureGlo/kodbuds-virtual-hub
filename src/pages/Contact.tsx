import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { 
  Mail, 
  Phone, 
  MessageCircle, 
  MapPin, 
  Clock, 
  Send,
  CheckCircle,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  Calendar,
  Users,
  Shield,
  Loader2
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { DialogForms } from '@/components/ui/dialog-forms';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    childAge: '',
    course: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isTrialOpen, setIsTrialOpen] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Save to database
      const { error: dbError } = await supabase
        .from('messages')
        .insert({
          name: formData.name,
          email: formData.email,
          phone: formData.phone || '',
          message: formData.message
        });

      if (dbError) throw dbError;

      // Send email notification
      const { error: emailError } = await supabase.functions.invoke('send-notification', {
        body: {
          type: 'contact_message',
          data: {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            childAge: formData.childAge,
            course: formData.course,
            message: formData.message
          }
        }
      });

      if (emailError) {
        console.error('Email error:', emailError);
        // Don't throw - form submission succeeded, email is secondary
      }

      toast({
        title: "Success!",
        description: "Your message has been sent successfully. We'll get back to you soon.",
      });

      setIsSubmitted(true);
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

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const contactMethods = [
    {
      icon: Mail,
      title: "Email Us",
      description: "Get a response within 24 hours",
      value: "hello@kodbudstechub.com",
      action: "mailto:hello@kodbudstechub.com"
    },
    {
      icon: Phone,
      title: "Call Us",
      description: "Mon-Fri, 4PM-8PM EAT; Sat, 8AM-12PM EAT",
      value: "+254728541658",
      action: "tel:+254728541658"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      description: "Quick answers to your questions",
      value: "Chat with us",
      action: "https://wa.me/254728541658"
    }
  ];

  const socialLinks = [
    { icon: Facebook, name: "Facebook", url: "https://www.facebook.com/gloria.ngure/" },
    { icon: Instagram, name: "Instagram", url: "https://www.instagram.com/kodbuds_techub" },
    { icon: Linkedin, name: "LinkedIn", url: "https://www.linkedin.com/in/kodbudstechub" },
    { icon: Youtube, name: "YouTube", url: "https://youtube.com/@kodbudstechub" }
  ];

  const features = [
    {
      icon: Calendar,
      title: "Flexible Scheduling",
      description: "Choose from multiple time slots that work for your family"
    },
    {
      icon: Users,
      title: "Parent Consultation",
      description: "Speak with our education advisors to find the perfect course"
    },
    {
      icon: Shield,
      title: "Safe Environment",
      description: "COPPA compliant platform with verified instructors"
    }
  ];

  if (isSubmitted) {
    return (
      <div className="min-h-screen pt-16 flex items-center justify-center">
        <Card className="max-w-md mx-auto">
          <CardContent className="text-center p-8">
            <CheckCircle className="h-16 w-16 text-success mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-2">Thank You!</h2>
            <p className="text-muted-foreground mb-6">
              We've received your message and will get back to you within 24 hours.
            </p>
            <Button onClick={() => setIsSubmitted(false)} variant="outline">
              Send Another Message
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <Badge className="mb-6 bg-white/20 text-white hover:bg-white/30">
            Get In Touch
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Let's Start Your Child's{' '}
            <span className="text-accent">Tech Journey</span>
          </h1>
          <p className="text-xl text-white/90 leading-relaxed">
            Have questions about our courses? Ready to enroll? We're here to help you 
            find the perfect programming path for your child.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => (
              <Card key={index} className="text-center hover:shadow-medium transition-all duration-300 group cursor-pointer">
                <a href={method.action} className="block">
                  <CardHeader>
                    <method.icon className="h-12 w-12 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
                    <CardTitle className="text-lg">{method.title}</CardTitle>
                    <CardDescription>{method.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="font-semibold text-primary group-hover:text-primary-hover transition-colors">
                      {method.value}
                    </p>
                  </CardContent>
                </a>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
              <Card>
                <CardContent className="p-8">
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
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          placeholder="+254712345678"
                        />
                      </div>
                      <div>
                        <Label htmlFor="childAge">Child's Age</Label>
                        <Select onValueChange={(value) => handleInputChange('childAge', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select age range" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="6-8">6-8 years old</SelectItem>
                            <SelectItem value="9-12">9-12 years old</SelectItem>
                            <SelectItem value="13-15">13-15 years old</SelectItem>
                            <SelectItem value="16-18">16-18 years old</SelectItem>
                            <SelectItem value="multiple">Multiple children</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="course">Interested Course(s)</Label>
                      <Select onValueChange={(value) => handleInputChange('course', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a course" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="iot">Robotics with Microbit & Arduino</SelectItem>
                          <SelectItem value="python">Python Programming</SelectItem>
                          <SelectItem value="webdev">Web Development</SelectItem>
                          <SelectItem value="computer-literacy">Computer Literacy</SelectItem>
                          <SelectItem value="aiml">AI & Machine Learning</SelectItem>
                          <SelectItem value="cs-fundamentals">Computer Science Fundamentals</SelectItem>
                          <SelectItem value="minecraft">Programming with Minecraft</SelectItem>
                          <SelectItem value="unsure">Not sure yet</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        placeholder="Tell us about your child's interests, any questions you have, or what you'd like to know more about..."
                        rows={4}
                      />
                    </div>

                    <Button 
                      type="submit" 
                      variant="hero" 
                      size="lg" 
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Sending Message...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="ml-2 h-5 w-5" />
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Info & Features */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6">Why Contact Us?</h3>
                <div className="space-y-6">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-start">
                      <feature.icon className="h-6 w-6 text-primary mr-4 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-2">{feature.title}</h4>
                        <p className="text-muted-foreground">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <Card className="bg-primary text-primary-foreground">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Calendar className="h-5 w-5 mr-2" />
                    Free Trial Class
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    Not sure which course is right for your child? Book a free 45-minute trial class 
                    to experience our teaching style and meet our instructors.
                  </p>
                  <Button 
                    variant="accent"
                    onClick={() => setIsTrialOpen(true)}
                  >
                    Schedule Free Trial
                  </Button>
                </CardContent>
              </Card>

              <div>
                <h3 className="text-xl font-semibold mb-4">Office Hours</h3>
                <div className="flex items-center text-muted-foreground mb-2">
                  <Clock className="h-4 w-4 mr-2" />
                  <span>Monday - Friday: 4:00 PM - 8:00 PM EAT</span>
                </div>
                <div className="flex items-center text-muted-foreground mb-2">
                  <Clock className="h-4 w-4 mr-2" />
                  <span>Saturday: 8:00 AM - 12:00 PM EAT</span>
                </div>
                <div className="flex items-center text-muted-foreground">
                  <Clock className="h-4 w-4 mr-2" />
                  <span>Sunday: Closed</span>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-muted rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                    >
                      <social.icon className="h-5 w-5" />
                    </a>
                  ))}
                </div>
              </div>

              <Card className="bg-muted">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <MapPin className="h-5 w-5 mr-2" />
                    Global Virtual Classroom
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Our virtual platform serves students worldwide. No matter where you're located, 
                    we can accommodate your timezone and provide quality programming education.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <DialogForms
        isTrialOpen={isTrialOpen}
        isEnrollmentOpen={false}
        onTrialClose={() => setIsTrialOpen(false)}
        onEnrollmentClose={() => {}}
      />
    </div>
  );
};

export default Contact;