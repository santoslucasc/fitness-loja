# Site Visualization Context: Fitness E-commerce

This document provides a comprehensive overview of the "Fitness E-commerce" project to help an AI visualize, understand, and modify the codebase.

## 1. Project Overview
**Type**: Single Page Application (SPA)
**Frameworks**: React 19, Vite, Tailwind CSS
**Routing**: `react-router-dom` (using `HashRouter`)
**Icons**: `lucide-react`

## 2. Design System & Aesthetics
The site uses a "High Performance" dark mode aesthetic, designed to feel premium and energetic.

### Color Palette (Tailwind Config)
| Token | Hex | Description | Usage |
| :--- | :--- | :--- | :--- |
| **Background** | `#0F172A` | Slate 900 | Main body background |
| **Surface** | `#1E293B` | Slate 800 | Cards, Sidebars, Headers |
| **Surface Highlight** | `#334155` | Slate 700 | Borders, Dividers, Hover states |
| **Brand Neon** | `#22C55E` | Neon Green | **Primary Action**, Buttons, Active states, Logos |
| **Brand Accent** | `#F59E0B` | Orange | Warnings, Highlights, Secondary accents |
| **Text Primary** | `#F8FAFC` | White | Main headings, Body text |
| **Text Secondary** | `#94A3B8` | Slate 400 | Subtitles, Meta info, Inactive states |

### Typography
- **Font Family**: `Inter`, sans-serif.
- **Style**: Modern, clean, good readability on dark backgrounds.

## 3. Layout Structure

### Public Store Layout (`Layout.jsx`)
Used for customer-facing pages.
1.  **Navbar**:
    *   Logo: "FITPRO" (with Neon accent).
    *   Search Bar: Centralized.
    *   Actions: User Profile Link, Cart Trigger.
2.  **Main Content**: Dynamic content based on route.
3.  **Footer**: Site links and info.
4.  **Overlays**:
    *   `CartDrawer`: Slide-over from right, shows cart items.
    *   `CartNotification`: Toast notification when adding items.

### Admin Dashboard Layout (`AdminLayout.jsx`)
Used for `/admin` routes.
1.  **Sidebar (Left)**:
    *   Header: "FITPRO ADMIN".
    *   Navigation: Dashboard, Products, Orders, Customers, Settings.
    *   Action: Logout (Red).
2.  **Header (Top)**:
    *   User Info: Admin avatar and name.
3.  **Main Content**:
    *   Scrollable area with gray background overlay (`bg-slate-900/50`).

## 4. Folder Structure & Key Files

```
src/
├── components/
│   ├── layout/       # Structural components (Navbar, Layout, Footer, Sidebar)
│   ├── ui/           # Reusable UI elements (CartNotification, Cards, Buttons)
│   └── ...
├── contexts/         # Global State Management
│   ├── CartContext.jsx  # Cart logic
│   └── UserContext.jsx  # User data (mocked)
├── pages/
│   ├── admin/        # Admin views (ProductList, ProductForm, etc.)
│   └── store/        # Customer views (Home, ProductDetail, Checkout)
├── data/             # Static data (likely products.js)
├── services/         # API calls (empty or basic)
├── App.jsx           # Main Router configuration
├── main.jsx          # Entry point
└── index.css         # Global styles & Tailwind directives
```

## 5. Key Variables & State

### Global State (`CartContext`)
*   `cartItems`: Array of objects `{ id, name, price, flavor, qtd, ... }`.
*   `addToCart(product, flavor)`: Adds item or increments quantity.
*   `removeFromCart(id, flavor)`: Removes specific item variation.
*   `cartTotal`: Calculated total price.
*   `cartCount`: Total number of items.

### User State (`UserContext`)
*   `user`: Mocked object `{ name, email, avatar }`.
*   `orders`: List of past orders `{ id, status, total, items }`.
*   `addresses`: List of user addresses.
*   `cards`: Saved payment methods.

## 6. Visualizing the Routes

*   **/** (Home): Landing page, likely featured products.
*   **/produto/:id** (Product Detail): Image gallery, description, flavor selection, "Add to Cart" button.
*   **/minha-conta** (User Profile): Order history, address management.
*   **/checkout** (Checkout): Finalize purchase.
*   **/admin**: Dashboard overview with stats.
*   **/admin/produtos**: Table/Grid of manageable products.

This context allows an AI to generate code that fits seamlessy into the existing dark-mode, neon-accented, React-based architecture.
