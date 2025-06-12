
import { Quote } from "lucide-react";

interface PullQuoteProps {
  quote: string;
  author: string;
}

export const PullQuote = ({ quote, author }: PullQuoteProps) => {
  return (
    <div className="my-12 relative">
      <div className="bg-gradient-to-br from-primary/5 to-primary/10 border-l-4 border-primary rounded-r-xl p-8 relative">
        <Quote className="absolute top-4 left-4 w-8 h-8 text-primary/30" />
        
        <blockquote className="text-xl md:text-2xl font-medium leading-relaxed text-foreground ml-8 mb-4">
          "{quote}"
        </blockquote>
        
        <cite className="text-muted-foreground font-medium ml-8 not-italic">
          — {author}
        </cite>
      </div>
    </div>
  );
};
