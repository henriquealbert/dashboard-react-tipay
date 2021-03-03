const by_hour = [
  {
    id: 'sales by hour',
    data: [
      {
        x: '01:00',
        y: 1
      },
      {
        x: '02:00',
        y: 12
      },
      {
        x: '03:00',
        y: 3
      },
      {
        x: '04:00',
        y: 6
      },
      {
        x: '05:00',
        y: 0
      },
      {
        x: '06:00',
        y: 4
      },
      {
        x: '07:00',
        y: 0
      },
      {
        x: '08:00',
        y: 7
      },
      {
        x: '09:00',
        y: 9
      },
      {
        x: '10:00',
        y: 2
      }
    ]
  }
];

const issuers = [
  {
    id: 'Maestro',
    label: 'Maestro',
    value: 35,
    color: '#FF6384' // n precisa passar o color
  },
  {
    id: 'Elo',
    label: 'Elo',
    value: 150,
    color: '#FFCD56'
  },
  {
    id: 'Mastercard',
    label: 'Mastercard',
    value: 108,
    color: '#4BC0C0'
  },
  {
    id: 'Visa',
    label: 'Visa',
    value: 45,
    color: '#36A2EB'
  }
];

// sales by credit %
const parcelada = [
  {
    id: 'Parcelada',
    value: 25
  }
];
const avista = [
  {
    id: 'À vista',
    value: 88
  }
];

const installments = [
  {
    id: '2x',
    value: 50
  },
  {
    id: '3x',
    value: 2
  },
  {
    id: '4x',
    value: 25
  },
  {
    id: '5x',
    value: 9
  },
  {
    id: '6x',
    value: 32
  },
  {
    id: '7x',
    value: 26
  },
  {
    id: '8x',
    value: 88
  },
  {
    id: '9x',
    value: 2
  },
  {
    id: '10x',
    value: 0
  },
  {
    id: '11x',
    value: 0
  },
  {
    id: '12x',
    value: 14
  }
];

const percentagesBars = [
  {
    label: 'Débito',
    value: 31
  },
  {
    label: 'Crédito',
    value: 60
  },
  {
    label: 'Boleto',
    value: 9
  }
];

const SalesStatus = [
  {
    label: 'Aprovadas',
    value: 140000
  },
  {
    label: 'Canceladas',
    value: 44000
  },
  {
    label: 'Pendentes',
    value: 60000
  }
];
