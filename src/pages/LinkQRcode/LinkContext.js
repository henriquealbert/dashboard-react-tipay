import { createContext, useContext, useState, useRef } from 'react';
import { useQueryClient } from 'react-query';

import { getLast3Months, getToday } from 'utils/formatDate';

const LinkContext = createContext();

export const LinkProvider = ({ children }) => {
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
  const [description, setDescription] = useState();
  const [amount, setAmount] = useState();
  const [start_date, setStart_date] = useState();
  const [start, setStart] = useState();
  const [end_date, setEnd_date] = useState();
  const [end, setEnd] = useState();
  const [paymentType, setPaymentType] = useState();

  /************* DETAILS *************/
  const [transactionID, setTransactionID] = useState();

  /************* PAGE QUERY ID *************/
  const pageKey = 'linkQRCode';

  /************* FILTERS *************/
  const identificationRef = useRef();
  const descriptionRef = useRef();
  const amountRef = useRef();

  const clearFilters = () => {
    setIdentification('');
    identificationRef?.current.reset();
    setDescription('');
    descriptionRef?.current.reset();
    setAmount('');
    amountRef?.current.reset();
    setStart_date('');
    setStart('');
    setEnd_date('');
    setEnd('');
    queryClient.removeQueries([pageKey]);
  };

  return (
    <LinkContext.Provider
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
        description,
        setDescription,
        amount,
        setAmount,
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
        descriptionRef,
        amountRef,
        start,
        setStart,
        end,
        setEnd
      }}
    >
      {children}
    </LinkContext.Provider>
  );
};

export const useLinkContext = () => {
  const context = useContext(LinkContext);

  if (!context) {
    throw new Error('useLinkContext must be used within an LinkProvider');
  }

  return context;
};
