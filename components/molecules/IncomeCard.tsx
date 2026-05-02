import { StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";

interface IncomeCardProps {
  amount: number;
  icon: React.ReactNode;
  label: string;
  color?: string; // color principal (texto y borde icono)
  iconBgColor?: string; // color de fondo del icono
}

export default function IncomeCard({
  amount,
  icon,
  label,
  color = "#22c55e",
  iconBgColor = "#dcfce7",
}: IncomeCardProps) {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <View style={[styles.iconContainer, { backgroundColor: iconBgColor }]}>
          {" "}
          {icon}{" "}
        </View>
        <Text style={[styles.label, { color }]}>{label}</Text>
      </View>
      <Text style={[styles.amount, { color }]}>${amount.toFixed(2)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 18,
    width: 180,
    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 2,
    margin: 8,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  iconContainer: {
    borderRadius: 8,
    padding: 6,
    marginRight: 8,
  },
  label: {
    fontSize: 16,
    fontWeight: "500",
  },
  amount: {
    fontSize: 26,
    fontWeight: "bold",
  },
});
