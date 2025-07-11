'use client';

import { useEffect, useState } from 'react';

export default function Home() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('http://localhost:8000/hello')
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch((err) => console.error('Fetch error:', err));
  }, []);

  return (
    <main>
      <h1>Next.js フロントエンド</h1>
      <p>FastAPIからのメッセージ: {message}</p>
    </main>
  );
}
