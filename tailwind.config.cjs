/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    theme: {
        extend: {
            gridTemplateColumns: {
                "about-skill": "repeat(auto-fit, minmax(12rem, 1fr))",
                "skill-list": "repeat(auto-fit, minmax(8rem, 1fr))",
                "website-list": "repeat(auto-fit, minmax(12rem, 1fr))",
            },
        },
    },
    plugins: [],
};
