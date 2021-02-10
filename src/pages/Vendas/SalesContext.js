import { createContext, useContext, useState, useRef } from 'react';
import { useQueryClient } from 'react-query';

import { getLast3Months, getToday } from 'utils/formatDate';

const SalesContext = createContext();

export const SalesProvider = ({ children }) => {
  const queryClient = useQueryClient();

  /************* HEADER *************/
  const [headerStartDate, setHeaderStartDate] = useState(getLast3Months());
  const [headerEndDate, setHeaderEndDate] = useState(getToday());

  /************* TABLE *************/
  const printRef = useRef();
  const [csv, setCsv] = useState([]);
  const [page, setPage] = useState(1);
  const [per_Page, setPer_Page] = useState(25);
  const [identification, setIdentification] = useState();
  const [payer, setPayer] = useState();
  const [amount, setAmount] = useState();
  const [status, setStatus] = useState();
  const [start_date, setStart_date] = useState();
  const [start, setStart] = useState();
  const [end_date, setEnd_date] = useState();
  const [end, setEnd] = useState();
  const [paymentType, setPaymentType] = useState();

  /************* DETAILS *************/
  const [transactionID, setTransactionID] = useState();

  /************* PAGE QUERY ID *************/
  const pageKey = 'transactions';

  /************* FILTERS *************/
  const identificationRef = useRef();
  const payerRef = useRef();
  const amountRef = useRef();

  const clearFilters = () => {
    setIdentification('');
    identificationRef?.current.reset();
    setPayer('');
    payerRef?.current.reset();
    setAmount('');
    amountRef?.current.reset();
    setStatus('');
    setPaymentType('');
    setStart_date('');
    setStart('');
    setEnd_date('');
    setEnd('');
    queryClient.removeQueries([pageKey]);
  };

  return (
    <SalesContext.Provider
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
        payer,
        setPayer,
        amount,
        setAmount,
        status,
        setStatus,
        start_date,
        setStart_date,
        end_date,
        setEnd_date,
        paymentType,
        setPaymentType,
        transactionID,
        setTransactionID,
        pageKey,
        clearFilters,
        identificationRef,
        start,
        setStart,
        end,
        setEnd,
        payerRef,
        amountRef
      }}
    >
      {children}
    </SalesContext.Provider>
  );
};

export const useSalesContext = () => {
  const context = useContext(SalesContext);

  if (!context) {
    throw new Error('useSalesContext must be used within an SalesProvider');
  }

  return context;
};
