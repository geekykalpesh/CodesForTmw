# 📁 Project Structure

This document explains the organization of the codebase to help you navigate through the project easily.

```text
figma-clone/
├── docs/                # Project Documentation
├── public/              # Static assets (favicons, etc.)
├── src/                 # Application Source Code
│   ├── assets/          # Images and fonts
│   ├── components/      # Reusable React components
│   ├── store/           # Redux Toolkit state management
│   ├── utils/           # Utility functions (Tailwind merge)
│   ├── App.jsx          # Main application component
│   ├── index.css        # Global styles and Tailwind imports
│   └── main.jsx         # Entry point
├── index.html           # HTML template
├── package.json         # Dependencies and scripts
└── vite.config.js       # Vite configuration
```

### 🧱 Component Breakdown

1.  **NewsFeed.jsx**: The brain of the app. It handles the 5-second loading logic and acts as the container for Sidebar and main content.
2.  **Sidebar.jsx**: Contains the Profile section, View Toggle (Grid/List), and the Feedback button.
3.  **Card.jsx**: A versatile component that switches layout based on the `viewMode` (Grid vs List). Handles card removal and selection.
4.  **Pagination.jsx**: Custom circular pagination UI. Controls which set of 6 cards are displayed.
5.  **FeedbackForm.jsx**: A modal form with real-time validation for gathering user feedback.
6.  **ArticleModal.jsx**: A detailed view for when a card is clicked (not part of core requirements but added for a premium feel).

### 🧠 Store (Redux)

-   **postsSlice.js**: centralizes all logic for fetching posts, removing cards with "shift-up" logic, toggling views, and handling pagination.
