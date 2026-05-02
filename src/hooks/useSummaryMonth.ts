import { MonthlySummaryResponse } from "@/src/interfaces/SummaryMonth.interface";
import { summaryMonthMock } from "@/src/mocks/SummaryMonth.mock";
import { useEffect, useState } from "react";

export const useSummaryMonth = () => {
  const [data, setData] = useState<MonthlySummaryResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Simulamos una llamada a la API con un pequeño delay
    const fetchData = async () => {
      try {
        setLoading(true);
        // TODO: Reemplazar con llamada real a la API
        // const response = await fetch('YOUR_API_ENDPOINT');
        // const data = await response.json();

        // Por ahora usamos el mock
        await new Promise((resolve) => setTimeout(resolve, 500));
        setData(summaryMonthMock);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, loading, error };
};
