/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        Gray: "#545454",
        Dark: "#1F1F1F",
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        ".section-title": {
          fontWeight: "bold",
          textWrap: "pretty",
          fontSize: "1.875rem", // 3xl
          lineHeight: "relaxed",
          "@screen 2xl": {
            fontSize: "50px",
          },
          "@screen lg": {
            fontSize: "2.25rem", // lg:text-4xl
          },
        },
        ".m-block": {
          "@screen lg": {
            "& > * + *": {
              marginTop: "5rem", // lg:space-y-20
            },
          },
          "& > * + *": {
            marginTop: "2.5rem", // space-y-10
          },
        },
        ".layout-container": {
          marginLeft: "auto",
          marginRight: "auto",
          width: "95%",
          "@screen md": {
            width: "95%",
          },
          "@screen lg": {
            width: "90%",
          },
          "@screen xl": {
            width: "85%",
          },
        },
        ".grid-two-cols": {
          display: "grid",
          gap: "3rem",
          "@screen xl": {
            gridTemplateColumns: "repeat(2, 1fr)",
          },
        },
        ".grid-hero-section": {
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "3rem",
          "@screen lg": {
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "3rem",
          },
        },
        ".main-btn": {
          borderRadius: "0.375rem",
          cursor: "pointer",
          textAlign: "center",
          backgroundColor: "#000",
          color: "#fff",
          fontWeight: "600",
          fontSize: "0.75rem", // text-xs
          letterSpacing: "0.1em",
          transitionProperty: "all",
          transitionDuration: "300ms",
          position: "relative",
          overflow: "hidden",
          padding: "0.5rem 1rem", // py-2 px-4
          border: "1px solid transparent",
          "&:hover": {
            backgroundColor: "#fff",
            color: "#000",
            borderColor: "#000",
          },
          "@screen lg": {
            fontSize: "1rem", // lg:text-base
            padding: "1rem 2.5rem", // lg:px-10 lg:py-4
          },
        },
      });
    },
  ],
};
