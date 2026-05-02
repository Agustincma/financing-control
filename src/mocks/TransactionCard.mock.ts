import { FinancialSummaryResponse } from "../interfaces/TransactionCard.interface";

export const apiResponse: FinancialSummaryResponse = {
  success: true,
  data: [
    {
      date: "2026-03-05T00:00:00.000Z",
      amount: 1200,
      title: "salary",
    },
    {
      date: "2026-03-12T00:00:00.000Z",
      amount: 350,
      title: "groceries",
    },
    {
      date: "2026-03-19T00:00:00.000Z",
      amount: 1000,
      title: "rent",
    },
    {
      date: "2026-03-26T00:00:00.000Z",
      amount: 200,
      title: "transport",
    },
    {
      date: "2026-04-03T00:00:00.000Z",
      amount: 1500,
      title: "salary",
    },
    {
      date: "2026-04-10T00:00:00.000Z",
      amount: 400,
      title: "groceries",
    },
    {
      date: "2026-04-17T00:00:00.000Z",
      amount: 1000,
      title: "expensas",
    },
    {
      date: "2026-04-24T00:00:00.000Z",
      amount: 250,
      title: "services",
    },
  ],
};
