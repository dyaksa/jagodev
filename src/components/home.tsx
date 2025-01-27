import React, { useState } from "react";
import Header from "./Header";
import ArticleGrid from "./ArticleGrid";
import SSOModal from "./auth/SSOModal";
import TopicTabs from "./TopicTabs";
import StaffPicks from "./StaffPicks";

interface HomeProps {
  initialIsLoggedIn?: boolean;
  initialUser?: {
    name: string;
    avatar: string;
    isPremium: boolean;
  };
}

const Home = ({
  initialIsLoggedIn = false,
  initialUser = {
    name: "John Doe",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=john",
    isPremium: false,
  },
}: HomeProps) => {
  const [isLoggedIn, setIsLoggedIn] = useState(initialIsLoggedIn);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [user, setUser] = useState(initialUser);
  const [selectedTopic, setSelectedTopic] = useState("For you");

  const handleLogin = () => {
    setShowLoginModal(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUser(initialUser);
  };

  const handleLoginSuccess = (provider: string) => {
    setIsLoggedIn(true);
    setShowLoginModal(false);
  };

  const handleSearch = (query: string) => {
    console.log("Searching for:", query);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header
        isLoggedIn={isLoggedIn}
        user={user}
        onLogin={handleLogin}
        onLogout={handleLogout}
        onSearch={handleSearch}
      />

      <main className="pt-[72px]">
        <TopicTabs
          selectedTopic={selectedTopic}
          onTopicChange={setSelectedTopic}
        />
        <div className="max-w-screen-xl mx-auto px-4 flex gap-6 py-6">
          <ArticleGrid />
          <div className="w-[400px] sticky top-[88px] h-[calc(100vh-88px)] overflow-y-auto">
            <StaffPicks />
          </div>
        </div>
      </main>

      <SSOModal
        isOpen={showLoginModal}
        onClose={() => setShowLoginModal(false)}
        onLoginSuccess={handleLoginSuccess}
      />
    </div>
  );
};

export default Home;
