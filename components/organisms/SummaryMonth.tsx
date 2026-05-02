import { MonthlySummaryResponse } from "@/src/interfaces/SummaryMonth.interface";
import { FlatList, StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";
import SummaryHeader from "./SummaryHeader";
import SummaryTransactionItem from "./SummaryTransactionItem";

interface ISummaryMonthProps {
  data: MonthlySummaryResponse;
}

export default function SummaryMonth({ data }: ISummaryMonthProps) {
  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.headerSection}>
        <SummaryHeader summary={data.summary} />
      </View>

      {/* Transactions Section */}
      <View style={styles.transactionsSection}>
        <Text style={styles.sectionTitle}>Movimientos</Text>
        <FlatList
          data={data.transactions}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <SummaryTransactionItem transaction={item} />
          )}
          scrollEnabled={false}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  centerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  errorText: {
    fontSize: 16,
    color: "#ef4444",
    textAlign: "center",
  },
  headerSection: {
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  transactionsSection: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 12,
    color: "#374151",
  },
  separator: {
    height: 1,
    backgroundColor: "#f3f4f6",
    marginVertical: 8,
  },
});
