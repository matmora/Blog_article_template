import { Github, Linkedin, Twitter } from "lucide-react";
export const AuthorBio = () => {
  return <div className="bg-gradient-to-r from-muted/50 to-muted/30 rounded-xl p-8 border my-12">
      <div className="flex items-start gap-6">
        <img src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=120&h=120&fit=crop&crop=face" alt="Sarah Johnson, Content Marketing Expert and Creator Economy Specialist" className="w-20 h-20 rounded-full border-4 border-background shadow-lg flex-shrink-0" />
        
        <div className="flex-1">
          <h3 className="text-2xl font-bold mb-2 text-foreground">Mat Mora</h3>
          <p className="text-primary font-medium mb-3">Content Marketing Expert & Creator Economy Specialist</p>
          
          <p className="text-muted-foreground leading-relaxed mb-4">Mat has been at the forefront of London's creator economy for over 6 years, helping brands connect with top influencers and content creators. He specializes in creator partnerships, influencer marketing strategy, and emerging trends in social media. Mat has worked with over 200 London-based creators and helped brands achieve an average 400% ROI on creator campaigns.</p>
          
          <div className="flex gap-4">
            <a href="https://github.com/sarahjohnson" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors" target="_blank" rel="noopener noreferrer" aria-label="Sarah Johnson's GitHub profile">
              <Github className="w-5 h-5" />
              <span className="text-sm">GitHub</span>
            </a>
            <a href="https://linkedin.com/in/sarahjohnsonmarketing" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors" target="_blank" rel="noopener noreferrer" aria-label="Sarah Johnson's LinkedIn profile">
              <Linkedin className="w-5 h-5" />
              <span className="text-sm">LinkedIn</span>
            </a>
            <a href="https://twitter.com/sarahcreatorpro" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors" target="_blank" rel="noopener noreferrer" aria-label="Sarah Johnson's Twitter profile">
              <Twitter className="w-5 h-5" />
              <span className="text-sm">Twitter</span>
            </a>
          </div>
        </div>
      </div>
    </div>;
};