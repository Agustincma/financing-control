export interface FinancialRecord {
  date: string;
  amount: number;
  title: string;
}

export interface FinancialSummaryResponse {
  success: boolean;
  data: FinancialRecord[];
}
