const Select = {
  variants: {
    innerSolid: {
      field: {
        bg: '#F2F2F2',
        fontSize: '1.25rem',
        borderRadius: '0.313rem',
        h: '4.5rem',
        maxW: '43.438rem',
        _focus: {
          bg: '#F2F2F2'
        },
        _placeholder: {
          color: '#D9D9D9'
        }
      }
    },
    outline: {
      field: {
        border: '0.125rem solid',
        borderColor: 'gray.300',
        borderRadius: '0.313rem',
        color: 'gray.700',
        padding: '0.625rem 1.25rem',
        fontSize: '0.875rem',
        lineHeight: '1.125rem',
        fontWeight: 'semibold',
        minWidth: 'none',
        cursor: 'pointer',
        _focus: { boxShadow: '0 0 0 1px #B8B8B8', borderColor: 'gray.700' }
      }
    }
  }
};

export default Select;
