import sharedConfig from "@repo/tailwindcss-config";

/** @type {import('tailwindcss').Config} */
const config = {
  ...sharedConfig,
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "../../packages/ui/**/*.{js,ts,jsx,tsx}", // if using shared components
  ],
};

export default config;
