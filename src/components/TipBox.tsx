
import { Lightbulb } from "lucide-react";

interface TipBoxProps {
  title: string;
  content: string;
}

export const TipBox = ({ title, content }: TipBoxProps) => {
  return (
    <div className="bg-gradient-to-r from-yellow-50 to-amber-50 dark:from-yellow-950/20 dark:to-amber-950/20 border border-yellow-200 dark:border-yellow-800 rounded-xl p-6 my-8">
      <div className="flex items-start gap-4">
        <div className="bg-yellow-100 dark:bg-yellow-900/50 p-2 rounded-lg flex-shrink-0">
          <Lightbulb className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />
        </div>
        
        <div>
          <h4 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">
            {title}
          </h4>
          <p className="text-yellow-700 dark:text-yellow-300 leading-relaxed">
            {content}
          </p>
        </div>
      </div>
    </div>
  );
};
