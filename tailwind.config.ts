import type { Config } from "tailwindcss";
export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: { extend: {
    colors: { ink: "#050505", panel: "#0c0c0c", red: "#ff2b2b", red2: "#d71920", mute: "#8b8b8b", line: "#202020", white: "#f5f5f5", ok: "#36d399", bad: "#ff3b30" },
    fontFamily: { mono: ["ui-monospace", "SFMono-Regular", "Menlo", "monospace"] },
  } },
  plugins: [],
} satisfies Config;
