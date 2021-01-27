export const transfers = [
  {
    id: 152218268,
    transfer_date: '2020-10-22T19:00:00.000Z',
    amount: 'R$ 300,00',
    status: 0,
    status_detail: 'Transferência Recusada.'
  },
  {
    id: 152218267,
    transfer_date: '2020-10-22T19:00:00.000Z',
    amount: 'R$ 300,00',
    status: 1,
    status_detail: 'Transferência efetuada com sucesso.'
  },
  {
    id: 152218266,
    transfer_date: '2020-10-22T19:00:00.000Z',
    amount: 'R$ 300,00',
    status: 1,
    status_detail: 'Transferência efetuada com sucesso.'
  }
];

export const link = [
  {
    id: 152218268,
    payer: 'Pede Bolo Agência De confeitarias E Panificadoras On-line LTDA',
    date: '15/10/2020 19:11',
    value: 'R$ 300,00',
    payment: '10 de 10',
    check: true,
    status: 'Aprovado',
    updated_at: '27/05/2020 21:18:52',
    created_at: '15/10/2020 19:11',
    operation: 'Autorização',
    url: 'https://tipay.app/dabdddaajkawbdawdbawhdvawbihdgwa',
    active_url: true
  },
  {
    id: 152218267,
    payer: 'Pede Bolo Agência De confeitarias E Panificadoras On-line LTDA',
    date: '15/10/2020 19:11',
    value: 'R$ 300,00',
    payment: '10 de 20',
    check: false,
    status: 'Pendente',
    updated_at: '27/05/2020 21:18:52',
    created_at: '15/10/2020 19:11',
    operation: 'Autorização',
    url: 'https://tipay.app/dabdddaajkawbdawdbawhdvawbihdgwa',
    active_url: false
  },
  {
    id: 152218266,
    payer: 'Pede Bolo Agência De confeitarias E Panificadoras On-line LTDA',
    date: '15/10/2020 19:11',
    value: 'R$ 300,00',
    payment: '1 de 1',
    check: false,
    status: 'Cancelada',
    updated_at: '27/05/2020 21:18:52',
    created_at: '15/10/2020 19:11',
    operation: 'Autorização',
    url: 'https://tipay.app/dabdddaajkawbdawdbawhdvawbihdgwa',
    active_url: false
  }
];

