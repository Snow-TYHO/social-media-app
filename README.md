# Socially

A full-stack social media web app built with Next.js. Users can create posts, follow each other, like and comment on posts, and receive real-time notifications.

**Live demo:** [your-vercel-url.vercel.app](https://social-media-app-phi-ten.vercel.app/)

---

## Features

- Authentication via Clerk (sign up, sign in, user management)
- Create posts with text and image uploads
- Like and comment on posts
- Follow / unfollow users
- Notifications for likes, comments, and follows
- User profiles with bio, location, website, and post history
- Dark / light mode toggle
- Responsive layout for mobile and desktop

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS + shadcn/ui |
| Auth | Clerk |
| Database | PostgreSQL (Neon) |
| ORM | Prisma |
| Image Uploads | Cloudinary |
| Deployment | Vercel |

## Getting Started

### Prerequisites

- Node.js 18+
- A [Neon](https://neon.tech) PostgreSQL database
- A [Clerk](https://clerk.com) application
- A [Cloudinary](https://cloudinary.com) account with an unsigned upload preset

### Installation

1. Clone the repo

```bash
git clone https://github.com/Snow-TYHO/social-media-app.git
cd socially
```

2. Install dependencies

```bash
npm install
```

3. Set up environment variables — create a `.env` file in the root:

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key

DATABASE_URL=your_neon_postgres_connection_string

NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET=your_unsigned_upload_preset
```

4. Push the database schema

```bash
npx prisma db push
```

5. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Credits

Project design and tutorial by [Codesistency](https://www.youtube.com/@codesistency) on YouTube.

## Deployment

This app is deployed on Vercel. To deploy your own:

1. Push your repo to GitHub
2. Import the project on [vercel.com](https://vercel.com)
3. Add all environment variables from your `.env` file in the Vercel project settings
4. Deploy
