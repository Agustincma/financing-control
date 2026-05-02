import { Colors } from "@/src/constans/Colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";

interface SummaryStatCardProps {
  label: string;
  amount: number;
  currency: string;
  color: "green" | "red" | "blue";
}

export default function SummaryStatCard({
  label,
  amount,
  currency,
  color,
}: SummaryStatCardProps) {
  const colorScale = Colors[color as keyof typeof Colors] || Colors.default;
  const isNegative = amount < 0;

  // Determinar el ícono según el tipo
  let iconName: "wallet" | "arrow-up-circle" | "arrow-down-circle" = "wallet";
  if (color === "green") iconName = "arrow-up-circle";
  if (color === "red" && !label.includes("Balance"))
    iconName = "arrow-down-circle";

  return (
    <View style={[styles.card, { backgroundColor: colorScale.bg }]}>
      <View style={styles.header}>
        <Text style={[styles.label, { color: colorScale.main }]}>{label}</Text>
        <MaterialCommunityIcons
          name={iconName}
          size={20}
          color={colorScale.main}
        />
      </View>
      <Text
        style={[
          styles.amount,
          {
            color: colorScale.text,
          },
        ]}
      >
        {isNegative ? "-" : "+"}
        {currency}
        {Math.abs(amount).toFixed(2)}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    borderRadius: 12,
    padding: 14,
    justifyContent: "space-between",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  label: {
    fontSize: 13,
    fontWeight: "500",
  },
  amount: {
    fontSize: 16,
    fontWeight: "700",
  },
});
