import React from "react";
import { useParams } from "react-router-dom";
import { MoreHorizontal } from "lucide-react";
import { Button } from "./ui/button";
import ArticleCard from "./ArticleCard";

interface UserDetailPageProps {
  user?: {
    name: string;
    avatar: string;
    bio: string;
    followers: number;
    articles: Array<{
      id: string;
      title: string;
      preview: string;
      readingTime: number;
      views: number;
      comments: number;
      imageUrl: string;
    }>;
  };
}

const UserDetailPage = ({
  user = {
    name: "Dyaksa Jauharuddin",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
    bio: "Tech Enthusiast",
    followers: 1,
    articles: [
      {
        id: "1",
        title:
          "Memaksimalkan Penanganan Error di NestJS: Panduan Lengkap Menggunakan Interceptor Secara Global",
        preview:
          "Hai, Sobat Backend! Kita semua tahu bahwa menulis kode itu seni. Dan, seperti semua jenis seni, terkadang kita perlu...",
        readingTime: 8,
        views: 1200,
        comments: 23,
        imageUrl:
          "https://images.unsplash.com/photo-1633356122544-f134324a6cee",
      },
      {
        id: "2",
        title:
          "GoLang HTTP Client with Circuit Breaker and Retry Backoff Mechanism",
        preview:
          "In the world of distributed systems and microservices, building robust and resilient applications is crucial. One common...",
        readingTime: 12,
        views: 51,
        comments: 0,
        imageUrl:
          "https://images.unsplash.com/photo-1677442136019-21780ecad995",
      },
    ],
  },
}: UserDetailPageProps) => {
  const { username } = useParams();

  return (
    <div className="min-h-screen bg-white pt-[72px]">
      {/* User Info Section */}
      <div className="max-w-[692px] mx-auto px-4 py-12">
        <div className="flex items-start justify-between mb-6">
          <div>
            <h1 className="text-[32px] font-bold mb-2">{user.name}</h1>
            <p className="text-gray-500 mb-4">{user.followers} Follower</p>
            <p className="text-gray-600">{user.bio}</p>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline">Follow</Button>
            <Button variant="ghost" size="icon">
              <MoreHorizontal className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex border-b mb-8">
          <Button
            variant="ghost"
            className="px-6 py-3 -mb-[2px] border-b-2 border-black rounded-none"
          >
            Home
          </Button>
          <Button
            variant="ghost"
            className="px-6 py-3 -mb-[2px] text-gray-500 hover:text-black rounded-none"
          >
            Lists
          </Button>
          <Button
            variant="ghost"
            className="px-6 py-3 -mb-[2px] text-gray-500 hover:text-black rounded-none"
          >
            About
          </Button>
        </div>

        {/* Articles */}
        <div className="space-y-2">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-sm font-medium">Pinned</span>
          </div>
          <div className="divide-y">
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
      </div>
    </div>
  );
};

export default UserDetailPage;
