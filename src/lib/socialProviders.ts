import { getLinkedInProvider } from '@/lib/linkedin-provider';
// Import other providers here as they are added
// import { getTwitterProvider } from './providers/twitter';

export interface SocialAccount {
  id: string;
  user_id: string;
  platform: string;
  access_token: string | null;
  refresh_token: string | null;
  expires_at: string | null; // ISO 8601 string
  meta: any;
}

export interface PublishOptions {
  content: string;
  media?: any[];
}

export interface SocialProviderAdapter {
  publish: (account: SocialAccount, options: PublishOptions) => Promise<{ success: boolean; response: any; error?: string }>;
  refreshToken: (account: SocialAccount) => Promise<{ success: boolean; new_access_token?: string; new_expires_at?: number; error?: string }>;
}

const providers: { [key: string]: () => SocialProviderAdapter } = {
  linkedin: getLinkedInProvider,
  // twitter: getTwitterProvider,
};

export function getProvider(platform: string): SocialProviderAdapter | null {
  const getProviderFunc = providers[platform.toLowerCase()];
  if (getProviderFunc) {
    return getProviderFunc();
  }
  console.error(`Provider for platform "${platform}" not found.`);
  return null;
}