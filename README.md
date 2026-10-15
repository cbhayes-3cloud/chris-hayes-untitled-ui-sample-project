# Financial Palooza

Financial Palooza is a responsive trade-history dashboard built with React and the Untitled UI component library. It presents a sample trading account in a compact workspace for reviewing trade activity and account performance.

## Features

- Trade table with ticker, company, order amount, trade type, date, status, and trader details
- Search by ticker, company, or trader
- Filter trades by date range and status
- Select trades and download the selection as a CSV file
- Paginated results and account performance summaries
- Accessible interactions built on React Aria Components

## Demo data

This is a front-end demo; it does not connect to a trading service or backend. The trade rows and performance figures are sample data defined in `src/pages/home-screen.tsx`. Some summary values are illustrative and should not be treated as live account information.

## Run locally

You’ll need Node.js 20.19+ or 22.12+, plus npm.

```bash
git clone https://github.com/cbhayes-3cloud/chris-hayes-untitled-ui-sample-project.git
cd chris-hayes-untitled-ui-sample-project
npm ci
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser. Vite serves the app locally and reloads the page as you edit the source.

To create a production build, run:

```bash
npm run build
```

To preview that build locally, run `npm run preview` after building.

## Project structure

```text
src/
	components/
		application/   Composed interface patterns such as tables, navigation, and date pickers
		base/          Reusable controls such as buttons, inputs, badges, and dropdowns
		foundations/   Shared visual foundations and icons
		marketing/     Marketing-oriented components
		shared-assets/ Illustrations, patterns, and other reusable assets
	hooks/           Reusable React hooks
	pages/           Route-level screens, including the trade dashboard
	providers/       Theme and router context
	styles/          Global styles, theme tokens, and typography
	types/           Shared TypeScript declarations
	utils/           Shared utility functions
	main.tsx         React app entry point and route setup
```

## Scripts

- `npm run dev` starts the Vite development server.
- `npm run build` runs the TypeScript project build and creates production assets in `dist/`.
- `npm run preview` serves the production build locally.

## Built with

React 19, TypeScript, Vite, Tailwind CSS 4, React Aria Components, and Untitled UI icons and components.
