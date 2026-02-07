# 📖 Project Documentation

Welcome to the internal documentation for the Figma Clone / News Aggregator project.

This folder contains detailed explanations of the choices made during development, the internal logic of the components, and the overall architecture.

## 🗂️ Table of Contents

1.  [**Folder Structure**](./folder-structure.md)  
    *A map of the project files and what each directory is for.*

2.  [**Technical Stack**](./technical-stack.md)  
    *The "Why" and "What" behind the libraries used (React, Redux, Tailwind, etc.).*

3.  [**Implementation Guide**](./features-implementation.md)  
    *Step-by-step technical breakdown of how requirements like pagination, card removal, and form validation were met.*

4.  [**Design System**](./design-system.md)  
    *Overview of the color palette, typography, and visual language used.*

---

### 💡 Key Design Philosophies

-   **State Originality**: We used Redux Toolkit because it provides a predictable state container, essential for complex logic like the "card-shifting" delete feature.
-   **Aesthetics**: Even though the task asked for functionality, we prioritized a "Premium" look using custom shadows, circular UI elements, and smooth animations to impress the interviewer.
-   **Validation**: User experience for forms is critical; using Zod ensures that the data is clean before it ever hits the "submit" logic.
