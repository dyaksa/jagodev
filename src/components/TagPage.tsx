import ArticleCard from "./ArticleCard";
import LatestArticle from "./LatestArticle";

const TagPage = ({
  articles = [
    {
      id: "1",
      title: "Go vs. One Billion Rows: From Minutes Down to Seconds",
      author: {
        name: "Yash",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=yash",
      },
      preview:
        "Hai, Sobat Backend! Kita semua tahu bahwa menulis kode itu seni. Dan, seperti semua jenis seni, terkadang kita perlu...",
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
      preview:
        "In the world of distributed systems and microservices, building robust and resilient applications is crucial. One common...",
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
      preview:
        "In the world of distributed systems and microservices, building robust and resilient applications is crucial. One common...",
      readingTime: 5,
      views: 311,
      comments: 13,
      isPremium: true,
      imageUrl: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97",
    },
    {
      id: "3",
      title: "Why Everyone Talks About Zig",
      author: {
        name: "Ben Weidig",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=ben",
      },
      preview:
        "In the world of distributed systems and microservices, building robust and resilient applications is crucial. One common...",
      readingTime: 5,
      views: 311,
      comments: 13,
      isPremium: true,
      imageUrl: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97",
    },
    {
      id: "3",
      title: "Why Everyone Talks About Zig",
      author: {
        name: "Ben Weidig",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=ben",
      },
      preview:
        "In the world of distributed systems and microservices, building robust and resilient applications is crucial. One common...",
      readingTime: 5,
      views: 311,
      comments: 13,
      isPremium: true,
      imageUrl: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97",
    },
  ],
}) => {
  return (
    <div className="min-h-screen bg-white">
      <main className="pt-[72px]">
        <div className="max-w-screen-xl mx-auto px-4 flex gap-6 py-6">
          <div className="w-[400px] sticky top-[88px] h-[calc(100vh-88px)] overflow-y-auto">
            <LatestArticle />
          </div>
          <div className="max-w-[680px]">
            <div className="divide-y">
              {articles.map((article) => (
                <ArticleCard
                  key={article.id}
                  title={article.title}
                  preview={article.preview}
                  readingTime={article.readingTime}
                  views={article.views}
                  comments={article.comments}
                  imageUrl={article.imageUrl}
                  author={article.author}
                />
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default TagPage;
