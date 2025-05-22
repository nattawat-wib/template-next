//@ts-ignore
import type { Config } from "tailwindcss";

const config: Config = {
    prefix: "tw:",
    content: [
        "./app/**/*.{ts,tsx}",
        "./components/**/*.{ts,tsx}",
        "./layout/**/*.{ts,tsx}",
        "./pages/**/*.{ts,tsx}",
        "./utils/**/*.{ts,tsx}",
    ],
    theme: {
        extend: {},
    },
    plugins: [],
};

export default config;
