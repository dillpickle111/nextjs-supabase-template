-- Database Schema for Next.js + Supabase + Clerk Template

-- Create users table
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

-- Create an index on clerk_id for better performance
CREATE INDEX idx_users_clerk_id ON users(clerk_id);

-- Example: Create a posts table for a blog feature
CREATE TABLE posts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  content TEXT,
  published BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS on posts
ALTER TABLE posts ENABLE ROW LEVEL SECURITY;

-- Create policies for posts
CREATE POLICY "Users can view published posts" ON posts
  FOR SELECT USING (published = true);

CREATE POLICY "Users can view own posts" ON posts
  FOR SELECT USING (
    user_id IN (
      SELECT id FROM users WHERE clerk_id = auth.jwt() ->> 'sub'
    )
  );

CREATE POLICY "Users can insert own posts" ON posts
  FOR INSERT WITH CHECK (
    user_id IN (
      SELECT id FROM users WHERE clerk_id = auth.jwt() ->> 'sub'
    )
  );

CREATE POLICY "Users can update own posts" ON posts
  FOR UPDATE USING (
    user_id IN (
      SELECT id FROM users WHERE clerk_id = auth.jwt() ->> 'sub'
    )
  );

CREATE POLICY "Users can delete own posts" ON posts
  FOR DELETE USING (
    user_id IN (
      SELECT id FROM users WHERE clerk_id = auth.jwt() ->> 'sub'
    )
  );

-- Create indexes for better performance
CREATE INDEX idx_posts_user_id ON posts(user_id);
CREATE INDEX idx_posts_published ON posts(published);
CREATE INDEX idx_posts_created_at ON posts(created_at); 