
import { Github, Linkedin, Twitter } from "lucide-react";

export const AuthorBio = () => {
  return (
    <div className="bg-gradient-to-r from-muted/50 to-muted/30 rounded-xl p-8 border my-12">
      <div className="flex items-start gap-6">
        <img 
          src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=120&h=120&fit=crop&crop=face" 
          alt="Sarah Johnson, Senior Full-Stack Developer and Tech Writer"
          className="w-20 h-20 rounded-full border-4 border-background shadow-lg flex-shrink-0"
        />
        
        <div className="flex-1">
          <h3 className="text-2xl font-bold mb-2 text-foreground">Sarah Johnson</h3>
          <p className="text-primary font-medium mb-3">Senior Full-Stack Developer & Tech Writer</p>
          
          <p className="text-muted-foreground leading-relaxed mb-4">
            Sarah is a seasoned full-stack developer with over 8 years of experience building scalable web applications. 
            She specializes in React, Node.js, and modern development practices. When she's not coding, Sarah enjoys 
            sharing her knowledge through technical writing and speaking at developer conferences.
          </p>
          
          <div className="flex gap-4">
            <a 
              href="https://github.com/sarahjohnson" 
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Sarah Johnson's GitHub profile"
            >
              <Github className="w-5 h-5" />
              <span className="text-sm">GitHub</span>
            </a>
            <a 
              href="https://linkedin.com/in/sarahjohnsondev" 
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Sarah Johnson's LinkedIn profile"
            >
              <Linkedin className="w-5 h-5" />
              <span className="text-sm">LinkedIn</span>
            </a>
            <a 
              href="https://twitter.com/sarahdev" 
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Sarah Johnson's Twitter profile"
            >
              <Twitter className="w-5 h-5" />
              <span className="text-sm">Twitter</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
