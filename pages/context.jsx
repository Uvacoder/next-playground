import CountComp from '@/components/CountComp';
import { createContext, useContext, useState } from 'react';

export default function ContextPage() {
  const [counter, setCounter] = useState(0);

  const ContextProvider = ({ children }) => {
    return (
      <CountContext.Provider value={[counter, setCounter]}>
        {children}
      </CountContext.Provider>
    );
  };

  return (
    <ContextProvider>
      <CountComp />
    </ContextProvider>
  );
}

export const CountContext = createContext();

export function useCount() {
  return useContext(CountContext);
}
