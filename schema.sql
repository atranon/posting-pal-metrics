
-- Create posts table
create table public.posts (
  id uuid default uuid_generate_v4() primary key,
  user_id uuid references auth.users not null,
  content text not null,
  image_url text,
  scheduled_for timestamp with time zone not null,
  platforms text[] not null,
  status text not null default "queued",
  created_at timestamp with time zone default now(),
  updated_at timestamp with time zone default now()
);

-- Create social_accounts table
create table public.social_accounts (
  id uuid default uuid_generate_v4() primary key,
  user_id uuid references auth.users not null,
  platform text not null,
  access_token text not null,
  platform_user_id text not null,
  username text not null,
  created_at timestamp with time zone default now(),
  updated_at timestamp with time zone default now()
);

-- Enable RLS
alter table public.posts enable row level security;
alter table public.social_accounts enable row level security;

-- Create policies
create policy "Users can read their own posts"
  on posts for select
  using (auth.uid() = user_id);

create policy "Users can insert their own posts"
  on posts for insert
  with check (auth.uid() = user_id);

create policy "Users can read their own social accounts"
  on social_accounts for select
  using (auth.uid() = user_id);

create policy "Users can manage their own social accounts"
  on social_accounts for all
  using (auth.uid() = user_id);

