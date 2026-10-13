# Learn with IITans

An enterprise Learning Management System (LMS) platform with role-based access for Admins, Instructors, and Students. Features include hierarchical course exploration, interactive video lectures, comprehensive quiz assessments, and analytics dashboards.

---

## 🚀 Features

- **Multi-Tier Curriculum**: Explore Value Streams, Skill Categories, Expertise levels, Modules, Chapters, and Lessons.
- **Role-Based Access Control**:
  - **Admin**: Content publishing, user management, course builders, and revenue/student analytics.
  - **Student**: Video lessons, quiz attempts, discussion forums, and progress tracking.
- **Assessment Engine**: Timed MCQ quizzes with instant score calculation, review capabilities, and attempt limits.
- **Modern UI**: Built with React, TailwindCSS, and custom design tokens.

---

## 🛠️ Tech Stack

- **Frontend**: React 19, TypeScript, Vite, TailwindCSS, TanStack React Query, Video.js, Lucide Icons
- **Backend**: Node.js, Express, TypeScript, Prisma ORM
- **Database**: PostgreSQL (Neon Database)
- **Deployment**: Vercel (Client) & Cloud Services (Server)

---

## 🏃 Local Setup & Development

### 1. Prerequisites
- Node.js (v18+)
- npm / pnpm

### 2. Backend Setup
```bash
cd server
npm install
npx prisma generate
npm run dev
```

### 3. Frontend Setup
```bash
cd client
npm install
npm run dev
```

- **Frontend Application**: `http://localhost:5173`
- **Backend API**: `http://localhost:3000`

---

## 📄 License
ISC
