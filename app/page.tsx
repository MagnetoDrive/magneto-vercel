'use client';
import { useState } from 'react';

export default function Home() {
  const [product, setProduct] = useState('Used cars');
  const [audience, setAudience] = useState('Budget-conscious families');
  const [outcome, setOutcome] = useState('Save money and drive reliable');
  const [tone, setTone] = useState('Direct Response');
  const [hooks, setHooks] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  const generate = async () => {
    setLoading(true);
    setHooks([]);
    const res = await fetch('/api/generate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ product, audience, outcome, tone }),
    });
    const data = await res.json();
    setHooks(data.hooks || []);
    setLoading(false);
  };

  return (
    <main className="max-w-3xl mx-auto p-6 md:p-10">
      <h1 className="text-4xl font-bold mb-2">Magneto</h1>
      <p className="text-zinc-400 mb-8">Generate 15 magnetic hooks in seconds.</p>

      <div className="grid gap-4 bg-zinc-900 p-6 rounded-2xl border border-zinc-800">
        <input className="bg-zinc-800 p-3 rounded-xl" placeholder="Product" value={product} onChange={e=>setProduct(e.target.value)} />
        <input className="bg-zinc-800 p-3 rounded-xl" placeholder="Audience" value={audience} onChange={e=>setAudience(e.target.value)} />
        <input className="bg-zinc-800 p-3 rounded-xl" placeholder="Desired outcome" value={outcome} onChange={e=>setOutcome(e.target.value)} />
        <select className="bg-zinc-800 p-3 rounded-xl" value={tone} onChange={e=>setTone(e.target.value)}>
          <option>Direct Response</option>
          <option>Conversational</option>
          <option>Bold</option>
          <option>Empathetic</option>
        </select>
        <button onClick={generate} disabled={loading} className="bg-white text-black font-semibold p-3 rounded-xl hover:opacity-90 disabled:opacity-50">
          {loading ? 'Generating...' : 'FORMULATE 15 HOOKS'}
        </button>
      </div>

      {hooks.length > 0 && (
        <div className="mt-8 space-y-2">
          {hooks.map((h,i)=>(
            <div key={i} className="p-4 bg-zinc-900 border border-zinc-800 rounded-xl">{i+1}. {h}</div>
          ))}
        </div>
      )}
    </main>
  );
}
