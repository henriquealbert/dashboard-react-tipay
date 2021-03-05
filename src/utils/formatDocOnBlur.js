export const formatDocOnBlur = (event, setValue, setError) => {
  const docNumber = String(event.target.value).replace(/[^0-9]/g, '');

  if (docNumber.length < 10) {
    console.log('asduhas');
    setError('cpf_cnpj', {
      type: 'manual',
      message: 'Documento inválido.'
    });
  }
  if (docNumber.length <= 11) {
    setValue(
      'cpf_cnpj',
      docNumber.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, '$1.$2.$3-$4')
    );
  }
  if (docNumber.length > 11) {
    setValue(
      'cpf_cnpj',
      docNumber.replace(
        /(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/g,
        '$1.$2.$3/$4-$5'
      )
    );
  }
};
