import React from "react";
import { useParams } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import {
  MoreHorizontal,
  Heart,
  Bookmark,
  Share2,
  MessageCircle,
} from "lucide-react";

interface ArticleDetailProps {
  article?: {
    title: string;
    content: string;
    author: {
      name: string;
      avatar: string;
      publication?: string;
    };
    publishedDate: string;
    readingTime: number;
    imageUrl: string;
    claps?: number;
    comments?: number;
  };
}

const ArticleDetail = ({
  article = {
    title: "A Professional Snapshot Lens",
    content: `<div class="prose prose-lg max-w-none">
      <p>Oh, boy. This is a lens that demands patience and care to be truly appreciated. It's unlike the typical gear we're used to using — definitely not for everyone, and certainly not for every occasion. Put simply, it's a professional take on an indie lens — indie being an aesthetic rooted in disposable film cameras or Lomography and branching into the work of Nan Goldin, Klaudia Shuban, and other subjectivist photographers or free-spirited hipsters with cameras.</p>
      <h2>It's Not for Architectural Photography or Reproduction</h2>
      <p>While this lens can be sharp when stopped down, the barrel distortion and chromatic aberration make it unsuitable for serious architectural work or reproduction. No amount of lens correction in the post will ever straighten those lines, and you are better off with another lens. For the same reason, it is not suitable for product photographs.</p>
    </div>`,
    author: {
      name: "Marjan Krebelj",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=marjan",
      publication: "Full Frame",
    },
    publishedDate: "8 min read · 16 hours ago",
    readingTime: 8,
    imageUrl: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32",
    claps: 77,
    comments: 4,
  },
}: ArticleDetailProps) => {
  const { id } = useParams();

  return (
    <div className="min-h-screen bg-white">
      {/* Author Header - Now sticky */}
      <header className="sticky top-0 bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
        <div className="max-w-[692px] mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Avatar className="h-6 w-6">
                <AvatarImage src={article.author.avatar} />
                <AvatarFallback>{article.author.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div className="flex items-center gap-1 text-sm">
                <span className="font-medium">{article.author.name}</span>
                {article.author.publication && (
                  <>
                    <span className="text-gray-500">in</span>
                    <span className="font-medium">
                      {article.author.publication}
                    </span>
                  </>
                )}
                <span className="text-gray-500">·</span>
                <span className="text-gray-500">{article.publishedDate}</span>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <Button variant="ghost" size="icon" className="h-9 w-9">
                <Share2 className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="h-9 w-9">
                <Bookmark className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="h-9 w-9">
                <Heart className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="h-9 w-9">
                <MoreHorizontal className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Article Content */}
      <div className="max-w-[692px] mx-auto px-4 py-12">
        <h1 className="text-[32px] font-bold leading-[40px] tracking-[-0.016em] font-sohne text-[#242424] mb-8">
          {article.title}
        </h1>

        {/* Article Image */}
        <div className="w-full mb-12">
          <img
            src={article.imageUrl}
            alt={article.title}
            className="w-full aspect-[4/3] object-cover"
          />
          <p className="text-sm text-gray-500 text-center mt-2">
            Photo by author
          </p>
        </div>

        {/* Article Content */}
        <article>
          <div
            className="prose max-w-none prose-p:text-[20px] prose-p:leading-[32px] prose-p:font-sourceSerif prose-p:text-[#242424] prose-p:tracking-[-0.003em] prose-headings:font-sohne prose-headings:text-[#242424] prose-h2:text-[22px] prose-h2:leading-[28px] prose-h2:tracking-[-0.012em] prose-h2:mt-[2em] prose-h2:mb-[-0.28em] prose-p:mb-[2em] prose-p:font-normal"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />

          {/* Article Stats */}
          <div className="flex items-center justify-between mt-8 pt-8 border-t border-gray-200">
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm" className="gap-2">
                <Heart className="h-5 w-5" />
                {article.claps}
              </Button>
              <Button variant="ghost" size="sm" className="gap-2">
                <MessageCircle className="h-5 w-5" />
                {article.comments}
              </Button>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon" className="h-9 w-9">
                <Share2 className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="h-9 w-9">
                <Bookmark className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default ArticleDetail;
