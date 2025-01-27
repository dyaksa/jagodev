import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import ArticleCard from "./ArticleCard";

interface FollowedUser {
  id: string;
  name: string;
  avatar: string;
  bio: string;
  articles: Array<{
    id: string;
    title: string;
    preview: string;
    readingTime: number;
    views: number;
    comments: number;
    imageUrl: string;
  }>;
}

interface FollowingPageProps {
  users?: FollowedUser[];
}

const FollowingPage = ({
  users = [
    {
      id: "1",
      name: "Sarah Wilson",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=sarah",
      bio: "Tech writer & Software Engineer",
      articles: [
        {
          id: "1",
          title: "The Future of React Server Components",
          preview:
            "An in-depth look at how RSC will change frontend development",
          readingTime: 8,
          views: 1200,
          comments: 23,
          imageUrl:
            "https://images.unsplash.com/photo-1633356122544-f134324a6cee",
        },
      ],
    },
    {
      id: "2",
      name: "David Chen",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=david",
      bio: "AI Researcher | Writing about ML",
      articles: [
        {
          id: "2",
          title: "Understanding Large Language Models",
          preview: "A deep dive into the architecture of modern LLMs",
          readingTime: 12,
          views: 3400,
          comments: 45,
          imageUrl:
            "https://images.unsplash.com/photo-1677442136019-21780ecad995",
        },
        {
          id: "3",
          title: "The Rise of AI Agents",
          preview: "How autonomous AI agents are changing the landscape",
          readingTime: 6,
          views: 890,
          comments: 12,
          imageUrl:
            "https://images.unsplash.com/photo-1675256900659-f8c602a4a3c0",
        },
      ],
    },
  ],
}: FollowingPageProps) => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-8">Following</h1>

      <div className="space-y-12">
        {users.map((user) => (
          <div key={user.id} className="space-y-6">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <Avatar className="h-12 w-12">
                  <AvatarImage src={user.avatar} />
                  <AvatarFallback>{user.name[0]}</AvatarFallback>
                </Avatar>
                <div>
                  <h2 className="font-medium text-lg">{user.name}</h2>
                  <p className="text-gray-600 text-sm">{user.bio}</p>
                </div>
              </div>
              <Button variant="outline" size="sm">
                Following
              </Button>
            </div>

            <div className="pl-15 border-l-2 border-gray-100 ml-6 space-y-4">
              {user.articles.map((article) => (
                <ArticleCard
                  key={article.id}
                  title={article.title}
                  preview={article.preview}
                  readingTime={article.readingTime}
                  views={article.views}
                  comments={article.comments}
                  imageUrl={article.imageUrl}
                  author={{
                    name: user.name,
                    avatar: user.avatar,
                  }}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FollowingPage;
