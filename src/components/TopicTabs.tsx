import React from "react";
import { Button } from "./ui/button";
import { Plus } from "lucide-react";

interface TopicTabsProps {
  selectedTopic?: string;
  onTopicChange?: (topic: string) => void;
}

const TopicTabs = ({
  selectedTopic = "For you",
  onTopicChange = () => {},
}: TopicTabsProps) => {
  const topics = [
    "For you",
    "Following",
    "Creativity",
    "Productivity",
    "Programming",
    "JavaScript",
    "React",
  ];

  return (
    <div className="w-full border-b border-gray-200 bg-white">
      <div className="max-w-screen-xl mx-auto px-4 flex items-center space-x-1 overflow-x-auto scrollbar-hide">
        <Button variant="ghost" size="icon" className="shrink-0">
          <Plus className="h-4 w-4" />
        </Button>
        {topics.map((topic) => (
          <Button
            key={topic}
            variant="ghost"
            className={`shrink-0 h-12 px-4 ${selectedTopic === topic ? "border-b-2 border-black rounded-none" : ""}`}
            onClick={() => onTopicChange(topic)}
          >
            {topic}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default TopicTabs;
