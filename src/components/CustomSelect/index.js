import { forwardRef } from '@chakra-ui/system';
import useBanks from 'hooks/useBanks';
import Select from 'react-select';

function CustomSelect({ setValue, value }, ref) {
  const { data: banksData } = useBanks();

  const options =
    banksData &&
    banksData?.map((bank) => {
      return {
        value: `${bank.bank_code}-${bank.bank_name}`,
        label: `${bank.bank_code} - ${bank.bank_name}`
      };
    });

  const defaultValue = () => {
    const index = options?.findIndex((item) => item.value === value);
    return options[index];
  };

  const handleBankSelect = (values) => {
    const bank_name = values?.value.split('-')[1];
    const bank_code = values?.value.split('-')[0];
    setValue('bank_name', bank_name);
    setValue('bank_code', Number(bank_code));
  };

  const customStyles = {
    option: (provided) => ({
      ...provided,
      borderBottom: '1px solid #B8B8B8',
      padding: '0.5rem 1rem'
    }),
    control: () => ({
      width: '100%',
      height: '4.5rem',
      maxWidth: '43.438rem',
      fontSize: '1.25rem',
      borderRadius: '0.313rem',
      padding: '1rem',
      display: 'flex',
      background: '#F2F2F2'
    }),
    indicatorSeparator: () => ({
      display: 'none'
    })
  };

  return (
    <>
      {options && (
        <Select
          isSearchable
          options={options}
          onChange={handleBankSelect}
          ref={ref}
          defaultValue={defaultValue()}
          styles={customStyles}
          noOptionsMessage={() => 'Nenhuma opção encontrada.'}
        />
      )}
    </>
  );
}

export default forwardRef(CustomSelect);
