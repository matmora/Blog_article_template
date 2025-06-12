
import { useState } from "react";
import { Mail, ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const NewsletterCTA = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // Simulate subscription
      setIsSubscribed(true);
      setEmail("");
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  return (
    <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-secondary/10 rounded-2xl p-8 md:p-12 my-16 border">
      <div className="max-w-2xl mx-auto text-center">
        <div className="mb-6">
          <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <Mail className="w-8 h-8 text-primary" />
          </div>
          
          <h3 className="text-3xl font-bold mb-4 text-foreground">
            Stay Updated with Creator Economy Insights
          </h3>
          
          <p className="text-lg text-muted-foreground leading-relaxed">
            Get weekly insights about London's top content creators, emerging trends, and successful 
            campaign strategies. Join over 5,000 marketers and brand managers who trust our insider knowledge.
          </p>
        </div>

        {!isSubscribed ? (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 h-12 text-base"
              required
            />
            <Button type="submit" size="lg" className="h-12 px-8 group">
              Subscribe
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </form>
        ) : (
          <div className="flex items-center justify-center gap-3 text-green-600 dark:text-green-400">
            <CheckCircle className="w-6 h-6" />
            <span className="text-lg font-medium">Thank you for subscribing!</span>
          </div>
        )}

        <div className="mt-6 flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
          <span>✓ Weekly creator spotlights</span>
          <span>✓ Campaign case studies</span>
          <span>✓ No spam, unsubscribe anytime</span>
        </div>

        <div className="mt-8 pt-8 border-t border-border/50">
          <h4 className="font-semibold mb-4 text-foreground">Related Creator Guides</h4>
          <div className="grid md:grid-cols-2 gap-4 text-left">
            <a href="#" className="group block p-4 rounded-lg bg-background/50 hover:bg-background border transition-colors">
              <h5 className="font-medium text-foreground group-hover:text-primary transition-colors">
                TikTok Creator Pricing Guide London 2024
              </h5>
              <p className="text-sm text-muted-foreground mt-1">
                Complete breakdown of creator rates and negotiation tips
              </p>
            </a>
            <a href="#" className="group block p-4 rounded-lg bg-background/50 hover:bg-background border transition-colors">
              <h5 className="font-medium text-foreground group-hover:text-primary transition-colors">
                Instagram Reels vs TikTok: Creator Platform Analysis
              </h5>
              <p className="text-sm text-muted-foreground mt-1">
                Which platform delivers better ROI for your campaigns
              </p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
