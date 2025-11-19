
# 🚀 HERO.IO — Modern App Store Web Application

A visually stunning, feature-rich React application that showcases apps, provides detailed product views, allows users to “install” apps (saved via localStorage), and browse trending applications.
Built with **React**, **Tailwind CSS**, **DaisyUI**, **React Router**, and **React Toastify**.

---
<!-- Typing SVG -->
<p align="center">
  <img src="https://github.com/naimaashraftithii/A8-Hero-App-React/blob/main/HERO_IO.png" />
</p>

Live Link: https://zesty-fenglisu-d5e062.netlify.app/


## 🧾 Table of Contents

* [About](#about)
* [Core Features](#core-features)
* [Pages Overview](#pages-overview)
* [Tech Stack](#tech-stack)
* [Project Structure](#project-structure)
* [Installation & Setup](#installation--setup)
* [Available Scripts](#available-scripts)
* [LocalStorage Logic](#localstorage-logic)
* [Deploying the Project](#deploying-the-project)
* [License](#license)

---

## 📌 About

**HERO.IO** is a mini App Store web platform where users can:

* Browse a large list of apps
* View detailed app information (ratings, downloads, company, description)
* Search and filter applications
* Install apps (stored in localStorage)
* View and sort their installed apps
* Enjoy a modern UI with animations, skeleton loaders, gradients, icons, and more

This project uses a **static dataset (`appsData.json`)** to simulate real applications.

---

## ✨ Core Features

### 🌟 Home Page Highlights

* Beautiful **hero banner section**
* “Trending Apps” section with skeleton loaders
* CTA sections and animated statistics

### 🛍 Browse All Apps

* Search apps by title
* Responsive grid layout
* Zero-state handling (no apps found)

### 📱 Product Details Page

Includes:

* App banner
* Stats: downloads, reviews, ratings
* Install button (with disable state if already installed)
* Ratings breakdown bars
* Full description
* Auto-redirect to Installed Apps after installation

### 📥 App Installation System

Uses **localStorage**:

* Install an app → saved to localStorage
* Uninstall → removed from storage
* Sort installed apps by downloads
* LocalStorage helpers:

  * `installApp()`
  * `getInstalledApps()`
  * `removeInstalledApp()`

### 📦 Installed Apps Page

* Shows installed apps
* Sorting: High → Low & Low → High Downloads
* Uninstall button
* Zero-state with animated image

### ⚠️ Error Handling

* Custom **ErrorPage**
* Reusable **ErrorCard** component
* Router-level error boundary

### 🔄 Loaders & Skeletons

* Custom animated **logo loader**
* Skeleton card loader for trending apps
* Fullscreen loader fallback for router hydration

### 🎨 Modern UI & Animation

* TailwindCSS & DaisyUI
* Hover effects
* Gradients
* Animations
* Responsive layout

---

## 🗺 Pages Overview

| Page               | Path                   | Description                             |
| ------------------ | ---------------------- | --------------------------------------- |
| **Home**           | `/`                    | Hero section, trending apps, statistics |
| **All Apps**       | `/apps` or `/products` | Searchable full list of apps            |
| **App Details**    | `/product/:id`         | Full details + install feature          |
| **Installed Apps** | `/installation`        | Shows user's installed apps             |
| **Error Page**     | `*`                    | 404 fallback                            |

---

## 🛠 Tech Stack

### Frontend

* **React 18**
* **React Router DOM (Hash Router)**

  * Enables GitHub Pages–friendly routing
* **LocalStorage**
* **Tailwind CSS**
* **DaisyUI**
* **React Toastify**
* **React Icons**

### Data

* Static JSON file (`appsData.json`)
* Loaded via custom hook `useProducts()`

---

## 📂 Project Structure

```
src/
│
├─ Components/
│  ├─ Navbar.jsx
│  ├─ Footer.jsx
│  ├─ ErrorCard.jsx
│  ├─ ProductCard.jsx
│  ├─ SkeletonLoader.jsx
│  ├─ Loader.jsx
│
├─ Pages/
│  ├─ Home.jsx
│  ├─ Products.jsx
│  ├─ ProductDetails.jsx
│  ├─ Installation.jsx
│  ├─ ErrorPage.jsx
│
├─ Layouts/
│  └─ MainLayout.jsx
│
├─ utils/
│  └─ localStorage.js
│
├─ hooks/
│  └─ useProducts.js
│
├─ Routes/
│  └─ Routes.jsx
│
├─ assets/
│  └─ logo.png
│  └─ hero.png
│  └─ App-Error.png
│
├─ index.css
└─ main.jsx
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/your-username/hero-io.git
cd hero-io
```

### 2️⃣ Install dependencies

```bash
npm install
# or
yarn install
```

### 3️⃣ Start development server

```bash
npm run dev
```

Runs at:

```
http://localhost:5173
```

---

## 📜 Available Scripts

| Command           | Description              |
| ----------------- | ------------------------ |
| `npm run dev`     | Start Vite dev server    |
| `npm run build`   | Create production build  |
| `npm run preview` | Preview production build |

---

## 💾 LocalStorage Logic

### Storage Key

```
installedApps
```

### Helper Functions

| Function                 | Purpose                 |
| ------------------------ | ----------------------- |
| `installApp(app)`        | Add app to storage      |
| `getInstalledApps()`     | Retrieve installed list |
| `removeInstalledApp(id)` | Uninstall app           |

Apps are stored like this:

```json
[
  {
    "id": 1,
    "title": "Forest Timer",
    "downloads": "3M+",
    "ratingAvg": 4.5
  }
]
```

---

## 🌐 Deploying the Project

Supports platforms:

### ✅ GitHub Pages

Since you use `createHashRouter()`, deployment is **easy**.

1. Add this to `vite.config.js`:

```js
export default defineConfig({
  base: '/your-repo-name/',
})
```

2. Build project:

```bash
npm run build
```

3. Deploy the `dist/` folder in GitHub Pages.

### ✅ Netlify / Vercel

Just deploy normally—no routing issues (HashRouter handles it).

---

## 🧩 Future Improvements

* User authentication
* Backend API for real app data
* Live search + categories
* App reviews & comments
* Favorite / Wishlist app list



