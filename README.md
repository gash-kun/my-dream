# Personal Portfolio

A responsive personal portfolio built with **React**, **Vite**, and **Tailwind CSS**, and deployed to **GitHub Pages**. Showcase your projects, experience, and contact information in one place.

## Features

- Responsive portfolio layout
- Fast development and production builds with Vite
- Tailwind CSS utility-based styling
- Static deployment with GitHub Pages

## Getting Started

### Prerequisites

- Node.js (LTS recommended)
- npm

### Run locally

```bash
git clone https://github.com/<your-username>/<your-repository>.git
cd <your-repository>
npm install
npm run dev
```

Open the local address shown in the terminal.

## Scripts

```bash
npm run dev      # Start the development server
npm run build    # Build the site into dist/
npm run preview  # Preview the production build locally
```

## Deploy to GitHub Pages

1. Configure Vite's `base` in `vite.config.js`. For a project repository, set it to `/<your-repository>/`; for a user or organization site served from the domain root, use `/`.
2. In the repository's **Settings → Pages**, select **GitHub Actions** as the deployment source.
3. Configure a GitHub Actions workflow to install dependencies, run `npm run build`, and publish the `dist/` directory to GitHub Pages. Push your changes to trigger deployment.

## Customize

Update the page content, project details, links, and assets with your own information. Adjust the styling and metadata to match your portfolio.

## License

Add a license if you intend to distribute or reuse this project.
