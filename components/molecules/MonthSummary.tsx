import { getColorScale } from "@/src/constans/Colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";

interface MonthSummaryData {
  month: string;
  year: number;
  income: number;
  expenses: number;
  balance: number;
}

interface MonthSummaryProps {
  data: MonthSummaryData;
}

export default function MonthSummary({ data }: MonthSummaryProps) {
  const { month, year, income, expenses, balance } = data;
  const green = getColorScale("green");
  const red = getColorScale("red");
  const blue = getColorScale("blue");
  const balanceColor = balance >= 0 ? green : red;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{`${month} ${year}`}</Text>
      <View style={styles.row}>
        <View style={styles.item}>
          <MaterialCommunityIcons
            name="trending-up"
            size={18}
            color={green.main}
          />
          <Text style={styles.label}>Ingresos</Text>
          <Text style={[styles.value, { color: green.text }]}>
            ${income.toFixed(2)}
          </Text>
        </View>
        <View style={styles.item}>
          <MaterialCommunityIcons
            name="trending-down"
            size={18}
            color={red.main}
          />
          <Text style={styles.label}>Gastos</Text>
          <Text style={[styles.value, { color: red.text }]}>
            ${expenses.toFixed(2)}
          </Text>
        </View>
        <View style={styles.item}>
          <MaterialCommunityIcons
            name="scale-balance"
            size={18}
            color={blue.main}
          />
          <Text style={styles.label}>Balance</Text>
          <Text style={[styles.value, { color: balanceColor.text }]}>
            {balance >= 0 ? "" : "-"}${Math.abs(balance).toFixed(2)}
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1563f7",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    paddingBottom: 16,
  },
  title: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 16,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  item: {
    alignItems: "center",
    flex: 1,
  },
  label: {
    color: "#e0e7ef",
    fontSize: 14,
    marginTop: 2,
  },
  value: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 4,
  },
});
