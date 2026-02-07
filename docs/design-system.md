# 🎨 Design System

This document outlines the visual language and design principles used to build the Figma-Clone / News Aggregator. The goal was to create a "Premium" and "Tactile" interface that goes beyond simple wireframe requirements.

## 🌈 Color Palette

| Category | Color | HEX | Usage |
| :--- | :--- | :--- | :--- |
| **Primary** | Mint Green | `#A6E7D2` | Active buttons, toggles, success states. |
| **Secondary** | Dark Slate | `#344054` | Active icons, heading text. |
| **Background** | Soft Blue | `#EBF2F7` | Global page background, inactive toggle bg. |
| **Surface** | Pure White | `#FFFFFF` | Core card surfaces, containers, sidebar. |
| **Danger** | Coral Red | `#FF8E8E` | Remove icons, cancel buttons. |
| **Text Primary**| Charcoal | `#111827` | Main headings, profile name. |
| **Text Second** | Cool Gray | `#6B7280` | Body text, descriptions, dates. |

## 🖋️ Typography

-   **Font Family**: `Inter, sans-serif` (via Google Fonts)
-   **Scale**:
    -   **H1/Large Headings**: `26px / Extrabold` (Sidebar labels, Modal titles)
    -   **H2/Card Titles**: `20px - 22px / Extrabold`
    -   **Body Text**: `15px / Medium`
    -   **Metadata**: `13px / Semibold` (Dates)

## 📐 Shape & Spacing

### Roundness (Border Radius)
-   **Cards**: `24px` (Very rounded for a modern, friendly feel).
-   **Buttons**: `16px` (Consistent with the tactile design).
-   **Avatars**: `9999px` (Fully circular).
-   **Input Fields**: `12px`.

### Elevation (Shadows)
-   **Small Shadow**: `0 2px 15px rgba(0,0,0,0.03)` (Used on sidebar cards and main cards for a subtle depth).
-   **Float Shadow**: `0 4px 15px rgba(0,0,0,0.05)` (Used on the floating list removal button).
-   **Modal Shadow**: `2xl` (Heavier shadow for top-level overlays).

## ✨ Interactive Effects

-   **Active Scale**: `active:scale-95` / `active:scale-99` (Provides tactile feedback on click).
-   **Smooth Hover**: Transitions set to `300ms` for opacity and background changes.
-   **Glassmorphism**: The Modal uses a `backdrop-blur-sm` effect with a light gray tint (`bg-gray-900/10`) to keep the user focused while maintaining context.
-   **Spring Animations**: Powered by Framer Motion for natural-feeling movements (Damping: 30, Stiffness: 300).

## 🧩 Grid System

-   **Dashboard Sidebar**: Fixed `330px` width.
-   **Main Content Area**: Max-width of `1200px`.
-   **Grid Gap**: `32px` (`gap-8`) for healthy whitespace between news cards.
