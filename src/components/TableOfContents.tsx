
import { useState, useEffect } from "react";
import { ChevronRight } from "lucide-react";

interface TableOfContentsProps {
  onSectionClick: (sectionId: string) => void;
}

export const TableOfContents = ({ onSectionClick }: TableOfContentsProps) => {
  const [activeSection, setActiveSection] = useState<string>("");

  const sections = [
    { id: "introduction", title: "Why Finding the Right Creator Matters", level: 1 },
    { id: "creator-types", title: "Two Main Types of Content Creators", level: 1 },
    { id: "video-content", title: "The Power of Video Content", level: 1 },
    { id: "evaluating-reach", title: "Evaluating Creator's Real Reach", level: 1 },
    { id: "creator-categories", title: "Different Creator Categories", level: 1 },
    { id: "ai-creators", title: "AI-Enhanced Creators", level: 1 },
    { id: "conclusion", title: "Finding Your Perfect Match", level: 1 },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.1, rootMargin: "-20% 0px -35% 0px" }
    );

    sections.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="sticky top-8">
      <div className="bg-card border rounded-xl p-6 shadow-sm">
        <h3 className="font-semibold text-lg mb-4 text-foreground">Table of Contents</h3>
        <nav className="space-y-2">
          {sections.map(({ id, title, level }) => (
            <button
              key={id}
              onClick={() => onSectionClick(id)}
              className={`w-full text-left p-2 rounded-lg transition-all duration-200 flex items-center group ${
                activeSection === id
                  ? "bg-primary/10 text-primary border-l-2 border-primary"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
              } ${level === 2 ? "ml-4 text-sm" : ""}`}
            >
              <ChevronRight 
                className={`w-4 h-4 mr-2 transition-transform ${
                  activeSection === id ? "rotate-90" : "group-hover:translate-x-1"
                }`} 
              />
              <span className="text-sm leading-relaxed">{title}</span>
            </button>
          ))}
        </nav>
        
        <div className="mt-6 pt-6 border-t border-border">
          <div className="text-xs text-muted-foreground space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>12 min read</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span>Content Creator Guide</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              <span>Updated June 2024</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
