import { Suspense } from "react";
import { useRoutes, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import UserProfile from "./components/UserProfile";
import ArticleDetail from "./components/ArticleDetail";
import FollowingPage from "./components/FollowingPage";
import UserDetailPage from "./components/UserDetailPage";
import NotFound from "./components/NotFound";
import Layout from "./components/Layout";
import routes from "tempo-routes";

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      {import.meta.env.VITE_TEMPO === "true" && useRoutes(routes)}
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/article/:id" element={<ArticleDetail />} />
          <Route path="/following" element={<FollowingPage />} />
          <Route path="/@:username" element={<UserDetailPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </Suspense>
  );
}

export default App;
