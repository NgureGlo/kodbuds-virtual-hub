import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Code2, 
  Cpu, 
  Printer, 
  Brain, 
  Globe, 
  Monitor, 
  Zap, 
  BookOpen,
  Shield,
  Clock,
  Users,
  Star,
  ArrowRight,
  CheckCircle
} from 'lucide-react';
import { Link } from 'react-router-dom';
import heroImage from '@/assets/hero-image.jpg';
import { DialogForms } from '@/components/ui/dialog-forms';

const Home = () => {
  const [isTrialOpen, setIsTrialOpen] = useState(false);
  const [isEnrollmentOpen, setIsEnrollmentOpen] = useState(false);
  const courses = [
    {
      icon: Cpu,
      title: "Robotics with Microbit & Arduino",
      age: "Ages 10-18",
      description: "Master robotics through 3 progressive phases: Microbit foundations, Arduino basics, and advanced robotics projects.",
      duration: "24 weeks (3 phases)"
    },
    {
      icon: Code2,
      title: "Python Programming",
      age: "Ages 10-18",
      description: "Complete Python journey from core programming to building real applications with GUIs and games.",
      duration: "30 weeks (3 phases)"
    },
    {
      icon: Globe,
      title: "Web Development",
      age: "Ages 12-18", 
      description: "Build modern web applications from HTML basics to React, covering frontend foundations and interactivity.",
      duration: "36 weeks (3 phases)"
    },
    {
      icon: Brain,
      title: "AI & Machine Learning",
      age: "Ages 14-18",
      description: "Discover artificial intelligence from basic concepts to applied AI projects including chatbots and image generators.",
      duration: "30 weeks (3 phases)"
    }
  ];

  const benefits = [
    {
      icon: Shield,
      title: "Safe Online Learning",
      description: "COPPA compliant platform with verified instructors and secure environment"
    },
    {
      icon: Clock,
      title: "Flexible Scheduling",
      description: "Live classes at convenient times with recorded sessions available"
    },
    {
      icon: Users,
      title: "Small Class Sizes",
      description: "Maximum 8 students per class for personalized attention"
    },
    {
      icon: Star,
      title: "Project-Based Learning",
      description: "Build real projects that showcase skills and creativity"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center bg-gradient-hero overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <Badge className="mb-6 bg-white/20 text-white hover:bg-white/30">
                Virtual Programming Education
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
                Empowering Kids with{' '}
                <span className="text-accent">Future-Ready</span>{' '}
                Tech Skills
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
                Interactive programming courses for ages 6-18. From Robotics to AI to Web Development - all from the comfort of home.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  variant="accent" 
                  size="lg" 
                  className="text-lg"
                  onClick={() => setIsTrialOpen(true)}
                >
                  Start Free Trial
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Link to="/courses">
                  <Button variant="outline" size="lg" className="text-lg bg-white/10 border-white/30 text-white hover:bg-white/20">
                    View Courses
                  </Button>
                </Link>
              </div>
              <div className="mt-8 flex items-center space-x-6 text-white/80">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-accent mr-2" />
                  <span>Ages 6-18</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-accent mr-2" />
                  <span>100% Virtual</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-accent mr-2" />
                  <span>Live Instruction</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src={heroImage} 
                alt="Kids learning programming and robotics" 
                className="rounded-2xl shadow-large"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose KodBuds Tech Hub?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We combine cutting-edge technology education with safe, engaging learning experiences tailored for young minds.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center hover:shadow-medium transition-all duration-300">
                <CardHeader>
                  <benefit.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle className="text-lg">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {benefit.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Courses Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Popular Courses
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Hands-on programming courses designed to inspire creativity and build real-world skills.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <Card key={index} className="group hover:shadow-medium transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <course.icon className="h-10 w-10 text-primary" />
                    <Badge variant="secondary">{course.age}</Badge>
                  </div>
                  <CardTitle className="group-hover:text-primary transition-colors">
                    {course.title}
                  </CardTitle>
                  <CardDescription className="text-sm text-muted-foreground">
                    Duration: {course.duration}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    {course.description}
                  </p>
                  <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/courses">
              <Button variant="hero" size="lg">
                View All Courses
                <BookOpen className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Child's Tech Journey?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Join thousands of students worldwide who are building the future with code.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="accent" 
              size="lg" 
              className="text-lg"
              onClick={() => setIsTrialOpen(true)}
            >
              Book Free Trial Class
            </Button>
            <Link to="/contact">
              <Button variant="outline" size="lg" className="text-lg bg-white/10 border-white/30 text-white hover:bg-white/20">
                Speak with Advisor
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <DialogForms
        isTrialOpen={isTrialOpen}
        isEnrollmentOpen={isEnrollmentOpen}
        onTrialClose={() => setIsTrialOpen(false)}
        onEnrollmentClose={() => setIsEnrollmentOpen(false)}
      />
    </div>
  );
};

export default Home;