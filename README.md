# FBS Builders Commercial Website Baseline Architecture

A premium, production-ready React 19 + TypeScript + Vite website baseline architecture configured for commercial contracting, design-build, and architecture projects.

This project is structured for high performance, ease of maintenance, SEO, responsiveness, dark mode synchronization, and accessible keyboard-navigable UI.

---

## Technical Stack
- **Framework**: React 19
- **Bundler**: Vite 6 (configured with absolute imports and vendor chunk splitting)
- **Styling**: Tailwind CSS v4 (native CSS theme configuration, `@variant dark`, and custom animations)
- **Routing**: React Router DOM (lazy loaded routes and layout boundaries)
- **Animations**: Framer Motion 11 (page transitions and interactive mobile drawers)
- **Icons**: Lucide React
- **HTTP Client**: Axios (request/response interceptors, error formatting)
- **Code Quality**: ESLint v9 Flat Config, Prettier v3, EditorConfig

---

## Directory Structure

Every folder has a designated purpose in this architecture:

```text
src/
├── app/          # Core bootstrapping, global context providers, router declarations
├── assets/       # Static assets like images, icons, and videos
├── components/   # Modular reusable components
│   ├── ui/       # Atom-level UI primitives (Button, Input, Card, Modal, etc.)
│   ├── layout/   # Layout primitives (Container, Section, Grid, Stack)
│   ├── sections/ # Larger page modules (Hero banner, CTA blocks, Section titles)
│   └── common/   # Global shared items (Navbar, Footer, Logo, SEO Meta)
├── config/       # Environment variables validation and runtime config
├── constants/    # Fixed data stores (navigation lists, company info)
├── contexts/     # React context instances (Theme, UI state)
├── hooks/        # Reusable custom React hooks (useScrollPosition, useMediaQuery, useWindowSize)
├── layouts/      # Master structural wrapper templates (PageLayout)
├── pages/        # Lazy-loaded page entries (Home, About, Services, Projects, Contact, 404)
├── services/     # API request logic (AxiosApiClient)
├── styles/       # Global CSS stylesheets containing Tailwind v4 directives
├── types/        # Common global TypeScript declarations
└── utils/        # Pure JavaScript utility functions (debounce, throttle, formatting)
```

---

## Getting Started

### Prerequisites
Make sure you have Node.js 18+ installed on your computer.

### Setup Instructions
1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   ```
   The site will load locally on `http://localhost:3000`.

3. **Verify Coding Style & Types**
   ```bash
   npm run lint
   ```

4. **Compile Production Bundle**
   ```bash
   npm run build
   ```
   This triggers the TypeScript compiler (`tsc`) checks and generates optimized bundles inside `dist/`.

---

## Core Systems & Guidelines

### 1. Styling & Dark Mode (Tailwind CSS v4)
We utilize **Tailwind CSS v4**. It replaces `tailwind.config.js` in favor of CSS variables defined in `@theme` inside [globals.css](file:///src/styles/globals.css).
- **Theme Variables**: Custom primary palette (`--color-primary-50` to `950`), custom fonts (`font-sans`, `font-display`), and custom animations.
- **Dark Mode**: Enabled using class-based selector toggles via `@variant dark` in CSS. The state is synchronized automatically with system preferences and persisted in local storage inside `ThemeContext.tsx`.

### 2. Layout System Primitives
To prevent layout and spacing inconsistencies, avoid typing raw padding/margin grids inline. Utilize the following primitives inside [components/layout/](file:///src/components/layout/):
- **`<Container>`**: Constrains layout boundaries horizontally.
- **`<Section>`**: Standardizes vertical section paddings and backgrounds.
- **`<Grid>`**: Controls responsive column splits.
- **`<Stack>`**: Standardizes flex directions, alignments, and spacing gaps.

Example:
```tsx
import { Section, Container, Grid, Card } from '@/components/layout';

export const MyPage = () => (
  <Section padding="lg" bg="muted">
    <Container>
      <Grid cols={1} colsMd={3} gap="lg">
        <Card>Card 1</Card>
        <Card>Card 2</Card>
        <Card>Card 3</Card>
      </Grid>
    </Container>
  </Section>
);
```

### 3. SEO & Page Header Updates
Every page must include the `<Meta>` SEO component at its top root. It manages titles, descriptions, indexing directives (`noIndex`), OpenGraph (og:title, og:image), and Twitter Card mappings:
```tsx
import { Meta } from '@/components/common/Meta';

export const Portfolio = () => (
  <>
    <Meta 
      title="Commercial Project Portfolio"
      description="View our recent general contracting office, retail and industrial builds."
    />
    {/* Page content */}
  </>
);
```

### 4. Code Splitting & Performance
All pages are imported dynamically using `React.lazy()` inside [App.tsx](file:///src/app/App.tsx). Vite is configured to compile dependencies like `react`, `framer-motion`, and `axios` into a separate `vendor` JS chunk, and `lucide-react` icons into an `icons` chunk, minimizing the bundle weight of primary files.

### 5. API Client Layer
Axios is configured at [services/api/apiClient.ts](file:///src/services/api/apiClient.ts):
- Handles standard timeout errors.
- Attaches Bearer authentication headers dynamically when `auth_token` is present in local storage.
- Standardizes requests and response error logging across environments.
- Uniformly maps API server errors into custom structured `ApiErrorResponse` shapes.