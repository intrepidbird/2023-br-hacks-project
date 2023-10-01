This is a [Next.js](https://nextjs.org/) API bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) and using the OpenAI API.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Endpoints
 - ```http://localhost:3000/api/copywriter``` POST enpoint that uses AI to write advertisements
 - ```http://localhost:3000/api/discord-bio``` POST enpoint that uses AI to write discord bios
 - ```http://localhost:3000/api/email-writer``` POST enpoint that uses AI to write emails
 - ```http://localhost:3000/api/summarizer``` POST enpoint that uses AI to write summaries of passages
 - ```http://localhost:3000/api/regex-writer``` POST enpoint that uses AI to write regex expressions
 Input data format: ```{"prompt": "Your prompt"}```
 Example curl command: ```curl -X POST localhost:3000/api/regex-writer -d '{"prompt":"Check for vallid phone numbers"}'```