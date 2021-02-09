import { Thead, Tr, Th, Button } from '@chakra-ui/react';

import Filter from 'components/Filter';
import CustomDatePicker from 'components/CustomDatePicker';
import { CloseIcon } from '@chakra-ui/icons';

export default function TableHeaderLink({ useContext }) {
  const ctx = useContext;

  return (
    <Thead>
      <Tr>
        <Th h="auto" maxH="none">
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
        <Th>
          <Filter
            minW="7rem"
            type="text"
            placeholder="DESCRIÇÃO"
            setValue={ctx.setDescription}
            pageKey={ctx.pageKey}
            ref={ctx.payerRef}
          />
        </Th>
        <Th>
          <CustomDatePicker
            maxW={{ base: '9rem', xxl: 'none' }}
            setStartDate={ctx.setStart_date}
            setEndDate={ctx.setEnd_date}
            startDate={ctx.start_date}
            endDate={ctx.end_date}
          />
        </Th>
        <Th>
          <Filter
            type="text"
            placeholder="VALOR"
            minW="7rem"
            maxW="8rem"
            setValue={ctx.setAmount}
            pageKey={ctx.pageKey}
            ref={ctx.amountRef}
          />
        </Th>
        <Th>Pagamento por Link</Th>
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
