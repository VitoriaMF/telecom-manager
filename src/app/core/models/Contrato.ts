export interface Contrato {
  id: string;
  nomeFilial: string;
  operadoraId: string;
  planoContratado: string
  dataInicio: Date;
  dataVencimento: Date;
  valorMensal: number;
  status: number;
}