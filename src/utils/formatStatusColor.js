export const formatStatusColor = (status) => {
  switch (status) {
    case 'Aprovado':
      return '#05BE5B';

    case 'Cancelada':
      return '#FF4E7E';

    case 'Pendente':
      return '#FEAE1A';
  }
};
