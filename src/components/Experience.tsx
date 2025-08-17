import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Building } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';

const Experience = () => {
  const experiences = [
    {
  title: "Java Developer",
  company: "AICTE Oasis Infobyte",
  location: "Remote",
  period: "June 2025 - Aug 2025",
  type: "Internship",
  description: [
    "Developed a robust backend system for an Online Exam Portal, supporting end-to-end exam management with Spring Boot, PostgreSQL, and JWT authentication.",
    "Designed and implemented RESTful APIs following MVC architecture and a monolithic structure for maintainability.",
    "Built key features for the exam lifecycle, including live answering, timed auto-submission, and manual submission.",
    "Developed admin tools for exam creation, question upload, student registration, and result management.",
    "Utilized Postman for API testing and Swagger for automated API documentation.",
    "Gained practical experience with Spring Data JPA, Hibernate, and Git for version control."
  ],
  technologies: ["Java", "Spring Boot", "PostgreSQL", "JWT", "Swagger", "Spring Data JPA", "Hibernate", "Git", "Postman API"]
}
,


    {
  title: "Backend Developer",
  company: "International Society of Automation",
  location: "Haldia, West Bengal, India",
  period: "Sep 2023 - Present",
  type: "Full-time",
  description: [
    "Developing scalable backend solutions to support automation-focused initiatives and student engagement activities using Spring Boot.",
    "Built RESTful APIs and backend logic for key features like event management and member registration.",
    "Integrated secure authentication mechanisms and database connectivity for robust data handling.",
    "Actively participated in system design discussions and backend architecture planning.",
    "Contributed to automating chapter workflows to improve efficiency and reliability."
  ],
  technologies: ["Spring Boot", "Java", "JWT", "MySQL", "Postman"]
}

  ];

  return (
    <section id="experience" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              &lt;/Work <span className="text-primary">Experience&gt;</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              My professional journey and the impact I've made
            </p>
          </div>
        </AnimatedSection>
        
        <div className="max-w-7xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-primary via-primary/50 to-transparent"></div>
            
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <AnimatedSection key={index} delay={index * 0.2}>
                  <div className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    {/* Timeline dot */}
                    <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg z-10"></div>
                    
                    {/* Experience card */}
                    <div className={`w-full md:w-5/12 ml-16 md:ml-0 ${index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                      <Card className="card-elegant hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                        <CardHeader className="pb-4">
                          <div className="flex flex-col gap-4">
                            <div>
                              <CardTitle className="text-2xl text-primary mb-2">
                                {exp.title}
                              </CardTitle>
                              <div className="flex items-center gap-2 text-lg font-semibold text-foreground mb-3">
                                <Building className="h-4 w-4 text-primary" />
                                {exp.company}
                              </div>
                              <div className="flex flex-col sm:flex-row gap-4 text-muted-foreground">
                                <div className="flex items-center gap-2">
                                  <Calendar className="h-4 w-4" />
                                  {exp.period}
                                </div>
                                <div className="flex items-center gap-2">
                                  <MapPin className="h-4 w-4" />
                                  {exp.location}
                                </div>
                              </div>
                            </div>
                            <Badge variant="outline" className="self-start">
                              {exp.type}
                            </Badge>
                          </div>
                        </CardHeader>
                        <CardContent className="pt-0">
                          <ul className="space-y-3 mb-6">
                            {exp.description.map((point, i) => (
                              <li key={i} className="flex items-start gap-3 text-muted-foreground leading-relaxed">
                                <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                                {point}
                              </li>
                            ))}
                          </ul>
                          
                          <div>
                            <h4 className="font-semibold mb-3 text-foreground">Technologies Used:</h4>
                            <div className="flex flex-wrap gap-2">
                              {exp.technologies.map((tech) => (
                                <Badge key={tech} variant="secondary" className="hover:bg-primary hover:text-primary-foreground transition-colors">
                                  {tech}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;