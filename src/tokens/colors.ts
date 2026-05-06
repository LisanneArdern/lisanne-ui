export const colors = {
  background: {
    page: "#f2eee6",
    surface: "#ffffff",
    surfaceMuted: "#ebe6dc",
    subtle: "#e4dfd4",
    inverted: "#121212"
  },
  foreground: {
    default: "#121212",
    muted: "#3b3b3b",
    subtle: "#6b6962",
    onInverted: "#f4f4f0",
    onInvertedMuted: "#c9c5bc"
  },
  border: {
    default: "#121212",
    muted: "#8a867c",
    subtle: "#c9c4b8"
  },
  accent: {
    default: "#2c4a3e",
    muted: "#4a6b5c",
    fg: "#f4f4f0"
  },
  semantic: {
    live: {
      bg: "#dce5d3",
      fg: "#2b6b2d"
    },
    deprecated: {
      bg: "#e9d7d5",
      fg: "#87352e"
    },
    draft: {
      bg: "#e4ddcf",
      fg: "#6f5a1f"
    }
  },
  feedback: {
    error: "#87352e",
    success: {
      bg: "#d6e8d9",
      fg: "#235d2a"
    },
    warning: {
      bg: "#efe3c9",
      fg: "#735310"
    },
    info: {
      bg: "#dbe4ec",
      fg: "#2a4f6f"
    }
  },
  overlay: {
    scrim: "rgba(18, 18, 18, 0.48)"
  }
} as const;
