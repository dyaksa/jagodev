import React from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { Star, Twitter, Github, Globe, Upload } from "lucide-react";

interface UserProfileProps {
  user?: {
    name: string;
    email: string;
    avatar: string;
    bio: string;
    twitter: string;
    github: string;
    website: string;
    isPremium: boolean;
  };
  onSave?: (userData: any) => void;
  onUpgradeToPremium?: () => void;
}

const UserProfile = ({
  user = {
    name: "John Doe",
    email: "john@example.com",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=john",
    bio: "Software engineer passionate about web development and writing.",
    twitter: "johndoe",
    github: "johndoe",
    website: "johndoe.com",
    isPremium: false,
  },
  onSave = () => {},
  onUpgradeToPremium = () => {},
}: UserProfileProps) => {
  const [formData, setFormData] = React.useState({
    name: user.name,
    email: user.email,
    bio: user.bio,
    twitter: user.twitter,
    github: user.github,
    website: user.website,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Handle file upload
      console.log("File to upload:", file);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Edit Profile</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Profile Picture Section */}
            <div className="flex items-start gap-6 pb-6 border-b">
              <div className="relative group">
                <Avatar className="h-24 w-24">
                  <AvatarImage src={user.avatar} />
                  <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <label
                  htmlFor="avatar-upload"
                  className="absolute inset-0 flex items-center justify-center bg-black/50 text-white rounded-full opacity-0 group-hover:opacity-100 cursor-pointer transition-opacity"
                >
                  <Upload className="w-6 h-6" />
                </label>
                <input
                  id="avatar-upload"
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleFileUpload}
                />
              </div>
              <div className="flex-1">
                <h2 className="text-xl font-semibold mb-2">{user.name}</h2>
                {user.isPremium ? (
                  <Badge className="bg-yellow-400 text-yellow-900">
                    <Star className="w-3 h-3 mr-1" />
                    Premium Member
                  </Badge>
                ) : (
                  <Button
                    variant="outline"
                    className="mt-2"
                    onClick={onUpgradeToPremium}
                  >
                    <Star className="w-4 h-4 mr-2" />
                    Upgrade to Premium
                  </Button>
                )}
              </div>
            </div>

            {/* Basic Info */}
            <div className="grid gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Display Name</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, name: e.target.value }))
                  }
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, email: e.target.value }))
                  }
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="bio">Bio</Label>
                <Textarea
                  id="bio"
                  value={formData.bio}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, bio: e.target.value }))
                  }
                  placeholder="Write a short bio about yourself"
                  className="h-24"
                />
              </div>
            </div>

            {/* Social Links */}
            <div className="space-y-4 pt-4 border-t">
              <h3 className="font-semibold">Social Links</h3>
              <div className="grid gap-4">
                <div className="flex items-center gap-2">
                  <Twitter className="w-5 h-5 text-gray-500" />
                  <Input
                    placeholder="Twitter username"
                    value={formData.twitter}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        twitter: e.target.value,
                      }))
                    }
                  />
                </div>

                <div className="flex items-center gap-2">
                  <Github className="w-5 h-5 text-gray-500" />
                  <Input
                    placeholder="GitHub username"
                    value={formData.github}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        github: e.target.value,
                      }))
                    }
                  />
                </div>

                <div className="flex items-center gap-2">
                  <Globe className="w-5 h-5 text-gray-500" />
                  <Input
                    placeholder="Personal website"
                    value={formData.website}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        website: e.target.value,
                      }))
                    }
                  />
                </div>
              </div>
            </div>

            <div className="flex justify-end pt-6">
              <Button type="submit" className="w-full sm:w-auto">
                Save Changes
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default UserProfile;
