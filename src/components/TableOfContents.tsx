
import { useState, useEffect } from "react";
import { List } from "lucide-react";

interface TableOfContentsProps {
  onSectionClick: (sectionId: string) => void;
}

export const TableOfContents = ({ onSectionClick }: TableOfContentsProps) => {
  const [activeSection, setActiveSection] = useState("");

  const sections = [
    { id: "introduction", title: "Introduction" },
    { id: "ai-tools", title: "AI-Powered Tools" },
    { id: "frameworks", title: "Modern Frameworks" },
    { id: "performance", title: "Performance Optimization" },
    { id: "future", title: "Future Predictions" },
    { id: "conclusion", title: "Conclusion" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i].id);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Call once to set initial state
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="sticky top-8">
      <div className="bg-card border rounded-xl p-6 shadow-sm">
        <div className="flex items-center gap-2 mb-4">
          <List className="w-5 h-5 text-primary" />
          <h3 className="font-semibold text-foreground">Table of Contents</h3>
        </div>
        
        <nav>
          <ul className="space-y-3">
            {sections.map((section) => (
              <li key={section.id}>
                <button
                  onClick={() => onSectionClick(section.id)}
                  className={`text-left text-sm transition-colors hover:text-primary block w-full py-1 border-l-2 pl-3 ${
                    activeSection === section.id
                      ? "border-primary text-primary font-medium"
                      : "border-transparent text-muted-foreground"
                  }`}
                >
                  {section.title}
                </button>
              </li>
            ))}
          </ul>
        </nav>
        
        <div className="mt-6 pt-6 border-t border-border">
          <div className="text-xs text-muted-foreground">
            <div className="flex items-center justify-between mb-2">
              <span>Reading Progress</span>
              <span>8 min read</span>
            </div>
            <div className="w-full bg-muted rounded-full h-2">
              <div className="bg-primary h-2 rounded-full w-1/3 transition-all duration-300"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
