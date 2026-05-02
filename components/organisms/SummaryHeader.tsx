import { MonthlySummary } from "@/src/interfaces/SummaryMonth.interface";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";
import SummaryStatCard from "./SummaryStatCard";

interface SummaryHeaderProps {
  summary: MonthlySummary;
}

export default function SummaryHeader({ summary }: SummaryHeaderProps) {
  return (
    <View style={styles.container}>
      {/* Title */}
      <Text style={styles.title}>{summary.period}</Text>

      {/* Stats Cards */}
      <View style={styles.statsContainer}>
        <SummaryStatCard
          label="Ingresos"
          amount={summary.total_income}
          currency={summary.currency}
          color="green"
        />
        <SummaryStatCard
          label="Gastos"
          amount={summary.total_expenses}
          currency={summary.currency}
          color="red"
        />
        <SummaryStatCard
          label="Balance"
          amount={summary.current_balance}
          currency={summary.currency}
          color={summary.current_balance >= 0 ? "green" : "red"}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    marginBottom: 16,
    color: "#1f2937",
  },
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 12,
  },
});
