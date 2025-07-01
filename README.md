
# PostingPal - Social Media Management Platform

A modern, full-featured social media management platform built with React, TypeScript, and Supabase.

## Features

- **User Authentication** - Secure login/signup with Supabase Auth
- **Content Creation** - Create and schedule posts across multiple platforms
- **Analytics Dashboard** - Track engagement, followers, and performance metrics
- **Content Calendar** - Visual calendar for scheduling and managing posts
- **Responsive Design** - Beautiful UI that works on all devices
- **Real-time Updates** - Live data synchronization with Supabase

## Tech Stack

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS, Shadcn/ui components
- **Backend**: Supabase (Authentication, Database, Real-time)
- **Charts**: Recharts
- **Animations**: Framer Motion
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or bun
- A Supabase account

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd postingpal
```

2. Install dependencies:
```bash
npm install
# or
bun install
```

3. Set up environment variables:
Create a `.env` file in the root directory:
```env
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

4. Set up Supabase:
   - Create a new project at [supabase.com](https://supabase.com)
   - Run the SQL from `schema.sql` in your Supabase SQL editor
   - Enable Authentication providers you want to use

5. Start the development server:
```bash
npm run dev
# or
bun dev
```

## Database Schema

The application uses the following main tables:

- `posts` - Store user posts and their metadata
- `auth.users` - Supabase managed user authentication

Run the `schema.sql` file in your Supabase project to set up the database.

## Deployment

### Option 1: Vercel (Recommended)

1. Connect your GitHub repository to Vercel
2. Add environment variables in Vercel dashboard
3. Deploy automatically on git push

### Option 2: Netlify

1. Build the project: `npm run build`
2. Upload the `dist` folder to Netlify
3. Configure environment variables in Netlify dashboard

### Option 3: Traditional Hosting

1. Build the project: `npm run build`
2. Upload the contents of the `dist` folder to your web server
3. Configure your web server to serve the index.html for all routes (SPA routing)

## Environment Variables

Required environment variables:

- `VITE_SUPABASE_URL` - Your Supabase project URL
- `VITE_SUPABASE_ANON_KEY` - Your Supabase anonymous key

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -am 'Add feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For support, email support@postingpal.com or create an issue in the repository.
