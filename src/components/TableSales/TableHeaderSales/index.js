import { useLocation } from 'react-router-dom';
import { CloseIcon } from '@chakra-ui/icons';
import { Thead, Tr, Th, Button } from '@chakra-ui/react';

import Filter from 'components/Filter';
import FilterSelect from 'components/FilterSelect';
import CustomDatePicker from 'components/CustomDatePicker';

export default function TableHeaderSales({ useContext }) {
  const { pathname } = useLocation();
  const ctx = useContext;

  return (
    <Thead>
      <Tr>
        <Th h="auto" maxH="none" pr={{ base: '0.5rem', xxl: '1rem' }}>
          <Filter
            type="text"
            minW="4rem"
            maxW="6rem"
            placeholder="ID"
            setValue={ctx.setIdentification}
            ref={ctx.identificationRef}
            pageKey={ctx.pageKey}
          />
        </Th>
        <Th pr={{ base: '0.5rem', xxl: '1rem' }}>
          <Filter
            minW="7rem"
            type="text"
            placeholder="PAGADOR"
            setValue={ctx.setPayer}
            pageKey={ctx.pageKey}
            ref={ctx.payerRef}
          />
        </Th>
        <Th pr={{ base: '0.5rem', xxl: '1rem' }}>
          <CustomDatePicker useContext={useContext} />
        </Th>
        <Th pr={{ base: '0.5rem', xxl: '1rem' }}>
          <Filter
            placeholder="VALOR"
            minW="8rem"
            maxW="10rem"
            setValue={ctx.setAmount}
            pageKey={ctx.pageKey}
            ref={ctx.amountRef}
          />
        </Th>
        <Th pr={{ base: '0.5rem', xxl: '1rem' }}>
          <FilterSelect
            placeholder="STATUS"
            minW="7rem"
            maxW=""
            setValue={ctx.setStatus}
            value={ctx.status}
            pageKey={ctx.pageKey}
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
        <Th pr={{ base: '0.5rem', xxl: '1rem' }}>
          {pathname === '/boletos' ? (
            'PAGAMENTO'
          ) : (
            <FilterSelect
              minW="10rem"
              maxW=""
              setValue={ctx.setPaymentType}
              value={ctx.paymentType}
              pageKey={ctx.pageKey}
              placeholder="PAGAMENTO"
            >
              <option value="1">Débito</option>
              <option value="2">Crédito</option>
              <option value="3">Boleto</option>
            </FilterSelect>
          )}
        </Th>
        <Th textAlign="right" pr={{ base: '1rem', xl: '0' }}>
          <Button
            variant="unstyled"
            _hover={{ textDecoration: 'underline', color: 'gray.500' }}
            onClick={ctx.clearFilters}
          >
            Limpar filtros <CloseIcon ml="0.5rem" w={3} h={3} />
          </Button>
        </Th>
      </Tr>
    </Thead>
  );
}
