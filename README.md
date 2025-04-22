# Next.js 14 Frontend Project Structure

This repository contains a Next.js 14 frontend project with a clean, organized folder structure following best practices for scalable applications.

## Getting Started

1. Clone this repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Folder Structure

```
my-next-app/
├── app/                      # App Router
│   ├── dashboard/            # Dashboard route
│   │   └── page.js
│   ├── error.js              # Error handling
│   ├── layout.js             # Root layout
│   ├── loading.js            # Loading UI
│   ├── not-found.js          # 404 page
│   └── page.js               # Home page
├── components/               # Reusable components
│   ├── ui/                   # UI components
│   │   ├── button.js
│   │   ├── card.js
│   │   └── input.js
│   ├── layout/               # Layout components
│   │   ├── header.js
│   │   ├── footer.js
│   │   └── sidebar.js
│   └── forms/                # Form components
│       └── contact-form.js
├── config/                   # Configuration files
│   └── site.js               # Site configuration
├── hooks/                    # Custom React hooks
│   └── use-scroll.js
├── lib/                      # Utility functions & shared logic
│   ├── utils.js
│   └── constants.js
├── public/                   # Static assets
│   ├── images/
│   └── favicon.ico
└── styles/                   # Global styles
    └── globals.css
```

## Key Structure Concepts

### App Router Architecture

- **app/**: Uses Next.js 14's App Router for improved routing and layouts
- **app/layout.js**: Root layout that wraps all pages
- **app/page.js**: Home page component (route: `/`)
- **app/error.js**: Custom error handling for the app
- **app/loading.js**: Loading UI during page transitions
- **app/not-found.js**: Custom 404 page

### Component Organization

- **components/**: Reusable components organized by function
  - **ui/**: Basic UI elements (buttons, cards, inputs)
  - **layout/**: Structural components (headers, footers, sidebars)
  - **forms/**: Form-related components

### Configuration and Utilities

- **config/**: Configuration files for the application
- **hooks/**: Custom React hooks for shared functionality
- **lib/**: Utility functions and shared logic
- **styles/**: Global styles and CSS files
- **public/**: Static assets served from the root

## Best Practices

1. **Component Separation**: Follow the separation of concerns principle by organizing components by function
2. **Server Components**: By default, components in the `app/` directory are React Server Components
3. **Client Components**: Mark components that need client-side interactivity with the `'use client'` directive
4. **Error Handling**: Implement appropriate error boundaries with `error.js`
5. **Loading States**: Use `loading.js` files to show loading states during navigation

## Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Next.js App Router Documentation](https://nextjs.org/docs/app)
- [React Documentation](https://reactjs.org/docs/getting-started.html)

## Contributing

1. Create a branch: `git checkout -b feature/my-feature`
2. Commit your changes: `git commit -m 'Add my feature'`
3. Push to the branch: `git push origin feature/my-feature`
4. Submit a pull request
