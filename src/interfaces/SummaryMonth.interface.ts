export interface Transaction {
  id: string;
  category: string;
  type: "income" | "expense";
  date: string;
  display_date: string;
  amount: number;
  icon_slug: string;
}

export interface MonthlySummary {
  period: string;
  total_income: number;
  total_expenses: number;
  current_balance: number;
  currency: string;
}

export interface MonthlySummaryResponse {
  summary: MonthlySummary;
  transactions: Transaction[];
}
