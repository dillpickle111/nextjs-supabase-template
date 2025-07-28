# Next.js + Supabase + Clerk + Vercel Template

A modern, full-stack template built with Next.js 15, Supabase, Clerk authentication, and ready for Vercel deployment.

## Features

- ⚡ **Next.js 15** with App Router and Turbopack
- 🔐 **Clerk Authentication** - Complete auth system with sign-in/sign-up
- 🗄️ **Supabase** - PostgreSQL database with real-time subscriptions
- 🎨 **Tailwind CSS** - Utility-first CSS framework
- 🌙 **Dark Mode** - Built-in theme switching
- 📱 **Responsive Design** - Mobile-first approach
- 🚀 **Vercel Ready** - Optimized for deployment
- 🔧 **TypeScript** - Full type safety
- ⚛️ **React 19** - Latest React features

## Quick Start

### 1. Clone the repository

```bash
git clone <your-repo-url>
cd nextjs-supabase-template
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

Copy the example environment file and fill in your credentials:

```bash
cp env.example .env.local
```

Update `.env.local` with your actual values:

```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key

# Clerk Configuration
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/
```

### 4. Set up Supabase

1. Create a new project at [supabase.com](https://supabase.com)
2. Get your project URL and anon key from Settings > API
3. Create a `users` table in your Supabase database:

```sql
CREATE TABLE users (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  clerk_id TEXT UNIQUE NOT NULL,
  email TEXT,
  name TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE users ENABLE ROW LEVEL SECURITY;

-- Create policy for users to access their own data
CREATE POLICY "Users can view own data" ON users
  FOR SELECT USING (clerk_id = auth.jwt() ->> 'sub');

CREATE POLICY "Users can insert own data" ON users
  FOR INSERT WITH CHECK (clerk_id = auth.jwt() ->> 'sub');

CREATE POLICY "Users can update own data" ON users
  FOR UPDATE USING (clerk_id = auth.jwt() ->> 'sub');
```

### 5. Set up Clerk

1. Create a new application at [clerk.com](https://clerk.com)
2. Get your publishable key and secret key from the dashboard
3. Configure your sign-in and sign-up URLs in the Clerk dashboard

### 6. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the application.

## Project Structure

```
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── api/               # API routes
│   │   ├── dashboard/         # Protected dashboard page
│   │   ├── sign-in/          # Clerk sign-in page
│   │   ├── sign-up/          # Clerk sign-up page
│   │   ├── globals.css       # Global styles
│   │   ├── layout.tsx        # Root layout
│   │   └── page.tsx          # Home page
│   ├── components/            # React components
│   │   ├── ui/               # Reusable UI components
│   │   ├── site-header.tsx   # Site header component
│   │   ├── theme-provider.tsx # Theme provider
│   │   └── user-profile.tsx  # User profile component
│   ├── lib/                  # Utility functions
│   │   ├── supabase.ts       # Supabase client
│   │   └── utils.ts          # Utility functions
│   └── middleware.ts         # Clerk middleware
├── public/                   # Static assets
├── env.example              # Environment variables template
├── vercel.json              # Vercel configuration
└── package.json             # Dependencies and scripts
```

## Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add your environment variables in the Vercel dashboard
4. Deploy!

### Environment Variables for Production

Make sure to add these environment variables in your Vercel project settings:

- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY`
- `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`
- `CLERK_SECRET_KEY`
- `NEXT_PUBLIC_CLERK_SIGN_IN_URL`
- `NEXT_PUBLIC_CLERK_SIGN_UP_URL`
- `NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL`
- `NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL`

## API Routes

### `/api/users`

- `GET` - Retrieve user data from Supabase
- `POST` - Create or update user data in Supabase

Both endpoints require authentication via Clerk.

## Authentication Flow

1. Users can sign up/sign in using Clerk
2. After authentication, users are redirected to the dashboard
3. User data is stored in Supabase with Clerk user ID as reference
4. Protected routes are automatically handled by Clerk middleware

## Customization

### Adding New Pages

Create new pages in the `src/app` directory following Next.js 13+ conventions.

### Styling

The project uses Tailwind CSS. You can customize the design system in `tailwind.config.ts`.

### Database Schema

Modify the Supabase database schema according to your needs. Remember to update Row Level Security policies.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

MIT License - see LICENSE file for details.

## Support

For support, please open an issue on GitHub or contact the maintainers.
