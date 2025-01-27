import React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
import { Button } from "../ui/button";
import { Github, Mail } from "lucide-react";

interface SSOModalProps {
  isOpen?: boolean;
  onClose?: () => void;
  onLoginSuccess?: (provider: string) => void;
}

const SSOModal = ({
  isOpen = true,
  onClose = () => {},
  onLoginSuccess = () => {},
}: SSOModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[400px] bg-white">
        <DialogHeader>
          <DialogTitle className="text-center text-2xl font-semibold">
            Sign In
          </DialogTitle>
        </DialogHeader>
        <div className="flex flex-col gap-4 py-6">
          <Button
            variant="outline"
            className="w-full flex items-center justify-center gap-2 py-6"
            onClick={() => onLoginSuccess("google")}
          >
            <Mail className="w-5 h-5" />
            Continue with Google
          </Button>
          <Button
            variant="outline"
            className="w-full flex items-center justify-center gap-2 py-6"
            onClick={() => onLoginSuccess("github")}
          >
            <Github className="w-5 h-5" />
            Continue with GitHub
          </Button>
          <p className="text-center text-sm text-gray-500 mt-4">
            By continuing, you agree to our Terms of Service and Privacy Policy.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SSOModal;
