export const tipos = {
  0: 'Móvel',
  1: 'Fixo',
  2: 'Internet'
};

export const tiposArray = Object.entries(tipos).map(([key, value]) => ({
  id: Number(key),
  nome: value
}));