"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import type { SocialPlatform } from "@/lib/types";
import { 
  Twitter, 
  Linkedin,
  Facebook,
  Instagram,
  Youtube,
  MessageSquare,
  Music,
  MessageCircle,
  Send,
  Ghost,
  Image // Using a generic image icon for Pinterest
} from "lucide-react";

const platformConfig = {
  twitter: { name: "Twitter / X", icon: <Twitter className="h-5 w-5" />, charLimit: 280 },
  linkedin: { name: "LinkedIn", icon: <Linkedin className="h-5 w-5" />, charLimit: 3000 },
  facebook: { name: "Facebook", icon: <Facebook className="h-5 w-5" />, charLimit: 63206 },
  instagram: { name: "Instagram", icon: <Instagram className="h-5 w-5" />, charLimit: 2200 },
  youtube: { name: "YouTube", icon: <Youtube className="h-5 w-5" />, charLimit: 5000 },
  whatsapp: { name: "WhatsApp", icon: <MessageSquare className="h-5 w-5" />, charLimit: 4096 },
  tiktok: { name: "TikTok", icon: <Music className="h-5 w-5" />, charLimit: 2200 },
  wechat: { name: "WeChat", icon: <MessageSquare className="h-5 w-5" />, charLimit: 1000 },
  messenger: { name: "Messenger", icon: <MessageCircle className="h-5 w-5" />, charLimit: 20000 },
  telegram: { name: "Telegram", icon: <Send className="h-5 w-5" />, charLimit: 4096 },
  snapchat: { name: "Snapchat", icon: <Ghost className="h-5 w-5" />, charLimit: 250 },
  qq: { name: "QQ", icon: <MessageSquare className="h-5 w-5" />, charLimit: 1000 },
  reddit: { name: "Reddit", icon: <MessageSquare className="h-5 w-5" />, charLimit: 40000 }, // Using a generic message icon for Reddit
  pinterest: { name: "Pinterest", icon: <Image className="h-5 w-5" />, charLimit: 500 }, // Using a generic image icon for Pinterest
  discord: { name: "Discord", icon: <MessageSquare className="h-5 w-5" />, charLimit: 2000 },
};

interface PlatformPreviewProps {
  content: string;
  platforms: SocialPlatform[];
}

export function PlatformPreview({ content, platforms }: PlatformPreviewProps) {
  if (platforms.length === 0) {
    return (
      <Card className="flex items-center justify-center h-full min-h-[200px]">
        <CardContent className="p-6 text-center">
          <p className="text-muted-foreground">Select an account to see a preview.</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-4">
      {platforms.map((platform) => {
        const config = platformConfig[platform as keyof typeof platformConfig];
        if (!config) return null;

        const charCount = content.length;
        const isOverLimit = charCount > config.charLimit;

        return (
          <Card key={platform}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <div className="flex items-center gap-2">
                {config.icon}
                <CardTitle className="text-lg">{config.name}</CardTitle>
              </div>
              <p className={cn("text-sm", isOverLimit ? "text-destructive" : "text-muted-foreground")}>
                {charCount}/{config.charLimit}
              </p>
            </CardHeader>
            <CardContent>
              <div className="flex gap-3">
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                  <AvatarFallback>DP</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <p className="font-semibold">Your Name</p>
                  <p className="text-sm whitespace-pre-wrap break-words">
                    {content || <span className="text-muted-foreground">Start typing...</span>}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}