import { useState } from 'react';

import Card from '@/components/Card';

export default function TestPage() {
  const [count, setCount] = useState(0);
  const countTimesTwo = count * 2;

  const increment = () => {
    setCount(count + 1);
  };

  const cardData = [
    { title: 'Kartu 1', href: '/link2', isi: 'hi' },
    { title: 'Kartu 3', href: '/link4', isi: 'hi' },
    { title: 'Kartu 5', href: '/link6', isi: 'hi' },
    { title: 'Kartu 7', href: '/link8', isi: 'hi' },
    { title: 'Kartu 9', href: '/link10', isi: 'hi' },
  ];

  return (
    <section className='bg-dark'>
      <div className='min-h-screen py-16 text-white layout'>
        <ul className='space-y-8'>
          {cardData.map((c) => (
            <Card key={c.title} {...c} />
          ))}
        </ul>
      </div>
    </section>
  );
}
