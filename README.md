# Dev Insights Mini Blog

Dev Insights is a small internal blog application where employees can share web development tips, insights, and updates. This project was built as a formative React assessment using React, TypeScript, and Vite.

## Features

- Responsive header with a Dev Insights logo and New Post link
- Three sample development posts
- Reusable and properly typed Post component
- Conditional styling for posts by a featured author
- Responsive layout for desktop and smaller screens
- Component optimization using `React.memo`
- Unique keys when rendering posts
- A `withLogger` higher-order component that logs when `PostList` mounts and unmounts

## Technologies Used

- React
- TypeScript
- Vite
- CSS
- Oxlint

No additional runtime libraries were installed.

## Project Structure

```text
src/
├── components/
│   ├── Header.tsx
│   ├── Post.tsx
│   └── PostList.tsx
├── hoc/
│   └── withLogger.tsx
├── styles/
│   ├── Header.css
│   ├── Post.css
│   └── PostList.css
├── types/
│   └── Post.ts
├── App.tsx
├── index.css
└── main.tsx
```

## Installation

Clone the repository:

```bash
git clone https://github.com/Beni-niyogisubizo/dev-insights-mini-blog.git
```

Enter the project directory:

```bash
cd dev-insights-mini-blog
```

Install the dependencies:

```bash
npm install
```

## Running the Application

Start the Vite development server:

```bash
npm run dev
```

Open the local address displayed in the terminal, usually:

```text
http://localhost:5173/
```

## Testing and Verification

Run the linter:

```bash
npm run lint
```

Create a production build to check TypeScript and confirm that the application compiles correctly:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

The `withLogger` HOC can be tested by opening the browser developer console and refreshing the page. It logs when the `PostList` component mounts and unmounts.

## Component Type Choices

I used functional components for `Header`, `Post`, `PostList`, and `App`. Functional components are appropriate because these components mainly receive data and return user interface elements. They are concise, easy to read, and work naturally with React Hooks.

The `Post` component is reusable because it receives a typed post object through props. The `PostList` component stores the sample posts and renders one `Post` component for each item.

## Styling Choices

I used two styling methods:

1. External CSS files are used for the header, post cards, post list, responsive layout, and global styles.
2. Inline styling is used in the `Post` component to conditionally change the background and border color when the author is Beni Niyogisubizo.

A Featured badge is also displayed conditionally for the highlighted post.

## Optimization Strategies

The `Post` component is wrapped with `React.memo`. This helps prevent unnecessary re-renders when its props have not changed.

Each post also has a unique `key` based on its ID when the list is rendered. This allows React to identify and update list items efficiently.

The `withLogger` higher-order component uses `useEffect` to log when `PostList` mounts and unmounts.

## Challenges and Solutions

One challenge was that the default Vite styles used a dark color scheme that affected the appearance and readability of the application. I solved this by replacing the default global styles with a custom light theme.

I also encountered an unterminated template literal error while creating the higher-order component. I used the TypeScript compiler error message to locate and remove the extra backtick. This helped me understand how build errors can point to the exact file and line that needs correction.

## Reflection

This project helped me understand how React components work together and how TypeScript makes component data safer and more predictable. The most valuable part was creating a reusable `Post` component and using an interface to define the shape of every post. I also learned how external CSS and conditional inline styles can be combined to create a clear and responsive interface.

I gained a better understanding of component optimization through `React.memo`, unique keys, and higher-order components. I would like to explore React state, forms, routing, automated component testing, and connecting React applications to an API in future projects.
