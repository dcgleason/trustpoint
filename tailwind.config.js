/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'navy-blue': '#1E3968',
        'light-blue': '#4A90E2',
        'white': '#FFFFFF',
      },
      animation: {
        'wire-grow': 'wireGrow 4s ease-out forwards',
        'small-wire-grow': 'smallWireGrow 4s ease-out forwards',
      },
      keyframes: {
        wireGrow: {
          '0%': { height: '0', transform: 'translateX(-50%) rotateY(0deg)' },
          '100%': { height: '100%', transform: 'translateX(-50%) rotateY(720deg)' },
        },
        smallWireGrow: {
          '0%': { height: '0', transform: 'translateY(0) rotate(0deg)' },
          '100%': { height: '100%', transform: 'translateY(-100%) rotate(720deg)' },
        },
    },
  },

  variants: {},
  plugins: [],
}
};
