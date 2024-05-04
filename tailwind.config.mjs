/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "#6E07F3",
        "primary-hover": "#5A05C8",
        "primary-disabled": "B0BED9",
        secondary: "#6B9E8E",
        "secondary-hover": "#5C8677",
        "secondary-disabled": "C0C0C0",
        accent: "#FF8C42",
        "accent-hover": "#FF9A5B",
        "accent-disabled": "#D3D3D3",
        smoke: "#F2F2F2",
      },
    },
  },
  plugins: [],
};
