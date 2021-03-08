const isValidEmail = (value) => {
  const reg = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  return reg.test(value);
};

export const validEmail = (value, setError) => {
  if (isValidEmail(value)) {
    return true;
  } else {
    setError('searchTerm', {
      type: 'manual',
      message: 'Email inválido.'
    });
    return false;
  }
};
