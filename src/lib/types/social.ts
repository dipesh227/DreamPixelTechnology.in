export type SocialPlatform = "linkedin" | "twitter" | "facebook" | "instagram";

export interface SocialAccount {
  id: string;
  platform: SocialPlatform;
  account_name: string;
  avatar_url?: string;
}