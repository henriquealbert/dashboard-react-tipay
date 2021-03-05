import api from 'api';

export function fillCepOnBlur(event, setValue, setError) {
  const cep = event.target.value;
  if (cep.length === 0) {
    setError('cep', {
      type: 'manual',
      message: 'Obrigatório.'
    });
    return;
  }

  // set 'loading'
  setValue('district', '...');
  setValue('street', '...');
  setValue('city', '...');
  setValue('state', '...');
  setValue('number', '');

  api
    .get(`https://brasilapi.com.br/api/cep/v1/${cep}`)
    .then(({ data }) => {
      setValue('district', data?.neighborhood);
      setValue('street', data?.street);
      setValue('city', data?.city);
      setValue('state', data?.state);
    })
    .catch((error) => {
      if (error?.response?.status === 404) {
        setError('cep', {
          type: 'manual',
          message: 'CEP não encontrado.'
        });
      }
    });
}
