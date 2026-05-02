import { Colors } from "@/src/constans/Colors";
import { Transaction } from "@/src/interfaces/SummaryMonth.interface";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";

interface SummaryTransactionItemProps {
  transaction: Transaction;
}

export default function SummaryTransactionItem({
  transaction,
}: SummaryTransactionItemProps) {
  const isIncome = transaction.type === "income";
  const colorScale = isIncome ? Colors.green : Colors.red;

  return (
    <View style={styles.container}>
      {/* Icon Container */}
      <View style={[styles.iconContainer, { backgroundColor: colorScale.bg }]}>
        <MaterialCommunityIcons
          name={
            transaction.icon_slug as "arrow-up-circle" | "arrow-down-circle"
          }
          size={24}
          color={colorScale.main}
        />
      </View>

      {/* Content */}
      <View style={styles.content}>
        <Text style={styles.category}>{transaction.category}</Text>
        <Text style={styles.date}>{transaction.display_date}</Text>
      </View>

      {/* Amount */}
      <Text
        style={[
          styles.amount,
          {
            color: colorScale.text,
          },
        ]}
      >
        {isIncome ? "+" : "-"}${Math.abs(transaction.amount).toFixed(2)}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  content: {
    flex: 1,
  },
  category: {
    fontSize: 15,
    fontWeight: "600",
    color: "#1f2937",
    marginBottom: 4,
  },
  date: {
    fontSize: 13,
    color: "#9ca3af",
  },
  amount: {
    fontSize: 15,
    fontWeight: "700",
    minWidth: 100,
    textAlign: "right",
  },
});
