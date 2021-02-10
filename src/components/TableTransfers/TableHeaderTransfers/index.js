import { Thead, Tr, Th } from '@chakra-ui/react';

import Filter from 'components/Filter';
import FilterSelect from 'components/FilterSelect';
import CustomDatePicker from 'components/CustomDatePicker';

export default function TableHeaderTransfers({ useContext }) {
  const ctx = useContext;

  return (
    <Thead>
      <Tr>
        <Th>
          <Filter
            type="text"
            minW="4rem"
            maxW="9rem"
            placeholder="ID"
            setValue={ctx.setIdentification}
            ref={ctx.identificationRef}
            pageKey={ctx.pageKey}
          />
        </Th>

        <Th>
          <CustomDatePicker useContext={useContext} />
        </Th>
        <Th>
          <FilterSelect
            placeholder="STATUS"
            minW="7rem"
            maxW="15rem"
            setValue={ctx.setStatus}
            value={ctx.status}
            pageKey={ctx.pageKey}
          >
            <option value="0">Transferência agendada</option>
            <option value="1">Transferência efetuada com sucesso</option>
            <option value="2">Transferência falhada</option>
          </FilterSelect>
        </Th>
        <Th pr={{ md: '0' }} maxW="5rem">
          <Filter
            type="text"
            placeholder="VALOR"
            minW="8rem"
            maxW="10rem"
            setValue={ctx.setAmount}
            pageKey={ctx.pageKey}
            value={ctx.amount}
            ref={ctx.amountRef}
          />
        </Th>
      </Tr>
    </Thead>
  );
}
