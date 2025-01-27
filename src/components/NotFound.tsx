import React from "react";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <h1 className="text-[32px] font-bold mb-4">Page not found</h1>
        <p className="text-gray-600 mb-8">
          The page you were looking for doesn't exist or may have been moved.
        </p>
        <Button onClick={() => navigate("/")} className="px-8">
          Go home
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
