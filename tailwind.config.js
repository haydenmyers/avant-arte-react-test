import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: '1.5rem',
    },
    extend: {
      backgroundImage: {
        checkmark: "url(\"data:image/svg+xml,%3Csvg width='10' height='8' viewBox='0 0 10 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M3.22917 6.242L8.8654 0.626626C8.97544 0.516584 9.0983 0.463695 9.23398 0.467959C9.36966 0.472236 9.49519 0.53207 9.61057 0.647459C9.72595 0.762834 9.78365 0.887028 9.78365 1.02004C9.78365 1.15304 9.72595 1.27724 9.61057 1.39263L3.71473 7.28844C3.57798 7.42519 3.4196 7.49356 3.23959 7.49356C3.05957 7.49356 2.90119 7.42519 2.76444 7.28844L0.38944 4.91346C0.279399 4.80342 0.221704 4.68056 0.216357 4.54488C0.211024 4.4092 0.266045 4.28367 0.38142 4.16829C0.496809 4.0529 0.621003 3.99521 0.754003 3.99521C0.887016 3.99521 1.01121 4.0529 1.12659 4.16829L3.22917 6.242Z' fill='%23FFFFFF'/%3E%3C/svg%3E%0A\")",
      },
      boxShadow: {
        primary: "0px 24px 24px -12px rgba(23, 23, 23, 0.02), 0px 12px 12px -6px rgba(23, 23, 23, 0.02), 0px 3px 3px -1.5px rgba(23, 23, 23, 0.02), 0px 1px 1px -0.5px rgba(23, 23, 23, 0.02), 0px 0px 0px 1px rgba(23, 23, 23, 0.02)",
      },
      fontFamily: {
        sans: [
          'SF Pro Rounded',
          ...defaultTheme.fontFamily.sans,
        ],
      },
      screens: {
        desktop: '1440px',
      },
    },
  },
  plugins: [],
};
