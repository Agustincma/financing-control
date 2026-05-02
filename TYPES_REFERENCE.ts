/**
 * TIPOS E INTERFACES - SummaryMonth Component
 *
 * Este archivo documenta todos los tipos disponibles para trabajar
 * con el componente SummaryMonth
 */

// ============================================
// Transaction
// ============================================
/**
 * Representa una transacción individual (ingreso o gasto)
 */
interface Transaction {
  id: string; // ID único de la transacción
  category: string; // Categoría (ej: "Freelance", "Alimentación")
  type: "income" | "expense"; // Tipo de transacción
  date: string; // Fecha ISO (ej: "2026-04-19")
  display_date: string; // Fecha formateada para mostrar (ej: "19 abr")
  amount: number; // Monto (negativo para gastos)
  icon_slug: string; // Ícono de Material Community Icons
}

// ============================================
// MonthlySummary
// ============================================
/**
 * Resumen estadístico mensual
 */
interface MonthlySummary {
  period: string; // Período (ej: "Abril 2026")
  total_income: number; // Total de ingresos
  total_expenses: number; // Total de gastos (valor positivo)
  current_balance: number; // Balance neto (positivo o negativo)
  currency: string; // Código de moneda (ej: "USD")
}

// ============================================
// MonthlySummaryResponse
// ============================================
/**
 * Respuesta completa de la API
 */
interface MonthlySummaryResponse {
  summary: MonthlySummary; // Estadísticas del mes
  transactions: Transaction[]; // Lista de transacciones
}

// ============================================
// Ejemplo de uso
// ============================================

/**
 * Para usar estos tipos en tu código:
 *
 * import { MonthlySummaryResponse, Transaction } from "@/src/interfaces/SummaryMonth.interface";
 *
 * const handleData = (data: MonthlySummaryResponse) => {
 *   console.log(data.summary.period);
 *   data.transactions.forEach((tx: Transaction) => {
 *     console.log(tx.category, tx.amount);
 *   });
 * };
 */
