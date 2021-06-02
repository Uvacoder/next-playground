import { useContext } from 'react';
import { useCount } from '../pages/context';

export default function CountComp() {
  const [count, setCount] = useCount();
  return (
    <button classname='p-4' onClick={() => setCount(count + 1)}>
      {count}
    </button>
  );
}
