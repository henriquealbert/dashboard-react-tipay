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
        py: '20px',
        fontSize: '16px',
        fontWeight: 'normal',
        lineHeight: '19px'
      },
      td: {
        pl: '0',
        py: '26px',
        color: 'gray.900',
        fontSize: '20px',
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
        py: '20px',
        fontSize: '16px',
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
        fontSize: '20px',
        lineHeight: '24px',
        fontWeight: 'normal',
        borderBottom: '1px solid',
        borderColor: 'gray.1100'
      }
    }
  }
};

export default Table;
