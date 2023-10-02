# IntrepidAI
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
 - ```https://2023-br-hacks-project.vercel.app/api/copywriter``` POST endpoint that uses AI to write advertisements
 - ```https://2023-br-hacks-project.vercel.app/api/discord-bio``` POST endpoint that uses AI to write discord bios
 - ```https://2023-br-hacks-project.vercel.app/api/email-writer``` POST endpoint that uses AI to write emails
 - ```https://2023-br-hacks-project.vercel.appapi/summarizer``` POST endpoint that uses AI to write summaries of passages
 - ```https://2023-br-hacks-project.vercel.app/api/regex-writer``` POST endpoint that uses AI to write regex expressions
 - ```https://2023-br-hacks-project.vercel.app/api/shell-writer``` POST endpoint that uses AI to write shell scripts
 - ```https://2023-br-hacks-project.vercel.app/api/code-vulnerability``` POST endpoint that uses AI to find vulnerabilities in code
 - ```https://2023-br-hacks-project.vercel.app/api/test-writer``` POST endpoint that uses AI to find vulnerabilities in code
 - ```https://2023-br-hacks-project.vercel.app/api/tagline-writer``` POST endpoint that uses AI to make a business tagline.
 - 
 Input data format: ```{"prompt": "Your prompt"}```
 
 
Example curl command: ```curl -X POST https://2023-br-hacks-project.vercel.app/api/regex-writer -d '{"prompt":"Check for vallid phone numbers"}'```
