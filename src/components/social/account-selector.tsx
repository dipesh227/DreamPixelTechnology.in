"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import type { SocialAccount } from "@/lib/types";
import { Linkedin, Twitter, Instagram, Facebook } from "lucide-react";

const platformIcons: { [key: string]: React.ReactNode } = {
  linkedin: <Linkedin className="h-4 w-4" />,
  twitter: <Twitter className="h-4 w-4" />,
  instagram: <Instagram className="h-4 w-4" />,
  facebook: <Facebook className="h-4 w-4" />,
};

interface AccountSelectorProps {
  accounts: SocialAccount[];
  selectedAccounts: string[];
  onSelectionChange: (selected: string[]) => void;
}

export function AccountSelector({ accounts, selectedAccounts, onSelectionChange }: AccountSelectorProps) {
  const handleCheckboxChange = (accountId: string, checked: boolean) => {
    if (checked) {
      onSelectionChange([...selectedAccounts, accountId]);
    } else {
      onSelectionChange(selectedAccounts.filter((id) => id !== accountId));
    }
  };

  return (
    <div className="space-y-4">
      <Label>Select Accounts</Label>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {accounts.map((account) => (
          <div key={account.id} className="flex items-center space-x-3 p-3 bg-secondary rounded-md">
            <Checkbox
              id={account.id}
              checked={selectedAccounts.includes(account.id)}
              onCheckedChange={(checked) => handleCheckboxChange(account.id, !!checked)}
            />
            <Avatar className="h-8 w-8">
              <AvatarImage src={account.avatar_url} alt={account.account_name} />
              <AvatarFallback>{platformIcons[account.platform]}</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <Label htmlFor={account.id} className="font-medium capitalize">
                {account.platform}
              </Label>
              <p className="text-xs text-muted-foreground">{account.account_name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}