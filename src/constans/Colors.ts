export const Colors = {
  green: {
    main: "#22c55e",
    bg: "#dcfce7",
    text: "#22c55e",
  },
  red: {
    main: "#ef4444",
    bg: "#fee2e2",
    text: "#ef4444",
  },
  blue: {
    main: "#1563f7",
    bg: "#dbeafe",
    text: "#1563f7",
  },
  default: {
    main: "#374151",
    bg: "#f3f4f6",
    text: "#374151",
  },
};

export function getColorScale(color?: string) {
  if (!color) return Colors.default;
  if (color.includes("green")) return Colors.green;
  if (color.includes("red")) return Colors.red;
  if (color.includes("blue")) return Colors.blue;
  return Colors.default;
}
