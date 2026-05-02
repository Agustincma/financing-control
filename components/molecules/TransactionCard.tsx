import { getColorScale } from "@/src/constans/Colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Text } from "react-native-paper";

interface TransactionCardProps {
  title: string;
  subtitle: string;
  date: string;
  amount: number;
  color?: "green" | "red" | "blue";
  icon: React.ReactNode;
  onDelete?: () => void;
}

export default function TransactionCard({
  title,
  subtitle,
  date,
  amount,
  color = "green",
  icon,
  onDelete,
}: TransactionCardProps) {
  const scale = getColorScale(color);

  return (
    <View style={styles.card}>
      <View style={styles.row}>
        <View style={[styles.iconContainer, { backgroundColor: scale.bg }]}>
          {icon}
        </View>
        <View style={{ flex: 1 }}>
          <Text style={[styles.title, { color: scale.main }]}>{title}</Text>
          <Text style={styles.subtitle}>{subtitle}</Text>
        </View>
        <TouchableOpacity onPress={onDelete}>
          <MaterialCommunityIcons
            name="delete-outline"
            size={24}
            color={getColorScale("red").main}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.footer}>
        <Text style={styles.date}>{date}</Text>
        <Text style={[styles.amount, { color: scale.text }]}>
          {amount > 0 ? "+" : ""}${amount.toFixed(2)}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 16,
    marginVertical: 8,
    marginHorizontal: 4,
    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 2,
    minWidth: 320,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  iconContainer: {
    borderRadius: 8,
    padding: 8,
    marginRight: 12,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 14,
    color: "#6b7280",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  date: {
    fontSize: 13,
    color: "#6b7280",
  },
  amount: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
