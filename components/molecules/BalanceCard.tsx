import { MaterialCommunityIcons } from "@expo/vector-icons";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";

interface IBalanceCardProps {
  title: string;
  amount: number;
  colorText?: string;
  backgroundColor?: string;
}

export default function BalanceCard({
  title,
  amount,
  colorText = "#fff",
  backgroundColor = "#1563f7",
}: IBalanceCardProps) {
  return (
    <View style={[styles.card, { backgroundColor }]}>
      <View style={styles.header}>
        <Text style={[styles.label, { color: colorText }]}>{title}</Text>
        <MaterialCommunityIcons name="wallet" size={24} color={colorText} />
      </View>
      <Text style={[styles.amount, { color: colorText }]}>
        ${amount.toFixed(2)}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 18,
    padding: 20,
    width: 240,
    alignSelf: "flex-start",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  label: {
    fontSize: 16,
    fontWeight: "500",
  },
  amount: {
    fontSize: 32,
    fontWeight: "bold",
    marginTop: 8,
  },
});
