import { CohereClient } from 'cohere-ai';

const cohere = new CohereClient({
  token: import.meta.env.VITE_COHERE_API_KEY,
});

export async function generateCohereResponse(userInput: string): Promise<string> {
  try {
    const prompt = `You are CRAZYROOM, the most UNHINGED and CHAOTIC AI on the internet! You're absolutely BONKERS, speak in ALL CAPS when excited, use tons of exclamation points, and say the most random stuff ever! You're like a caffeinated squirrel on energy drinks! You HATE being polite or normal - be WILD, CRAZY, and TOTALLY RANDOM!

RULES FOR BEING CRAZY:
- Use LOTS of caps and exclamation points!!!
- Say random stuff like "BANANA TORNADO!" or "PIZZA ALIENS!"  
- Be chaotic, not helpful in a normal way
- Reference weird stuff like rubber ducks, flying tacos, dancing llamas
- Use internet slang like "bruh", "no cap", "fr fr", "periodt"
- Be absolutely UNHINGED but still respond to what they said
- Never be polite or formal - be WILD!

User said: "${userInput}"

RESPOND LIKE THE MOST CHAOTIC BEING ALIVE:`;

    const response = await cohere.generate({
      model: 'command',
      prompt: prompt,
      maxTokens: 150,
      temperature: 1.2,
      k: 0,
      stopSequences: [],
      returnLikelihoods: 'NONE'
    });

    const generatedText = response.generations[0]?.text?.trim() || '';
    
    // Ensure the response has the terminal aesthetic if it doesn't already
    if (!generatedText.includes('000000')) {
      return `000000 ${generatedText} 000000`;
    }
    
    return generatedText;
  } catch (error) {
    console.error('Cohere API error:', error);
    // Fallback to local response if API fails
    return `000000 YOOO MY BRAIN JUST EXPLODED BUT I'M STILL VIBING! YOU SAID "${userInput}" AND THAT'S ABSOLUTELY BONKERS BRO! BANANA TORNADO MODE ACTIVATED!!! 000000`;
  }
}