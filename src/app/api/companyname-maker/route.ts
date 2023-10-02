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
  const { prompt } = await req.json();
  console.log(prompt)
  // Ask OpenAI for a streaming completion given the prompt
  const response = await openai.createChatCompletion({
    model: 'gpt-3.5-turbo',
    messages: [
      {
        role: 'user',
        content: `Make 1 company name based on this prompt: ${prompt}`,
      },
    ],
  });
  const body = await response.json()
  // Respond with the stream
  console.log(body.choices[0].message.content)
  return NextResponse.json({ summary: body.choices[0].message.content })
}