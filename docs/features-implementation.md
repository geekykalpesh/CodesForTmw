# ✨ Implementation Details

Here is how the core requirements were implemented:

### 1. Data Fetching & Initial Loading
-   On startup, `NewsFeed.jsx` triggers a 5-second `setTimeout`.
-   During these 5 seconds, a loading spinner and "Loading..." text are displayed.
-   The `fetchPosts` thunk in Redux retrieves the 100 posts from the JSONPlaceholder API.

### 2. Pagination (6 Cards per Page)
-   The store keeps track of `currentPage` and `postsPerPage` (6).
-   Inside `postsSlice.js`, the `displayedPosts` array is derived by slicing the `allPosts` array:
    `state.allPosts.slice(startIndex, startIndex + 6)`.

### 3. Card Removal & Shift Logic
-   When a card is removed (via `removePost` action), it is filtered out of the `allPosts` array.
-   Immediately after deletion, the app re-calculates the `displayedPosts` for the current page.
-   This automatically "shifts" the next available card from the next page up to the current view, keeping it at exactly 6 cards (unless there are no more posts).

### 4. View Toggle
-   A central `viewMode` state ('grid' or 'list') is stored in Redux.
-   The `Sidebar` toggles this state.
-   The `Card` component and the grid container in `NewsFeed` listen to this state to switch CSS classes and layouts dynamically.

### 5. Feedback Form
-   The "We're Listening!" button in the Sidebar opens the modal.
-   The form uses **Zod** to enforce rules:
    -   First Name & Last Name: Minimum 2 characters.
    -   Address: Minimum 5 characters.
    -   Email: Valid email format.
    -   Phone: Valid 10-15 digit number.
-   The "Submit" button remains disabled until all fields pass validation (`isValid` from React Hook Form).
-   Upon submission, an alert is shown, the form is reset, and the modal closes.
