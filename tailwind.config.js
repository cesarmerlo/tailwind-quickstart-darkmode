module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
      backgroundColor: {
        primary: "var(--bg-primary)",
        secondary: "var(--bg-secondary)",
        default: "var(--bg-default)",
        inverse: "var(--bg-inverse)",
      },
      textColor: {
        primary: "var(--text-primary)",
        secondary: "var(--text-secondary)",
        default: "var(--text-default)",
        "default-soft": "var(--text-default-soft)",
        inverse: "var(--text-inverse)",
        "inverse-soft": "var(--text-inverse-soft)",
      },
    },
  },
  variants: {},
  plugins: [],
};
