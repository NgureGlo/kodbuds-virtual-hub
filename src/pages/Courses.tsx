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
      title: "IoT with Microbit, Raspberry Pi & Arduino",
      age: "Ages 12-18",
      description: "Learn to build smart devices and understand Internet of Things fundamentals. Students will create weather stations, home automation systems, and sensor networks.",
      duration: "8 weeks",
      level: "Intermediate",
      skills: ["Circuit Design", "Sensor Programming", "WiFi Connectivity", "Data Collection", "IoT Protocols"],
      projects: ["Smart Home System", "Weather Station", "Security Camera", "Plant Monitoring Device"]
    },
    {
      id: 2,
      icon: Zap,
      title: "Robotics with Zimrobo Alpha Set A",
      age: "Ages 10-16",
      description: "Create and program robots using the Zimrobo Alpha robotics kit. Learn mechanical engineering concepts alongside programming logic.",
      duration: "10 weeks",
      level: "Beginner to Intermediate",
      skills: ["Mechanical Assembly", "Motor Control", "Sensor Integration", "Algorithm Design", "Problem Solving"],
      projects: ["Line Following Robot", "Obstacle Avoidance Bot", "Remote Control Car", "Sumo Wrestling Robot"]
    },
    {
      id: 3,
      icon: Printer,
      title: "3D Printing & Design",
      age: "Ages 8-18",
      description: "Design and print 3D models while learning CAD software and understanding manufacturing processes.",
      duration: "6 weeks",
      level: "Beginner",
      skills: ["3D Modeling", "CAD Software", "Design Thinking", "Manufacturing", "Prototyping"],
      projects: ["Custom Phone Case", "Miniature House", "Mechanical Puzzle", "Educational Model"]
    },
    {
      id: 4,
      icon: Code2,
      title: "Python Programming Basics",
      age: "Ages 10-18",
      description: "Master Python from basics to advanced applications. Learn programming fundamentals through games, apps, and data projects.",
      duration: "12 weeks",
      level: "Beginner to Advanced",
      skills: ["Variables & Data Types", "Functions", "Object-Oriented Programming", "File Handling", "Libraries"],
      projects: ["Text Adventure Game", "Password Generator", "Web Scraper", "Personal Finance Tracker"]
    },
    {
      id: 5,
      icon: Globe,
      title: "Web Development",
      age: "Ages 12-18",
      description: "Build modern websites and web applications using HTML, CSS, JavaScript, and React. Learn both frontend and basic backend concepts.",
      duration: "14 weeks",
      level: "Beginner to Intermediate",
      skills: ["HTML & CSS", "JavaScript", "React", "Responsive Design", "API Integration"],
      projects: ["Personal Portfolio", "Task Manager App", "E-commerce Site", "Social Media Dashboard"]
    },
    {
      id: 6,
      icon: Monitor,
      title: "Computer Literacy Fundamentals",
      age: "Ages 6-12",
      description: "Essential computer skills including typing, file management, internet safety, and basic software usage.",
      duration: "4 weeks",
      level: "Beginner",
      skills: ["Typing Skills", "File Management", "Internet Safety", "Software Basics", "Digital Citizenship"],
      projects: ["Digital Presentation", "Basic Spreadsheet", "Safe Email Setup", "File Organization System"]
    },
    {
      id: 7,
      icon: Brain,
      title: "AI & Machine Learning",
      age: "Ages 14-18",
      description: "Explore artificial intelligence and machine learning concepts. Build smart applications using Python and ML libraries.",
      duration: "10 weeks",
      level: "Advanced",
      skills: ["ML Algorithms", "Data Analysis", "Neural Networks", "AI Ethics", "Model Training"],
      projects: ["Image Classifier", "Chatbot", "Recommendation System", "Predictive Model"]
    },
    {
      id: 8,
      icon: BookOpen,
      title: "Computer Science Fundamentals",
      age: "Ages 14-18",
      description: "Core CS concepts including algorithms, data structures, and computational thinking for students preparing for advanced studies.",
      duration: "12 weeks",
      level: "Intermediate to Advanced",
      skills: ["Algorithms", "Data Structures", "Time Complexity", "Problem Solving", "Mathematical Thinking"],
      projects: ["Sorting Visualizer", "Search Algorithm", "Data Structure Library", "Algorithm Race Game"]
    },
    {
      id: 9,
      icon: Gamepad2,
      title: "Programming with Minecraft",
      age: "Ages 8-14",
      description: "Learn programming concepts through Minecraft modding and automation. Make the game do amazing things with code!",
      duration: "8 weeks",
      level: "Beginner",
      skills: ["Block-Based Coding", "Logic & Loops", "Functions", "Events", "Game Design"],
      projects: ["Automated Farm", "Castle Builder", "Mini-Game Creator", "Custom Mods"]
    }
  ];

  const ageGroups = [
    { range: "Ages 6-8", courses: ["Computer Literacy", "Programming with Minecraft"], focus: "Digital Basics & Visual Learning" },
    { range: "Ages 9-12", courses: ["Python Basics", "3D Printing", "Minecraft Programming"], focus: "Creative Problem Solving" },
    { range: "Ages 13-15", courses: ["Web Development", "IoT Projects", "Robotics"], focus: "Technical Skills & Projects" },
    { range: "Ages 16-18", courses: ["AI/ML", "Computer Science", "Advanced Programming"], focus: "Career Preparation" }
  ];

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
                  Most courses only require a computer with internet access. For hardware courses like IoT and Robotics, 
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