export const transactions = {
  current_page: 1,
  per_page: 10,
  total_entries: 14,
  page_count: 2,
  entries: [
    {
      id: 1062924,
      id_store: 84,
      value: 5000,
      status: 0,
      payment_type: 3,
      id_transaction_zoop: '76e1d26819f94add93ec2ef3435905e0',
      transaction_number: null,
      statement_descriptor: 'ENICOMP',
      card_brand: null,
      installment_plan: 1,
      installment: false,
      dt_payment_br: '2020-12-04T14:04:49.000Z',
      status_type: 'pending',
      holder_name: 'Igor José Ehlke Nichele ',
      transaction_type: 3
    },
    {
      id: 978168,
      id_store: 84,
      value: 400,
      status: 1,
      payment_type: 2,
      id_transaction_zoop: null,
      transaction_number: null,
      statement_descriptor: null,
      card_brand: null,
      installment_plan: 1,
      installment: false,
      dt_payment_br: '2020-07-14T17:46:07.000Z',
      status_type: 'created',
      holder_name: 'IGOR J E NICHELE',
      transaction_type: 2
    },
    {
      id: 957559,
      id_store: 84,
      value: 10000,
      status: 1,
      payment_type: 2,
      id_transaction_zoop: '6e50d4a842c0448fa581f4d315cfa86f',
      transaction_number: 'Z242033-11052006121504506395',
      statement_descriptor: 'ENICOMP',
      card_brand: 'MasterCard',
      installment_plan: 1,
      installment: false,
      dt_payment_br: '2020-06-12T15:14:03.000Z',
      status_type: 'succeeded',
      holder_name: 'Igor J E Nichele',
      transaction_type: 2
    },
    {
      id: 943488,
      id_store: 84,
      value: 110,
      status: 1,
      payment_type: 2,
      id_transaction_zoop: '401313c113ca458aa113853ad041a644',
      transaction_number: 'Z854514-10022005301201390904',
      statement_descriptor: 'ENICOMP',
      card_brand: 'MasterCard',
      installment_plan: 1,
      installment: true,
      dt_payment_br: '2020-05-30T12:03:54.000Z',
      status_type: 'succeeded',
      holder_name: 'Igor J E Nichele',
      transaction_type: 2
    },
    {
      id: 943491,
      id_store: 84,
      value: 110,
      status: 1,
      payment_type: 2,
      id_transaction_zoop: '',
      transaction_number: 'Z854514-10022005301201390904',
      statement_descriptor: 'ENICOMP',
      card_brand: 'MasterCard',
      installment_plan: 1,
      installment: true,
      dt_payment_br: '2020-05-30T12:03:54.000Z',
      status_type: 'succeeded',
      holder_name: 'Igor J E Nichele',
      transaction_type: 2
    },
    {
      id: 940486,
      id_store: 84,
      value: 350,
      status: 1,
      payment_type: 2,
      id_transaction_zoop: '00e24b715e004bf4baac07a267396efc',
      transaction_number: 'Z545511-10042005271821421014',
      statement_descriptor: 'ENICOMP',
      card_brand: 'MasterCard',
      installment_plan: 1,
      installment: true,
      dt_payment_br: '2020-05-27T18:25:08.000Z',
      status_type: 'succeeded',
      holder_name: 'Igor J E nichele',
      transaction_type: 2
    },
    {
      id: 940474,
      id_store: 84,
      value: 123,
      status: 1,
      payment_type: 2,
      id_transaction_zoop: '7b51fe0494a046799f9cd9580edba022',
      transaction_number: 'Z540063-11052005271802195183',
      statement_descriptor: 'ENICOMP',
      card_brand: 'MasterCard',
      installment_plan: 1,
      installment: true,
      dt_payment_br: '2020-05-27T18:18:04.000Z',
      status_type: 'succeeded',
      holder_name: 'IGOR J E NICHELE',
      transaction_type: 2
    },
    {
      id: 940341,
      id_store: 84,
      value: 123,
      status: 1,
      payment_type: 2,
      id_transaction_zoop: 'b5d477f2f9994525a73e2b24e5aa9c86',
      transaction_number: 'Z841643-10012005271616191762',
      statement_descriptor: 'ENICOMP',
      card_brand: 'MasterCard',
      installment_plan: 1,
      installment: true,
      dt_payment_br: '2020-05-27T16:30:08.000Z',
      status_type: 'succeeded',
      holder_name: 'IGOR J E NICHELE',
      transaction_type: 2
    },
    {
      id: 844563,
      id_store: 84,
      value: 6000,
      status: 0,
      payment_type: 3,
      id_transaction_zoop: '553bdbebae11451db6a4da2200c5f4d2',
      transaction_number: null,
      statement_descriptor: 'ENICOMP',
      card_brand: null,
      installment_plan: 1,
      installment: false,
      dt_payment_br: '2020-03-17T21:52:23.000Z',
      status_type: 'pending',
      holder_name: 'Igor Nichele ',
      transaction_type: 3
    },
    {
      id: 841781,
      id_store: 84,
      value: 8000,
      status: 0,
      payment_type: 3,
      id_transaction_zoop: 'eb95bc3224374b85a5c85c61958e5ab3',
      transaction_number: null,
      statement_descriptor: 'ENICOMP',
      card_brand: null,
      installment_plan: 1,
      installment: false,
      dt_payment_br: '2020-03-16T17:24:00.000Z',
      status_type: 'pending',
      holder_name: 'Igor Nichele ',
      transaction_type: 3
    }
  ]
};
