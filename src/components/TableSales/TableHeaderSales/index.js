import { CloseIcon } from '@chakra-ui/icons';
import { Thead, Tr, Th, Button } from '@chakra-ui/react';

import Filter from 'components/Filter';
import FilterSelect from 'components/FilterSelect';
import { useRef } from 'react';
import { useQueryClient } from 'react-query';
import { useLocation } from 'react-router-dom';

export default function TableHeaderSales({
  setIdentification,
  setPayer,
  setAmount,
  setStatus,
  setPaymentType,
  paymentType,
  status,
  pageKey,
  boleto
}) {
  const { pathname } = useLocation();
  const queryClient = useQueryClient();

  const identificationRef = useRef();
  const payerRef = useRef();
  const amountRef = useRef();

  const clearFilters = () => {
    if (boleto) {
      setIdentification('');
      identificationRef?.current.reset();
      setPayer('');
      payerRef?.current.reset();
      setAmount('');
      amountRef?.current.reset();
      setStatus('');
      queryClient.removeQueries(['transactions']);
    } else {
      setIdentification('');
      identificationRef?.current.reset();
      setPayer('');
      payerRef?.current.reset();
      setAmount('');
      amountRef?.current.reset();
      setStatus('');
      setPaymentType('');
      queryClient.removeQueries(['transactions']);
    }
  };

  return (
    <Thead>
      <Tr>
        <Th h="auto" maxH="none">
          <Filter
            type="text"
            placeholder="IDENTIFICAÇÃO"
            setValue={setIdentification}
            ref={identificationRef}
            pageKey={pageKey}
          />
        </Th>
        <Th>
          <Filter
            type="text"
            placeholder="PAGADOR"
            setValue={setPayer}
            pageKey={pageKey}
            ref={payerRef}
          />
        </Th>
        <Th>
          <Filter type="text" placeholder="DATA" />
        </Th>
        <Th>
          <Filter
            type="text"
            placeholder="VALOR"
            maxW="12rem"
            setValue={setAmount}
            pageKey={pageKey}
            ref={amountRef}
          />
        </Th>
        <Th>
          <FilterSelect
            placeholder="STATUS"
            minW="9rem"
            setValue={setStatus}
            value={status}
            pageKey={pageKey}
          >
            <option value="0">Pendente</option>
            <option value="1">Aprovada</option>
            <option value="2">Falhada</option>
            <option value="3">Cancelada</option>
            <option value="4">Chargeback</option>
            <option value="5">Estornada</option>
            <option value="6">Em disputa</option>
          </FilterSelect>
        </Th>
        <Th>
          {pathname === '/boletos' ? (
            'PAGAMENTO'
          ) : (
            <FilterSelect
              minW="11rem"
              setValue={setPaymentType}
              value={paymentType}
              pageKey={pageKey}
              placeholder="PAGAMENTO"
            >
              <option value="1">Débito</option>
              <option value="2">Crédito</option>
              <option value="3">Boleto</option>
            </FilterSelect>
          )}
        </Th>
        <Th pr="0" textAlign="right">
          <Button
            variant="unstyled"
            _hover={{ textDecoration: 'underline', color: 'gray.500' }}
            onClick={clearFilters}
          >
            Limpar filtros <CloseIcon ml="0.5rem" w={3} h={3} />
          </Button>
        </Th>
      </Tr>
    </Thead>
  );
}
