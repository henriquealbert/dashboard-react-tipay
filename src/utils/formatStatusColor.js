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

export const formatStatusLabelReceivable = (status) => {
  switch (status) {
    case 0:
      return 'Pendente';

    case 1:
      return 'Pago';

    case 4:
      return 'Rejeitada';

    case 9:
      return 'Agendada';
  }
};

export const formatStatusColorReceivable = (status) => {
  switch (status) {
    case 0:
      return '#FEAE1A';

    case 1:
      return '#05BE5B';

    case 4:
      return '#FF4E7E';

    case 9:
      return '#05BE5B';
  }
};

export const formatOperationType = (type) => {
  switch (type) {
    case 'created':
      return 'Transacão criada';

    case 'authorization':
      return 'Transação autorizada';

    case 'reversed':
      return 'Transação estornada';

    case 'reversal':
      return 'Transação cancelada';

    case 'failed':
      return 'Transação falhada';

    case 'disputed':
      return 'Transação em disputa';

    case 'charged_back':
      return 'Chargeback';

    case 'paid':
      return 'Transação paga';

    case 'expiration':
      return 'Transação expirada';
  }
};

export const formatStatusType = (type) => {
  switch (type) {
    case 'succeeded':
      return 'Sucesso na operação';

    case 'failed':
      return 'Falha na operação';
  }
};

export const formatStatusTypeColor = (type) => {
  switch (type) {
    case 'succeeded':
      return '#05BE5B';

    case 'failed':
      return '#FF4E7E';
  }
};
