export type SocialPlatform = 
  "linkedin" | 
  "twitter" | 
  "facebook" | 
  "instagram" |
  "youtube" |
  "whatsapp" |
  "tiktok" |
  "wechat" |
  "messenger" |
  "telegram" |
  "snapchat" |
  "qq" |
  "reddit" |
  "pinterest" |
  "discord";

export interface SocialAccount {
  id: string;
  platform: SocialPlatform;
  account_name: string;
  avatar_url?: string;
}