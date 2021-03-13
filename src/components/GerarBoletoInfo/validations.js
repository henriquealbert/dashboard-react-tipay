import * as Yup from 'yup';

export const validations = Yup.object().shape({
  amount: Yup.string().required('Obrigatório.'),
  description: Yup.string().required('Obrigatório.'),
  expiration_date: Yup.string().required('Obrigatório.'),
  payment_limit_date: Yup.string().required('Obrigatório.')
});
