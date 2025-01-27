import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { Star } from "lucide-react";

interface ArticleCardProps {
  title?: string;
  author?: {
    name: string;
    avatar: string;
  };
  preview?: string;
  readingTime?: number;
  views?: number;
  comments?: number;
  isPremium?: boolean;
  imageUrl?: string;
  onClick?: () => void;
}

const ArticleCard = ({
  title = "Understanding React Hooks: A Comprehensive Guide",
  author = {
    name: "Jane Smith",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=jane",
  },
  preview = "Learn how React Hooks revolutionize the way we write components and manage state in modern React applications...",
  readingTime = 5,
  views = 29,
  comments = 2,
  isPremium = false,
  imageUrl = "https://images.unsplash.com/photo-1633356122544-f134324a6cee",
  onClick = () => {},
}: ArticleCardProps) => {
  return (
    <article
      className="flex justify-between items-start py-6 cursor-pointer group"
      onClick={onClick}
    >
      <div className="flex-1 pr-8">
        <div className="flex items-center gap-2 mb-2">
          <Avatar className="h-5 w-5">
            <AvatarImage src={author.avatar} />
            <AvatarFallback>{author.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <span className="text-sm">{author.name}</span>
        </div>

        <h2 className="text-xl font-bold mb-1 group-hover:underline line-clamp-2">
          {title}
        </h2>
        <p className="text-gray-600 text-sm mb-2 line-clamp-2">{preview}</p>

        <div className="flex items-center text-gray-500 text-sm gap-2">
          <span>{readingTime} min read</span>
          <span>·</span>
          <span>{views} views</span>
          <span>·</span>
          <span>{comments} comments</span>
          {isPremium && (
            <>
              <span>·</span>
              <Badge
                variant="outline"
                className="bg-yellow-100 text-yellow-800 border-yellow-200"
              >
                <Star className="w-3 h-3 mr-1" fill="currentColor" />
                Member only
              </Badge>
            </>
          )}
        </div>
      </div>

      {imageUrl && (
        <div className="flex-shrink-0 w-32 h-32">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
      )}
    </article>
  );
};

export default ArticleCard;
