# TRUENORTH ANALYTICS LTD Website

A low-maintenance React + Vite starter website for TRUENORTH ANALYTICS LTD.

## How to open in Visual Studio Code

1. Unzip the folder.
2. Open Visual Studio Code.
3. Select **File > Open Folder**.
4. Choose the `truenorth-analytics-website` folder.

## How to run locally

Open the VS Code terminal and run:

```bash
npm install
npm run dev
```

Then open the local URL shown in the terminal, usually:

```text
http://localhost:5173
```

## How to build for deployment

```bash
npm run build
```

The production files will be created in the `dist` folder.

## Recommended deployment

Use Cloudflare Pages connected to a GitHub repository.

Recommended build settings:

```text
Framework preset: Vite
Build command: npm run build
Build output directory: dist
```
