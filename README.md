# Task Manager App

Task management application built with Vite and React.

---

## React Hooks Used

### `useState`

Used to manage the internal state of the application in real-time.  
It handles the list of tasks, the input value in the task form, and the current filter (All, Pending, Completed).

**Files used in:**

- `App.jsx` – to manage tasks and filter state.
- `TaskForm.jsx` – to control the task input field.

---

### `useEffect`

Used to handle side effects.  
It loads tasks from `localStorage` when the app initializes and saves updates to `localStorage` whenever tasks change.

**File used in:**

- `App.jsx` – to sync tasks with the browser's local storage.

---

## CloudFront URL

🔗 [https://d1ed8j31287r86.cloudfront.net](https://d1ed8j31287r86.cloudfront.net)
