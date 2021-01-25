const Table = {
  variants: {
    simple: {
      th: {
        borderColor: '#ECECEC'
      },
      td: {
        borderColor: '#ECECEC'
      }
    },
    sales: {
      th: {
        color: 'gray.700',
        borderBottom: '0.063rem solid',
        borderColor: 'gray.1100',
        pl: '0',
        py: '1.25rem',
        fontSize: '1rem',
        fontWeight: 'normal',
        lineHeight: '1.188rem'
      },
      td: {
        pl: '0',
        py: '1.625rem',
        color: 'gray.900',
        fontSize: '1.25rem',
        lineHeight: '1.5rem',
        fontWeight: 'normal',
        borderTop: '0.063rem solid',
        borderColor: 'gray.1100'
      }
    },
    'sales-modal': {
      th: {
        color: 'gray.700',
        pl: '0',
        py: '1.25rem',
        fontSize: '1rem',
        fontWeight: 'normal',
        lineHeight: '1.188rem',
        borderTop: '0.063rem solid',
        borderBottom: '0.063rem solid',
        borderColor: 'gray.1100'
      },
      td: {
        pl: '0',
        py: '1.625rem',
        color: 'gray.900',
        fontSize: '1.25rem',
        lineHeight: '1.5rem',
        fontWeight: 'normal',
        borderBottom: '0.063rem solid',
        borderColor: 'gray.1100'
      }
    },
    'calendar-sales': {
      th: {
        color: 'white',
        fontSize: '0.875rem',
        fontWeight: 'normal',
        borderTop: '0.063rem solid',
        borderBottom: '0.063rem solid',
        borderColor: '#2F343A',
        pl: '0'
      },
      td: {
        fontWeight: 'semibold',
        color: 'white',
        borderBottom: '0.063rem solid',
        borderColor: '#2F343A',
        pl: '0'
      }
    },
    'calendar-receivables': {
      th: {
        color: 'white',
        fontSize: '0.875rem',
        fontWeight: 'normal',
        borderTop: '0.063rem solid',
        borderBottom: '0.063rem solid',
        borderColor: '#f0c067',
        pl: '0'
      },
      td: {
        fontWeight: 'semibold',
        color: 'white',
        borderBottom: '0.063rem solid',
        borderColor: '#f0c067',
        pl: '0'
      }
    }
  }
};

export default Table;
