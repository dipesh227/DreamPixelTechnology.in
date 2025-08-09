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

  // MOCK AI PROVIDER CALL
  console.log("--- AI PROMPT ---");
  console.log(prompt);
  console.log("-----------------");

  // This is a mocked response. In a real app, you'd use fetch() to call an AI service.
  const mockApiResponse: AIGenerationResult = {
    primary: `This is a mock primary caption for ${platform} about ${keywords}. It's very ${tone}! Don't forget to ${cta}!`,
    alternatives: [
      `Short alternative about ${keywords}.`,
      `Another take on ${keywords} for your consideration.`,
    ],
    hashtags: [
      `#${keywords.split(' ').join('')}`,
      '#DreamPixel',
      '#SocialMedia',
      '#AI',
      '#ContentCreation',
      `#${platform}`,
    ],
  };

  // Mock token calculation
  const tokens = JSON.stringify(mockApiResponse).length;

  return { result: mockApiResponse, tokens, prompt };
}