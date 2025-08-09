import { supabase } from '@/lib/supabaseClient';

// --- Types (from former socialProviders.ts) ---
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


// --- LinkedIn Provider (from former linkedin-provider.ts) ---
class LinkedInProvider implements SocialProviderAdapter {
  async refreshToken(account: SocialAccount): Promise<{ success: boolean; new_access_token?: string; new_expires_at?: number; error?: string }> {
    console.log(`Refreshing token for LinkedIn account: ${account.id}`);
    return Promise.resolve({ success: false, error: 'Token refresh not implemented yet.' });
  }

  private async getValidToken(account: SocialAccount): Promise<string | null> {
    if (!account.access_token || !account.expires_at) return null;
    const expiresAt = new Date(account.expires_at).getTime();
    const now = new Date().getTime();
    const buffer = 5 * 60 * 1000; // 5 minutes buffer
    if (now > expiresAt - buffer) {
      const { success, new_access_token } = await this.refreshToken(account);
      if (success && new_access_token) return new_access_token;
      console.error(`Failed to refresh token for account ${account.id}`);
      return null;
    }
    return account.access_token;
  }

  async publish(account: SocialAccount, options: PublishOptions): Promise<{ success: boolean; response: any; error?: string }> {
    const accessToken = await this.getValidToken(account);
    if (!accessToken) {
      return { success: false, response: null, error: 'Invalid or expired access token.' };
    }
    const mockResponse = { id: `urn:li:share:${Math.floor(Math.random() * 100000)}`, text: options.content };
    return Promise.resolve({ success: true, response: mockResponse });
  }
}

function getLinkedInProvider(): SocialProviderAdapter {
  return new LinkedInProvider();
}

// --- Provider Factory (from former socialProviders.ts) ---
const providers: { [key: string]: () => SocialProviderAdapter } = {
  linkedin: getLinkedInProvider,
};

export function getProvider(platform: string): SocialProviderAdapter | null {
  const getProviderFunc = providers[platform.toLowerCase()];
  if (getProviderFunc) return getProviderFunc();
  console.error(`Provider for platform "${platform}" not found.`);
  return null;
}


// --- AI Caption Generation (from former ai.ts) ---
interface GenerateCaptionOptions {
  platform: string;
  keywords: string;
  tone?: string;
  cta?: string;
  audience?: string;
}

interface AIGenerationResult {
  primary: string;
  alternatives: string[];
  hashtags: string[];
}

export async function generateCaption(options: GenerateCaptionOptions): Promise<{ result: AIGenerationResult; tokens: number; prompt: string }> {
  const { platform, keywords, tone = 'engaging', cta = 'Learn More', audience = 'a general audience' } = options;
  const maxLength = platform === 'twitter' ? 280 : 2200;
  const prompt = `You are an expert social media copywriter. Business: DreamPixel Technology. Platform: ${platform}. Audience: ${audience}. Tone: ${tone}. Generate one primary caption (<= ${maxLength} characters), two short alternatives, six hashtags relevant to "${keywords}", and a CTA like "${cta}". Respond with a valid JSON object with three keys: "primary" (string), "alternatives" (array of strings), and "hashtags" (array of strings).`;
  
  const mockApiResponse: AIGenerationResult = {
    primary: `This is a mock primary caption for ${platform} about ${keywords}. It's very ${tone}! Don't forget to ${cta}!`,
    alternatives: [`Short alternative about ${keywords}.`, `Another take on ${keywords} for your consideration.`],
    hashtags: [`#${keywords.split(' ').join('')}`, '#DreamPixel', '#SocialMedia', '#AI', '#ContentCreation', `#${platform}`],
  };
  
  const tokens = JSON.stringify(mockApiResponse).length;
  return { result: mockApiResponse, tokens, prompt };
}