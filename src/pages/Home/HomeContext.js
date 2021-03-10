import { createContext, useContext, useState, useRef } from 'react';

import { getLast3Months, getToday } from 'utils/formatDate';

const HomeContext = createContext();

export const HomeProvider = ({ children }) => {
  /************* HEADER *************/
  const [headerStartDate, setHeaderStartDate] = useState(getLast3Months());
  const [headerEndDate, setHeaderEndDate] = useState(getToday());
  const pageKeyHeader = 'Statistics_Home';

  /************* TABLE *************/
  const printRef = useRef();

  return (
    <HomeContext.Provider
      value={{
        headerStartDate,
        setHeaderStartDate,
        headerEndDate,
        setHeaderEndDate,
        printRef,
        pageKeyHeader
      }}
    >
      {children}
    </HomeContext.Provider>
  );
};

export const useHomeContext = () => {
  const context = useContext(HomeContext);

  if (!context) {
    throw new Error('useHomeContext must be used within an HomeProvider');
  }

  return context;
};
