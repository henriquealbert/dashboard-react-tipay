export const formatDoc = (value, setError) => {
  const docNumber = String(value).replace(/[^0-9]/g, '');

  if (docNumber.length < 10) {
    setError('searchTerm', {
      type: 'manual',
      message: 'Documento inválido.'
    });
    return;
  }
  if (docNumber.length <= 11) {
    return docNumber.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, '$1.$2.$3-$4');
  }
  if (docNumber.length > 11) {
    return docNumber.replace(
      /(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/g,
      '$1.$2.$3/$4-$5'
    );
  }
};
