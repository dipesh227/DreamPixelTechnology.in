"use client";

import * as React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Sparkles, Send, Calendar } from "lucide-react";
import { AccountSelector } from "@/components/forms/account-selector";
import { PlatformPreview } from "@/components/posts/platform-preview";
import type { SocialAccount, SocialPlatform } from "@/lib/types";
import { toast } from "sonner";

// Placeholder data for connected accounts
const mockAccounts: SocialAccount[] = [
  { id: "li-123", platform: "linkedin", account_name: "John Doe", avatar_url: "https://i.pravatar.cc/40?u=li" },
  { id: "tw-456", platform: "twitter", account_name: "@johndoe", avatar_url: "https://i.pravatar.cc/40?u=tw" },
];

export function SocialComposer() {
  const [content, setContent] = React.useState("");
  const [selectedAccounts, setSelectedAccounts] = React.useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const selectedPlatforms = React.useMemo(() => {
    const platforms = new Set<SocialPlatform>();
    selectedAccounts.forEach(accId => {
      const account = mockAccounts.find(a => a.id === accId);
      if (account) platforms.add(account.platform);
    });
    return Array.from(platforms);
  }, [selectedAccounts]);

  const handlePublish = async () => {
    if (content.trim().length === 0 || selectedAccounts.length === 0) {
      toast.error("Please write some content and select at least one account.");
      return;
    }
    setIsSubmitting(true);
    toast.info("Publishing post...");

    // This simulates calling the /api/posts/publish endpoint for each account
    const promises = selectedAccounts.map(accountId => 
      fetch('/api/posts/publish', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ accountId, content }),
      })
    );

    try {
      const results = await Promise.all(promises);
      const successful = results.filter(r => r.ok).length;
      if (successful > 0) {
        toast.success(`Successfully published to ${successful} account(s)!`);
        setContent("");
        setSelectedAccounts([]);
      }
      if (successful < results.length) {
        toast.error(`Failed to publish to ${results.length - successful} account(s).`);
      }
    } catch (error) {
      toast.error("An unexpected error occurred while publishing.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <Card>
        <CardHeader>
          <CardTitle>Create a Post</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <AccountSelector
            accounts={mockAccounts}
            selectedAccounts={selectedAccounts}
            onSelectionChange={setSelectedAccounts}
          />
          <div>
            <Label htmlFor="post-content">Content</Label>
            <Textarea
              id="post-content"
              placeholder="What's on your mind?"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="min-h-[150px] mt-2"
            />
          </div>
          <div className="flex flex-col sm:flex-row gap-2">
            <Button variant="outline" className="w-full sm:w-auto">
              <Sparkles className="h-4 w-4 mr-2" />
              AI Suggest
            </Button>
            <div className="flex-1" />
            <Button variant="outline" className="w-full sm:w-auto">
              <Calendar className="h-4 w-4 mr-2" />
              Schedule
            </Button>
            <Button onClick={handlePublish} disabled={isSubmitting} className="w-full sm:w-auto">
              <Send className="h-4 w-4 mr-2" />
              {isSubmitting ? "Publishing..." : "Publish Now"}
            </Button>
          </div>
        </CardContent>
      </Card>
      <div>
        <PlatformPreview content={content} platforms={selectedPlatforms} />
      </div>
    </div>
  );
}