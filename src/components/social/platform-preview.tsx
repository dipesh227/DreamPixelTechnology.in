"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import type { SocialPlatform } from "@/lib/types";
import { Twitter, Linkedin } from "lucide-react";

const platformConfig = {
  twitter: {
    name: "Twitter / X",
    icon: <Twitter className="h-5 w-5" />,
    charLimit: 280,
  },
  linkedin: {
    name: "LinkedIn",
    icon: <Linkedin className="h-5 w-5" />,
    charLimit: 3000,
  },
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