import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import ecommerceProject from '@/assets/ecommerce-project.jpg';
import taskManagementProject from '@/assets/task-management-project.jpg';
import weatherDashboardProject from '@/assets/weather-dashboard-project.jpg';
import portfolioProject from '@/assets/portfolio-project.jpg';
import chatAppProject from '@/assets/chat-app-project.jpg';
import expenseTrackerProject from '@/assets/expense-tracker-project.jpg';

const Projects = () => {
  const projects = [
    {
      title: "Hotel Booking & Management Backend",
      description: "A robust backend system for hotel booking and management, built with Spring Boot. It includes role based authentication, dynamic pricing, admin controls, and secure payment integration for a seamless booking experience.",
      image: "hotelBooking.webp",
      technologies: ["Spring Boot", "Java", "PostgreSQL", "Stripe", "Spring Security", "Hibernate", "JWT"],
      liveUrl: "https://github.com/Swastika-Roy/AirBnb-",
      githubUrl: "https://github.com/Swastika-Roy/AirBnb-",
      category: "Hotel Booking and Management"
    },
    {
      title: "Blog App",
      description: "Developed a simple CRUD backend application for managing blog posts using Java and Spring Boot. Implemented key features including post creation, updating, deletion, and viewing. Utilized MySQL for data storage and ensured efficient RESTful API operations for seamless blog management.",
      image: "image.png",
      technologies: ["Java", "Spring Boot", "Hibernate", "PostgreSQL"],
      liveUrl: "https://github.com/Swastika-Roy/BlogPost_Application",
      githubUrl: "https://github.com/Swastika-Roy/BlogPost_Application",
      category: "Mini Project"
    },
    {
      title: "Online Exam Portal",
      description: "This is the backend for an Online Exam Portal developed using Spring Boot. It provides a complete solution for managing online examinations with secure student participation and admin control. The system is designed to streamline the entire exam lifecycle — from exam creation and question management by admins, to live participation, answer saving, and submission tracking for students.",
      image: "onlinexam.avif",
      technologies: ["Java", "Spring Boot", "Hibernate", "PostgreSQL"],
      liveUrl: "https://github.com/Swastika-Roy/OIBSIP_javaDevelopment_task4",
      githubUrl: "https://github.com/Swastika-Roy/OIBSIP_javaDevelopment_task4",
      category: "Education"
    },
    {
      title: "Number Guessing Game",
      description: "Guess the Number is a fun and interactive online game where you try to guess a secret number between 1 and 100. You have a limited number of attempts to find the correct number. Enter your guess, and the game provides feedback to guide you. Test your luck, use strategy, and see if you can win before your attempts run out!.",
      image: "noGGame.png",
      technologies: ["JavaScript", "Java", "Spring Boot", "HTML", "CSS3", "API"],
      liveUrl: "https://github.com/Swastika-Roy/OIBSIP_javaDevelopment_task2",
      githubUrl: "https://github.com/Swastika-Roy/OIBSIP_javaDevelopment_task2",
      category: "Mini Project"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--primary)_0%,_transparent_50%)] opacity-5"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-primary to-primary/70 bg-clip-text text-transparent">
              &lt;/Projects&gt;
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Explore my portfolio of innovative solutions, each crafted with passion and cutting-edge technologies
            </p>
          </div>
        </AnimatedSection>

        {/* Projects Grid - One by One on Scroll */}
        <div className="space-y-32 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <AnimatedSection key={project.title} delay={index * 0.2}>
              <div className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                {/* Project Info */}
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="space-y-4">
                    <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                      {project.category}
                    </Badge>
                    <h3 className="text-3xl md:text-4xl font-bold text-foreground">
                      {project.title}
                    </h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                  
                  {/* Technologies */}
                  <div className="space-y-3">
                    <h4 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge 
                          key={tech} 
                          variant="outline" 
                          className="border-primary/30 text-primary hover:bg-primary/10 transition-colors duration-300"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex gap-4 pt-4">
                    <Button 
                      variant="default" 
                      className="bg-primary hover:bg-primary/90 text-primary-foreground group"
                      asChild
                    >
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform duration-200" />
                        Live Demo
                      </a>
                    </Button>
                    <Button 
                      variant="outline" 
                      className="border-primary/30 hover:border-primary hover:bg-primary/10 group"
                      asChild
                    >
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform duration-200" />
                        View Code
                      </a>
                    </Button>
                  </div>
                </div>
                
                {/* Project Image */}
                <div className={`relative group ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-primary/5 to-primary/10">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-[400px] object-cover transition-all duration-700 group-hover:scale-105"
                    />
                    
                    {/* Overlay Effects */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Shine Effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1500"></div>
                    </div>
                    
                    {/* Border Glow */}
                    <div className="absolute inset-0 rounded-2xl border-2 border-primary/0 group-hover:border-primary/30 transition-all duration-500"></div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
