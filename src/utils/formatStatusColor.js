export const formatStatusColor = (status) => {
  switch (status) {
    case 0:
      return '#FEAE1A';

    case 1:
      return '#05BE5B';

    case 2:
      return '#FF4E7E';

    case 3:
      return '#FF4E7E';

    case 4:
      return '#FF4E7E';

    case 5:
      return '#FF4E7E';

    case 6:
      return '#FF4E7E';
  }
};

export const formatStatusLabel = (status) => {
  switch (status) {
    case 0:
      return 'Pendente';

    case 1:
      return 'Aprovada';

    case 2:
      return 'Falhada';

    case 3:
      return 'Cancelada';

    case 4:
      return 'Chargeback';

    case 5:
      return 'Estornada';

    case 6:
      return 'Em disputa';
  }
};
