import React from "react";
import { Card, CardContent } from "./ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Separator } from "./ui/separator";

interface StaffPick {
  author: {
    name: string;
    avatar: string;
  };
  title: string;
  publishedAt: string;
}

interface Category {
  name: string;
  count: number;
}

interface StaffPicksProps {
  picks?: StaffPick[];
  categories?: Category[];
}

const StaffPicks = ({
  picks = [
    {
      author: {
        name: "Tom Morton-Collings",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=tom",
      },
      title:
        "A Comprehensive Review of Rolling Stone Magazine's '500 Greatest Albums of All Time'",
      publishedAt: "1d ago",
    },
    {
      author: {
        name: "The Medium Newsletter",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=medium",
      },
      title: "Use this flowchart to make tough decisions easier",
      publishedAt: "3d ago",
    },
  ],
  categories = [
    { name: "Programming", count: 1204 },
    { name: "Data Science", count: 876 },
    { name: "Technology", count: 654 },
    { name: "Self Improvement", count: 432 },
    { name: "Writing", count: 321 },
    { name: "Relationships", count: 287 },
  ],
}: StaffPicksProps) => {
  return (
    <Card className="w-[400px] bg-white">
      <CardContent className="p-6">
        <h2 className="font-bold text-xl mb-4">Staff Picks</h2>
        <div className="space-y-6">
          {picks.map((pick, index) => (
            <div key={index} className="space-y-2">
              <div className="flex items-center space-x-2">
                <Avatar className="h-5 w-5">
                  <AvatarImage src={pick.author.avatar} />
                  <AvatarFallback>{pick.author.name[0]}</AvatarFallback>
                </Avatar>
                <span className="text-sm font-medium">{pick.author.name}</span>
              </div>
              <h3 className="font-bold hover:underline cursor-pointer">
                {pick.title}
              </h3>
              <p className="text-sm text-gray-500">{pick.publishedAt}</p>
            </div>
          ))}
        </div>

        <Separator className="my-6" />

        <div className="space-y-4">
          <h2 className="font-bold text-xl">Recommended topics</h2>
          <div className="flex flex-wrap gap-2">
            {categories.map((category, index) => (
              <button
                key={index}
                className="px-4 py-2 rounded-full border border-gray-200 hover:border-gray-900 text-sm transition-colors"
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default StaffPicks;
