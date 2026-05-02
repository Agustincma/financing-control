import BalanceCard from "@/components/molecules/BalanceCard";
import IncomeCard from "@/components/molecules/IncomeCard";
import TransactionCard from "@/components/molecules/TransactionCard";
import { SummaryMonth } from "@/components/organisms";
import { getColorScale } from "@/src/constans/Colors";
import { useSummaryMonth } from "@/src/hooks/useSummaryMonth";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { ActivityIndicator, ScrollView, Text, View } from "react-native";

export default function HomeScreen() {
  const greenScale = getColorScale("green");
  const redScale = getColorScale("red");
  const blueScale = getColorScale("blue");

  const { data, loading, error } = useSummaryMonth();

  if (loading) {
    return (
      <View>
        <ActivityIndicator size="large" color="#1563f7" />
      </View>
    );
  }

  if (error || !data) {
    return (
      <View>
        <Text>{error || "No data available"}</Text>
      </View>
    );
  }

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#f6f8fa" }}>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <BalanceCard title={"AAAA"} amount={110} />
        <IncomeCard
          amount={1111}
          icon={
            <MaterialCommunityIcons
              name="trending-up"
              size={24}
              color={greenScale.main}
            />
          }
          label={"Ingresos"}
          color={greenScale.text}
          iconBgColor={greenScale.bg}
        />
        <IncomeCard
          amount={-3500}
          label="Egresos"
          icon={
            <MaterialCommunityIcons
              name="trending-down"
              size={24}
              color={redScale.main}
            />
          }
          color={redScale.text}
          iconBgColor={redScale.bg}
        />
        <IncomeCard
          amount={500}
          label="Ahorro"
          icon={
            <MaterialCommunityIcons
              name="wallet"
              size={24}
              color={blueScale.main}
            />
          }
          color={blueScale.text}
          iconBgColor={blueScale.bg}
        />
        <TransactionCard
          title="Freelance"
          subtitle="Proyecto web"
          date="19 abr 2026"
          amount={500}
          color="green"
          icon={
            <MaterialCommunityIcons
              name="arrow-up-circle"
              size={24}
              color={getColorScale("green").main}
            />
          }
          onDelete={() => {
            /* acción eliminar */
          }}
        />

        <SummaryMonth data={data} />
      </View>
    </ScrollView>
  );
}
