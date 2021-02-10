import { Thead, Tr, Th, Button } from '@chakra-ui/react';

import Filter from 'components/Filter';
import CustomDatePicker from 'components/CustomDatePicker';
import { CloseIcon } from '@chakra-ui/icons';
import FilterSelect from 'components/FilterSelect';

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
            ref={ctx.descriptionRef}
          />
        </Th>
        <Th>
          <CustomDatePicker useContext={useContext} />
        </Th>
        <Th>
          <Filter
            type="text"
            placeholder="VALOR"
            minW="8rem"
            maxW="10rem"
            setValue={ctx.setAmount}
            value={ctx.amount}
            pageKey={ctx.pageKey}
            ref={ctx.amountRef}
          />
        </Th>
        <Th>
          <FilterSelect
            placeholder="PAGAMENTO POR LINK"
            minW="7rem"
            maxW=""
            setValue={ctx.setActive}
            value={ctx.is_active}
            pageKey={ctx.pageKey}
          >
            <option value="1">Ativo</option>
            <option value="0">Desativado</option>
          </FilterSelect>
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
