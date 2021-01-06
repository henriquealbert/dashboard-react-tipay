import { useContext } from 'react';

import { Context } from 'context/AuthContext';

export const useAuthContext = () => useContext(Context);
