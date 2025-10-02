import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Target, 
  Heart, 
  Shield, 
  BookOpen, 
  Users, 
  Globe,
  Award,
  Lightbulb,
  CheckCircle,
  ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Passion for Learning",
      description: "We believe every child has the potential to become a creator, not just a consumer of technology."
    },
    {
      icon: Shield,
      title: "Safe Environment",
      description: "COPPA compliant platform with background-checked instructors and secure online classrooms."
    },
    {
      icon: Globe,
      title: "Global Accessibility",
      description: "Virtual learning removes geographical barriers, making quality tech education available worldwide."
    },
    {
      icon: Lightbulb,
      title: "Innovation Focus",
      description: "We stay current with the latest technologies to prepare students for tomorrow's opportunities."
    }
  ];


  const benefits = [
    "Problem-solving and critical thinking skills",
    "Creativity and innovation mindset", 
    "Preparation for future STEM careers",
    "Confidence in technology and digital literacy",
    "Collaboration and communication skills",
    "Understanding of how technology shapes our world"
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <Badge className="mb-6 bg-white/20 text-white hover:bg-white/30">
            About KodBuds Tech Hub
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Inspiring the Next Generation of{' '}
            <span className="text-accent">Tech Innovators</span>
          </h1>
          <p className="text-xl text-white/90 leading-relaxed">
            Founded with a mission to make programming education accessible, engaging, and safe for children worldwide, 
            KodBuds Tech Hub is transforming how kids learn technology skills.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center mb-6">
                <Target className="h-8 w-8 text-primary mr-3" />
                <h2 className="text-3xl font-bold">Our Mission</h2>
              </div>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                At KodBuds Tech Hub, we believe that programming isn't just about writing code—it's about 
                empowering young minds to think creatively, solve problems systematically, and build 
                solutions that can change the world.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Our virtual platform breaks down geographical barriers, making world-class programming 
                education accessible to children everywhere. We focus on hands-on, project-based learning 
                that keeps students engaged while building real, tangible skills.
              </p>
              <Link to="/courses">
                <Button variant="hero">
                  Explore Our Programs
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
            
            <Card className="p-8 bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
              <CardHeader>
                <div className="flex items-center mb-4">
                  <Lightbulb className="h-8 w-8 text-primary mr-3" />
                  <CardTitle className="text-2xl">Our Vision</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                  We envision a future where every child, regardless of their background or location, 
                  has the opportunity to become a digital creator and innovator. Technology should be 
                  a tool for empowerment, not intimidation.
                </p>
                <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                  Through our virtual learning platform, we're building a global community of young 
                  technologists who will shape tomorrow's digital landscape. We see a world where 
                  children don't just consume technology—they understand it, control it, and create with it.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Our ultimate goal is to democratize tech education, making it as accessible as 
                  traditional schooling while maintaining the highest standards of quality, safety, 
                  and engagement. We're not just teaching code; we're nurturing the next generation 
                  of problem solvers, entrepreneurs, and change-makers.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Every decision we make is guided by our commitment to providing the best possible 
              learning experience for children and peace of mind for parents.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-medium transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <value.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle className="text-lg">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Teaching Philosophy Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center mb-6">
                <BookOpen className="h-8 w-8 text-primary mr-3" />
                <h2 className="text-3xl font-bold">Teaching Philosophy</h2>
              </div>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                We believe in <strong>learning by doing</strong>. Instead of passive lectures, our students 
                immediately apply concepts through hands-on projects. Whether they're programming a robot, 
                building a website, or creating an IoT device, students see their code come to life.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Our curriculum is designed to be <strong>age-appropriate and progressive</strong>, starting 
                with visual programming concepts for younger students and advancing to professional 
                programming languages and frameworks for teenagers.
              </p>

              <div className="space-y-3">
                <h3 className="text-xl font-semibold mb-4">What Your Child Will Gain:</h3>
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-success mr-3 flex-shrink-0" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <Card className="p-8">
              <div className="text-center">
                <Award className="h-16 w-16 text-primary mx-auto mb-6" />
                <h3 className="text-2xl font-bold mb-4">Why Parents Choose Us</h3>
                <div className="space-y-4 text-left">
                  <div className="flex items-start">
                    <Users className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Expert Instructors</h4>
                      <p className="text-sm text-muted-foreground">Background-checked educators with industry experience</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Shield className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Safe Learning Environment</h4>
                      <p className="text-sm text-muted-foreground">COPPA compliant platform with parental oversight</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Globe className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Flexible Schedule</h4>
                      <p className="text-sm text-muted-foreground">Live classes with recorded sessions for review</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Give Your Child a Head Start?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Join our community of young innovators and help your child build the skills they'll need for tomorrow's world.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="accent" size="lg" className="text-lg">
              Schedule Free Consultation
            </Button>
            <Link to="/courses">
              <Button variant="outline" size="lg" className="text-lg bg-white/10 border-white/30 text-white hover:bg-white/20">
                View Course Details
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;