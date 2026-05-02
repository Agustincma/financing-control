import { MonthlySummaryResponse } from "../interfaces/SummaryMonth.interface";

export const summaryMonthMock: MonthlySummaryResponse = {
  summary: {
    period: "Abril 2026",
    total_income: 500.0,
    total_expenses: 1250.0,
    current_balance: -750.0,
    currency: "USD",
  },
  transactions: [
    {
      id: "tx_001",
      category: "Freelance",
      type: "income",
      date: "2026-04-19",
      display_date: "19 abr",
      amount: 500.0,
      icon_slug: "arrow-up-circle",
    },
    {
      id: "tx_002",
      category: "Alimentación",
      type: "expense",
      date: "2026-04-14",
      display_date: "14 abr",
      amount: -300.0,
      icon_slug: "arrow-down-circle",
    },
    {
      id: "tx_003",
      category: "Servicios",
      type: "expense",
      date: "2026-04-09",
      display_date: "09 abr",
      amount: -150.0,
      icon_slug: "arrow-down-circle",
    },
    {
      id: "tx_004",
      category: "Vivienda",
      type: "expense",
      date: "2026-04-04",
      display_date: "04 abr",
      amount: -800.0,
      icon_slug: "arrow-down-circle",
    },
  ],
};
