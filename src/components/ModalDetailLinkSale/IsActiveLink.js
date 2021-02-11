import { FormControl, FormLabel, Switch, Text } from '@chakra-ui/react';
import api from 'api';
import { useState } from 'react';

export default function IsActiveLink({ data }) {
  const [message, setMessage] = useState('');
  const [value, setValue] = useState(data?.is_active);

  const handleChange = async () => {
    if (value) {
      const turn_off = await api.patch(`v1/link/${data?.id}/turn_off.json`);
      setMessage(turn_off?.data?.message);
      setValue(false);
    }
    if (!value) {
      const turn_on = await api.patch(`v1/link/${data?.id}/turn_on.json`);
      setMessage(turn_on?.data?.message);
      setValue(true);
    }
  };

  return (
    <FormControl id="link" mb="2rem">
      <FormLabel fontWeight="bold">Link ativado</FormLabel>
      <Switch
        size="lg"
        onChange={handleChange}
        value={value}
        isChecked={value}
      />
      <Text mt="0.5rem">{message}</Text>
    </FormControl>
  );
}
