# CyberGRC - Cybersecurity GRC Platform

## Overview

This is a full-stack web application for a cybersecurity GRC (Governance, Risk, and Compliance) company. The application features a modern, professional website with both informational pages and a contact form system. Built with React frontend and Express backend, it showcases cybersecurity services and a dedicated GRC product platform.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **UI Framework**: Shadcn/UI components with Radix UI primitives
- **Styling**: Tailwind CSS with custom theme variables
- **State Management**: TanStack Query for server state management
- **Form Handling**: React Hook Form with Zod validation
- **Build Tool**: Vite for development and production builds

### Backend Architecture
- **Runtime**: Node.js with TypeScript
- **Framework**: Express.js for REST API
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Session Storage**: PostgreSQL-based sessions with connect-pg-simple
- **Development**: TSX for TypeScript execution

### Project Structure
The application follows a monorepo structure with:
- `client/` - React frontend application
- `server/` - Express backend API
- `shared/` - Shared TypeScript schemas and types
- `migrations/` - Database migration files

## Key Components

### Pages and Routing
- **Home Page** (`/`) - Hero section with company overview and CTAs
- **About Page** (`/about`) - Company mission, team, and background
- **Product Page** (`/product`) - Detailed GRC platform features and benefits
- **Services Overview** (`/services`) - Grid of all cybersecurity services
- **Service Detail Pages**:
  - Risk Assessment (`/services/risk-assessment`)
  - Compliance Management (`/services/compliance-management`)
  - Incident Response (`/services/incident-response`)
  - Security Audits (`/services/security-audits`)
- **Contact Page** (`/contact`) - Contact form with backend submission

### UI Components
- **Layout System**: Header with navigation, main content area, footer
- **Design System**: Consistent violet and rose color scheme
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints
- **Interactive Elements**: Hover effects, form validation, toast notifications

### Database Schema
- **Users Table**: Basic user management (id, username, password)
- **Contact Submissions Table**: Form submissions with contact details and service inquiries

## Data Flow

### Contact Form Submission
1. User fills out contact form on frontend
2. Form validation using Zod schema on client-side
3. POST request to `/api/contact` endpoint
4. Server validates data using shared schema
5. Contact submission stored in PostgreSQL database
6. Success/error response sent back to client
7. Toast notification displayed to user

### Static Content Delivery
- Development: Vite dev server serves React app with HMR
- Production: Built assets served as static files from Express

## External Dependencies

### Database
- **Neon Database**: Serverless PostgreSQL for production
- **Drizzle ORM**: Type-safe database operations and migrations
- **Connection**: Uses DATABASE_URL environment variable

### UI Libraries
- **Radix UI**: Accessible component primitives
- **Lucide React**: Icon library
- **Tailwind CSS**: Utility-first CSS framework
- **React Hook Form**: Form state management
- **TanStack Query**: Server state synchronization

### Development Tools
- **TypeScript**: Type safety across the stack
- **Vite**: Fast build tool and dev server
- **ESBuild**: Production build bundling
- **Replit Integration**: Development environment optimizations

## Deployment Strategy

### Development
- Run `npm run dev` to start both frontend and backend in development mode
- Frontend served by Vite dev server with HMR
- Backend uses TSX for TypeScript execution
- Database migrations applied with `npm run db:push`

### Production Build
- `npm run build` creates optimized client build and bundles server
- Client assets built to `dist/public/`
- Server bundled to `dist/index.js`
- `npm start` runs production server serving both API and static assets

### Environment Variables
- `DATABASE_URL`: PostgreSQL connection string (required)
- `NODE_ENV`: Environment mode (development/production)

The application is designed to be deployed on platforms like Replit, with automatic database provisioning and built-in development tools integration.