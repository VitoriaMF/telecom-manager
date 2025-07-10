export const statusContrato = {
  0: 'Ativo',
  1: 'Inativo'
};

export const statusContratoArray = Object.entries(statusContrato).map(([key, value]) => ({
  id: Number(key),
  nome: value
}));