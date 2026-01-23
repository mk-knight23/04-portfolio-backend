# Architecture: 04-portfolio-site-v1

## Overview
A blog-centric developer portfolio built with React 19 and Vite 6. The architecture is designed for clarity and fast content delivery, utilizing a responsive sidebar navigation and a primary content feed.

## Tech Stack
-   **Framework**: React 19
-   **Build Tool**: Vite 6
-   **Styling**: Tailwind CSS v4
-   **Icons**: Lucide React
-   **Animations**: Framer Motion 12+

## Component Structure
-   **Sidebar**: Persistent navigation with profile information and social links.
-   **Main Feed**: Scrollable area for blog posts and featured content.
-   **Article Cards**: Responsive cards with metadata (date, read time, comments).

## Data Flow
-   Static data models for blog posts defined in `src/App.tsx`.
-   State management using React hooks for UI interactions (active tabs, search).
