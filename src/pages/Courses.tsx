import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Code2, 
  Cpu, 
  Printer, 
  Brain, 
  Globe, 
  Monitor, 
  Zap, 
  BookOpen,
  Users,
  Clock,
  Award,
  ArrowRight,
  CheckCircle,
  Gamepad2
} from 'lucide-react';

const Courses = () => {
  const courses = [
    {
      id: 1,
      icon: Cpu,
      title: "Robotics with Microbit & Arduino",
      age: "Ages 10-18",
      description: "Introduction to robotics using Microbit and Arduino. Learn how to connect simple sensors, control lights, and move small motors.",
      duration: "6 weeks (Saturdays) / 3 weeks (holidays)",
      level: "Beginner - Intermediate",
      skills: ["Basic Coding", "LED Control", "Simple Motor Use", "Intro to Sensors"],
      projects: ["Blinking LED", "Traffic Light Simulation", "Simple Buzzer Alarm", "Fan Motor Control"]
    },
    {
      id: 4,
      icon: Code2,
      title: "Python Programming Basics",
      age: "Ages 11-18",
      description: "Learn Python programming through small, fun exercises and simple games. Perfect for beginners to coding.",
      duration: "8 weeks (Saturdays) / 4 weeks (holidays)",
      level: "Intermediate",
      skills: ["Printing Messages", "Variables", "Basic Math in Python", "If Statements", "Loops"],
      projects: ["Hello World App", "Age Checker", "Even or Odd Checker", "Simple Calculator"]
    },
    {
      id: 5,
      icon: Globe,
      title: "Web Development",
      age: "Ages 12-18",
      description: "Create simple websites using HTML and CSS. Learn how to add text, images, links, and style your pages.",
      duration: "10 weeks (Saturdays) / 5 weeks (holidays)",
      level: "Intermediate - Advanced",
      skills: ["HTML Basics", "CSS Styling", "Adding Links & Images", "Page Layout"],
      projects: ["Personal Profile Page", "School Timetable Page", "Simple Blog Page", "Photo Gallery"]
    },
    {
      id: 6,
      icon: Monitor,
      title: "Computer Literacy Fundamentals",
      age: "Ages 6-11",
      description: "Learn essential computer skills like typing, saving files, using safe passwords, and browsing safely.",
      duration: "4 weeks (Saturdays) / 2 weeks (holidays)",
      level: "Beginner",
      skills: ["Typing Practice", "File Saving", "Basic Internet Safety", "Using Simple Apps"],
      projects: ["Create a Digital Poster", "Organize Files in Folders", "Write a Short Document", "Make a Simple Slideshow"]
    },
    {
      id: 7,
      icon: Brain,
      title: "AI & Machine Learning",
      age: "Ages 12-18",
      description: "A gentle introduction to AI and Machine Learning using beginner-friendly tools. Understand how computers recognize patterns.",
      duration: "6 weeks (Saturdays) / 3 weeks (holidays)",
      level: "Advanced",
      skills: ["Patterns in Data", "Simple Predictions", "Image Recognition Basics"],
      projects: ["Emoji Sorter", "Yes/No Prediction Game", "Simple Chatbot", "Color Classifier"]
    },
    {
      id: 8,
      icon: BookOpen,
      title: "Computer Science Fundamentals",
      age: "Ages 9-12",
      description: "Learn problem-solving through simple algorithms and games. Understand how computers follow step-by-step instructions.",
      duration: "8 weeks (Saturdays) / 4 weeks (holidays)",
      level: "Beginner",
      skills: ["Step-by-Step Thinking", "Basic Algorithms", "Patterns & Sequences"],
      projects: ["Sorting Numbers Game", "Guess the Number Game", "Drawing Shapes with Instructions", "Treasure Hunt Algorithm"]
    },
    {
      id: 9,
      icon: Gamepad2,
      title: "Programming with Minecraft",
      age: "Ages 8-11",
      description: "Learn coding by making fun changes inside Minecraft. Use block-based coding to create cool worlds and simple automations.",
      duration: "6 weeks (Saturdays) / 3 weeks (holidays)",
      level: "Beginner",
      skills: ["Block Coding", "Loops", "Events", "Game Design Basics"],
      projects: ["Build a House Automatically", "Make Fireworks", "Create a Maze", "Simple Mini-Game"]
    }
  ];

  const ageGroups = [
    { range: "Ages 6-8", courses: ["Computer Literacy", "Programming with Minecraft"], focus: "Digital Basics & Visual Learning" },
    { range: "Ages 9-11", courses: ["Computer Science Fundamentals", "Programming with Minecraft", "Robotics Projects", "Python Basics"], focus: "Creative Problem Solving" },
    { range: "Ages 12-15", courses: ["Robotics Projects", "Python Basics", "Web Development", "AI/ML"], focus: "Technical Skills & Projects" },
    { range: "Ages 16-18", courses: ["AI/ML", "Web Development", "Advanced Programming"], focus: "Career Preparation" }
  ];

  const scheduleNote = 
    "Classes run virtually every Saturday during school terms. " +
    "During school holidays, sessions are held 3 days a week virtually for faster progress.";



  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <Badge className="mb-6 bg-white/20 text-white hover:bg-white/30">
            Course Catalog
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Explore Our{' '}
            <span className="text-accent">Programming Courses</span>
          </h1>
          <p className="text-xl text-white/90 leading-relaxed">
            {scheduleNote}</p>
           <p></p> 
          <p className="text-xl text-white/90 leading-relaxed">
            From beginner-friendly introductions to advanced programming concepts, 
            our courses are designed to grow with your child's interests and abilities.
          </p>
        </div>
      </section>

      {/* Age Groups Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Learning Pathways by Age</h2>
            <p className="text-lg text-muted-foreground">
              Our curriculum is structured to match developmental stages and interests
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ageGroups.map((group, index) => (
              <Card key={index} className="text-center hover:shadow-medium transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-lg text-primary">{group.range}</CardTitle>
                  <CardDescription className="font-medium">{group.focus}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {group.courses.map((course, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {course}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* All Courses Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Complete Course Catalog
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Each course includes live instruction, hands-on projects, and personalized feedback from expert instructors.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {courses.map((course) => (
              <Card key={course.id} className="group hover:shadow-large transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <course.icon className="h-12 w-12 text-primary flex-shrink-0" />
                    <div className="flex gap-2 flex-wrap">
                      <Badge variant="secondary">{course.age}</Badge>
                      <Badge variant="outline">{course.level}</Badge>
                    </div>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {course.title}
                  </CardTitle>
                  <CardDescription className="text-base">
                    {course.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <div className="flex items-center gap-6 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-2" />
                      {course.duration}
                    </div>
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-2" />
                      Max 8 students
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3">What You'll Learn:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {course.skills.slice(0, 4).map((skill, idx) => (
                        <div key={idx} className="flex items-center text-sm">
                          <CheckCircle className="h-3 w-3 text-success mr-2 flex-shrink-0" />
                          <span>{skill}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3">Projects You'll Build:</h4>
                    <div className="space-y-1">
                      {course.projects.slice(0, 2).map((project, idx) => (
                        <div key={idx} className="flex items-center text-sm text-muted-foreground">
                          <Award className="h-3 w-3 text-primary mr-2 flex-shrink-0" />
                          <span>{project}</span>
                        </div>
                      ))}
                      {course.projects.length > 2 && (
                        <div className="text-xs text-muted-foreground">
                          +{course.projects.length - 2} more projects
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Button className="flex-1 group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                      Enroll Now
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="sm">
                      Free Trial
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Preview Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Common Questions</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">What equipment does my child need?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Most courses only require a computer with internet access. For hardware courses like Robotics, 
                  we provide equipment kits that are shipped to your home.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">How do virtual classes work?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Live interactive classes via Zoom with small groups (max 8 students). All sessions are recorded 
                  for review, and students get individual attention from instructors.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Can my child switch courses?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Yes! We offer flexible enrollment. If a course isn't the right fit, we'll help find a better match 
                  within the first two weeks at no extra cost.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">What about online safety?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We're COPPA compliant with background-checked instructors, monitored classrooms, 
                  and parental access to all interactions. Safety is our top priority.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Book a free trial class to see which course is the perfect fit for your child.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="accent" size="lg" className="text-lg">
              Book Free Trial Class
            </Button>
            <Button variant="outline" size="lg" className="text-lg bg-white/10 border-white/30 text-white hover:bg-white/20">
              Speak with Advisor
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Courses;