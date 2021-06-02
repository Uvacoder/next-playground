import { useEffect, useState } from 'react';

export default function UseEffectPage() {
  const [index, setIndex] = useState('1');
  const [data, setData] = useState({});

  // manggil pertama kali saat render -> ditandai dengan []
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/todos/${index}`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [index]);

  useEffect(() => {
    console.log(count, counter2);
  }, [index]);

  function handleSelectChange(e) {
    setIndex(e.target.value);
  }

  return (
    <section className='bg-dark'>
      <div className='min-h-screen py-24 text-white layout'>
        <div className='flex flex-col max-w-sm'>
          <label htmlFor='index'>Select</label>
          <select
            value={index}
            onChange={handleSelectChange}
            name='index'
            id='index'
            className='my-4 rounded-lg bg-dark'
          >
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <option value={item} key={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>
    </section>
  );
}

/* 
// Promise
fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then((res) => res.json())
  .then((data) => setData(data));

// Async Await
async function loadData() {
      const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
      const data = await res.json();

      setData(data);
    }

loadData();
*/

/* 1. fetch data
    a. pada saat first render
    b. pada saat condition meets
2. running function
    a. pada saat first render
    b. pada saat condition meets */
