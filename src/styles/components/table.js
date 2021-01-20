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
        borderBottom: '1px solid',
        borderColor: 'gray.1100',
        pl: '0',
        py: '1.25rem',
        fontSize: '1rem',
        fontWeight: 'normal',
        lineHeight: '19px'
      },
      td: {
        pl: '0',
        py: '26px',
        color: 'gray.900',
        fontSize: '1.25rem',
        lineHeight: '24px',
        fontWeight: 'normal',
        borderTop: '1px solid',
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
        lineHeight: '19px',
        borderTop: '1px solid',
        borderBottom: '1px solid',
        borderColor: 'gray.1100'
      },
      td: {
        pl: '0',
        py: '26px',
        color: 'gray.900',
        fontSize: '1.25rem',
        lineHeight: '24px',
        fontWeight: 'normal',
        borderBottom: '1px solid',
        borderColor: 'gray.1100'
      }
    },
    'calendar-sales': {
      th: {
        color: 'white',
        fontSize: '14px',
        fontWeight: 'normal',
        borderTop: '1px solid',
        borderBottom: '1px solid',
        borderColor: '#2F343A',
        pl: '0'
      },
      td: {
        fontWeight: 'semibold',
        color: 'white',
        borderBottom: '1px solid',
        borderColor: '#2F343A',
        pl: '0'
      }
    },
    'calendar-receivables': {
      th: {
        color: 'white',
        fontSize: '14px',
        fontWeight: 'normal',
        borderTop: '1px solid',
        borderBottom: '1px solid',
        borderColor: '#f0c067',
        pl: '0'
      },
      td: {
        fontWeight: 'semibold',
        color: 'white',
        borderBottom: '1px solid',
        borderColor: '#f0c067',
        pl: '0'
      }
    }
  }
};

export default Table;
