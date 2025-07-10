export const statusFatura = {
  0: 'Paga',
  1: 'Pendente',
  2: 'Atrasada'
};

export const statusFaturaArray = Object.entries(statusFatura).map(([key, value]) => ({
  id: Number(key),
  nome: value
}));

export type StatusChave = 'paga' | 'pendente' | 'atrasada';

export type StatusFaturaResponse = {
  [key in StatusChave]: number;
};
