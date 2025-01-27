import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { Card, CardContent } from "./ui/card";

interface LatestArticle {
  author: {
    name: string;
    avatar: string;
  };
  title: string;
  publishedAt: string;
}

interface LatestArticleProps {
  latest?: LatestArticle[];
}
const LatestArticle = ({
  latest = [
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
    {
      author: {
        name: "The Medium Newsletter",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=medium",
      },
      title: "Use this flowchart to make tough decisions easier",
      publishedAt: "3d ago",
    },
  ],
}: LatestArticleProps) => {
  return (
    <Card className="w-[400] bg-white">
      <CardContent className="p-6">
        <h2 className="font-bold text-xl mb-4">Latest Article</h2>
        <div className="space-y-6">
          {latest.map((article, index) => (
            <div key={index} className="space-y-2">
              <div className="flex space-x-2">
                <Avatar className="h-5 w-5">
                  <AvatarImage
                    src={article.author.avatar}
                    alt={article.author.name}
                  />
                  <AvatarFallback>{article.author.name}</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="text-sm font-medium">{article.author.name}</h3>
                  <p className="text-sm text-gray-500">{article.publishedAt}</p>
                </div>
              </div>
              <h4 className="font-bold text-sm">{article.title}</h4>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default LatestArticle;
