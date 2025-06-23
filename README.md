# ui-recipes-management

Frontend UI built with **ReactJS** for performing free text search, sorting, and filtering of recipes retrieved from the `api-recipes-management` backend service.

---

## 📋 Problem Statement

Develop a frontend based on ReactJS to perform a free text search of recipes from a backend API and display the results in a user-friendly web interface. The UI should include client-side sorting and filtering capabilities.

---

## 🏷️ Project Info

- **Category:** Frontend UI
- **Tags:** Recipes UI, REST API
- **Precondition:** Backend project "Recipes Question for Backend 002" must be complete and the REST API endpoints should be functional.

---

## 🚀 Features

- 🔍 Global search bar (Google-style) on homepage
- 🧠 Free text search using name and/or cuisine
- 🎯 Calls backend API after 3+ characters are entered and search is triggered
- 🧱 Results displayed in a responsive grid layout
- ⏱️ Client-side sorting based on `cookTimeMinutes` (asc/desc)
- 🏷️ Client-side filtering based on tags (no additional API calls)
- ⚡ Fast and reactive UI experience using modern React practices

---

## 📦 Technologies Used

- ReactJS (Vite-based setup)
- Axios (for REST API calls)
- CSS Modules or Tailwind (optional)
- React Hooks (`useState`, `useEffect`)
- Functional Components

---

## 🔧 Getting Started

### Prerequisites

- Node.js (v16+ recommended)
- npm or yarn

### Install Dependencies

```bash
npm install
```

### Run the Application

```bash
npm run dev
```

### Environment Variables

Create a `.env` file in the project root with the following:

```env
VITE_API_BASE_URL=http://localhost:8080/api/v1/recipes
```

---

## 🌐 API Integration

- **GET /api/v1/recipes?query={text}**  
  Used to fetch matching recipes based on partial text input (name or cuisine)

- **GET /api/v1/recipes/{id}**  
  (Optional for detail view)

---

## 📊 Grid Display Details

Attributes displayed (example suggestion):
- `name`
- `cuisine`
- `cookTimeMinutes`
- `rating`
- `tags[]` (as badges or chips)

---

## 📌 Functionality

- Input field triggers API search on:
  - 3+ characters
  - Enter key press or search icon click
- Results stored locally in state
- Sorting options:
  - Cook Time Ascending / Descending (client-side)
- Filtering options:
  - Multi-select tags from list of all tags in the results (client-side)

---

## 📁 Folder Structure (suggested)

```
src/
├── components/
│   ├── SearchBar.jsx
│   ├── RecipeGrid.jsx
│   ├── RecipeCard.jsx
├── services/
│   └── recipeService.js
├── App.jsx
├── main.jsx
└── styles/
├── tests/
│   ├── SearchBar.test.jsx
│   ├── RecipeGrid.test.jsx
│   ├── RecipeCard.test.jsx
```

---

## 📝 License

Created by Saumyajeet Mohanty
