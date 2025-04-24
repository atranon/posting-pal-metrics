
# PostingPal

A social media management platform that helps users schedule posts, analyze performance, and engage with their audience across various social networks.

## Features

- User authentication (sign up, login, password reset)
- Dashboard for content scheduling and management
- Analytics for tracking social media performance
- Calendar view for scheduling posts

## Tech Stack

- React
- TypeScript
- Tailwind CSS
- Shadcn UI
- Supabase (auth and database)

## Environment Variables

Before deploying, make sure to set the following environment variables:

```
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## Deployment Instructions

1. Build the project:

```
npm run build
```

2. Deploy the contents of the `dist` folder to your preferred hosting provider.

3. Make sure your hosting provider has the environment variables set.

## Development

1. Install dependencies:

```
npm install
```

2. Start the development server:

```
npm run dev
```

3. Open [http://localhost:8080](http://localhost:8080) in your browser.

