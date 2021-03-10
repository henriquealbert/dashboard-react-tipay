import { createContext, useContext, useState, useRef } from 'react';
import { useQueryClient } from 'react-query';

import { getLast3Months, getToday } from 'utils/formatDate';

const TransfersContext = createContext();

export const TransfersProvider = ({ children }) => {
  const queryClient = useQueryClient();

  /************* HEADER *************/
  const [headerStartDate, setHeaderStartDate] = useState(getLast3Months());
  const [headerEndDate, setHeaderEndDate] = useState(getToday());
  const pageKeyHeader = 'Statistics_Transfers';

  /************* TABLE *************/
  const printRef = useRef();
  const [csv, setCsv] = useState([]);
  const [page, setPage] = useState(1);
  const [per_Page, setPer_Page] = useState(25);
  const [identification, setIdentification] = useState();
  const [amount, setAmount] = useState();
  const [status, setStatus] = useState();
  const [start_date, setStart_date] = useState();
  const [start, setStart] = useState();
  const [end_date, setEnd_date] = useState();
  const [end, setEnd] = useState();

  /************* PAGE QUERY ID *************/
  const pageKey = 'Transfers';

  /************* FILTERS *************/
  const identificationRef = useRef();
  const amountRef = useRef();

  const clearFilters = () => {
    setIdentification('');
    identificationRef?.current.reset();
    setStart_date('');
    setStart('');
    setEnd_date('');
    setEnd('');
    setStatus('');
    setAmount('');
    amountRef?.current.reset();
    queryClient.removeQueries([pageKey]);
  };

  return (
    <TransfersContext.Provider
      value={{
        headerStartDate,
        setHeaderStartDate,
        headerEndDate,
        setHeaderEndDate,
        printRef,
        csv,
        setCsv,
        page,
        setPage,
        per_Page,
        setPer_Page,
        identification,
        setIdentification,
        amount,
        setAmount,
        status,
        setStatus,
        start_date,
        setStart_date,
        end_date,
        setEnd_date,
        pageKey,
        clearFilters,
        identificationRef,
        amountRef,
        start,
        setStart,
        end,
        setEnd,
        pageKeyHeader
      }}
    >
      {children}
    </TransfersContext.Provider>
  );
};

export const useTransfersContext = () => {
  const context = useContext(TransfersContext);

  if (!context) {
    throw new Error(
      'useTransfersContext must be used within an TransfersProvider'
    );
  }

  return context;
};
