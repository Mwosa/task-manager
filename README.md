# 🗂️ Task Manager App

A responsive and modern **Task Manager** built with **React (Vite)** and **Tailwind CSS**. The app demonstrates reusable components, state management using React Hooks, API integration and theme switching (light/dark mode).

---

## ✨ Features

- ✅ Add, complete and delete tasks
- 🔄 Filter tasks: All, Active, Completed
- 💾 Tasks persist using `localStorage`
- ⚡ Reusable UI components (Button, Card, Navbar, etc.)
- 🎨 Theme toggle (light/dark mode)
- 🌐 API integration (JSONPlaceholder)
- 🔍 Search and paginate API data
- 📱 Fully responsive design

---

## 🛠️ Tech Stack

- **Frontend**: React (Vite), JSX, Tailwind CSS
- **State Management**: React Hooks (`useState`, `useEffect`, `useContext`)
- **Persistence**: `localStorage` via custom hook (`useLocalStorage`)
- **Routing**: React Router
- **API**: JSONPlaceholder

---

## 🚀 Getting Started

### Prerequisites

- Node.js ≥ 14.x
- pnpm, npm, or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/task-manager-app.git
cd task-manager-app

# Install dependencies
npm install
# or
pnpm install

```

### Development
```
npm run dev
# or
pnpm dev
```

## 🧱 Project Structure
```
src/
├── components/
│   ├── ui/              # Reusable UI elements
│   │   ├── Button.jsx
│   │   └── Card.jsx
│   ├── layout/          # Shared layout elements
│   │   ├── Navbar.jsx
│   │   └── Footer.jsx
│   ├── features/        # Core feature components
│   │   ├── TaskManager.jsx
│   │   └── UserDirectory.jsx
│   └── index.js         # Central export for components
├── context/
│   └── ThemeContext.jsx # Context API for theme management
├── hooks/
│   └── useLocalStorage.js # Custom hook for localStorage
├── App.jsx              # Root component
└── main.jsx             # React entry point
```

## 🙋‍♂️ Author

[Nelson Mwosa](https://github.com/Mwosa)


