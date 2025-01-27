import React from "react";
import ArticleCard from "./ArticleCard";

interface Article {
  id: string;
  title: string;
  author: {
    name: string;
    avatar: string;
  };
  preview: string;
  readingTime: number;
  views: number;
  comments: number;
  isPremium: boolean;
  imageUrl: string;
}

interface ArticleGridProps {
  articles?: Article[];
}

const ArticleGrid = ({
  articles = [
    {
      id: "1",
      title: "Go vs. One Billion Rows: From Minutes Down to Seconds",
      author: {
        name: "Yash",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=yash",
      },
      preview:
        "Harnessing Go's Concurrency and Smart Optimizations to Tackle Massive Datasets",
      readingTime: 3,
      views: 29,
      comments: 2,
      isPremium: false,
      imageUrl: "https://images.unsplash.com/photo-1587620962725-abab7fe55159",
    },
    {
      id: "2",
      title: "A Professional Snapshot Lens",
      author: {
        name: "Marjan Krebelj",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=marjan",
      },
      preview: "Voigtländer Nokton 40mm 1.2 Aspherical Review",
      readingTime: 18,
      views: 177,
      comments: 4,
      isPremium: false,
      imageUrl: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32",
    },
    {
      id: "3",
      title: "Why Everyone Talks About Zig",
      author: {
        name: "Ben Weidig",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=ben",
      },
      preview: "What's All the Hype About?",
      readingTime: 5,
      views: 311,
      comments: 13,
      isPremium: true,
      imageUrl: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97",
    },
  ],
}: ArticleGridProps) => {
  return (
    <div className="max-w-[680px]">
      <div className="divide-y">
        {articles.map((article) => (
          <ArticleCard
            key={article.id}
            title={article.title}
            author={article.author}
            preview={article.preview}
            readingTime={article.readingTime}
            views={article.views}
            comments={article.comments}
            isPremium={article.isPremium}
            imageUrl={article.imageUrl}
            onClick={() => (window.location.href = `/article/${article.id}`)}
          />
        ))}
      </div>
    </div>
  );
};

export default ArticleGrid;
