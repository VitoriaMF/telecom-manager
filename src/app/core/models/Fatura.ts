export interface Fatura {
  id: string;
  contratoId: string;
  dataEmissao: Date;
  dataVencimento: Date;
  valorCobrado: number;
  status: number;
}