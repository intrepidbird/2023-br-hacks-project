import { Configuration, OpenAIApi } from 'openai-edge';
import { NextResponse } from 'next/server';

// Create an OpenAI API client (that's edge friendly!)
const config = new Configuration({
  apiKey: process.env.OPENAI_KEY,
});
const openai = new OpenAIApi(config);

// Set the runtime to edge for best performance
export const runtime = 'edge';

export async function POST(req: Request) {
  const { businessName } = await req.json();
  console.log(`Business Name: ${businessName}`);
  
  // Ask OpenAI for a streaming completion given the business name
  const response = await openai.createChatCompletion({
    model: 'gpt-3.5-turbo', 
    messages: [
      {
        role: 'user',
        content: `Generate a tagline for this business : ${businessName}`,
      },
    ],
  });
  
  const body = await response.json();
  
  // Respond with the stream
  console.log(`Tagline: ${body.choices[0].message.content}`);
  
  return NextResponse.json({ tagline: body.choices[0].message.content });
}
