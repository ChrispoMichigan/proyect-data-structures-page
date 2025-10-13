// src/components/queue/QueueView.jsx
import React, { useState } from "react";

export default function QueueView() {
  const [queue, setQueue] = useState([]);
  const [input, setInput] = useState("");
  const [animIndex, setAnimIndex] = useState(null);       
  const [highlightIndex, setHighlightIndex] = useState(null); 


  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
  const withAnim = async (fn) => { const r = await fn(); await sleep(450); return r; };

  const enqueue = async () => {
    const val = input.trim();
    if (!val) return;
    await withAnim(async () => {
      setAnimIndex(queue.length); // entra al final
      setQueue((prev) => [...prev, val]);
    });
    setAnimIndex(null);
    setInput("");
  };

  const dequeue = async () => {
    if (queue.length === 0) return;
    await withAnim(async () => setAnimIndex(0)); // sale por el frente
    await withAnim(async () => {
      setQueue((prev) => prev.slice(1));
      setAnimIndex(null);
    });
  };

  const peek = async () => {
    if (queue.length === 0) return;
    await withAnim(async () => setHighlightIndex(0));
    await withAnim(async () => setHighlightIndex(null));
  };

  return (
    <div>
      {/* acciones */}
      <div className="flex gap-3 mb-4 items-end justify-center">
        <div>
          <label className="block text-sm text-gray-600 mb-1">Valor</label>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="border rounded-lg px-3 py-2"
            placeholder="Ej. A, B, C"
          />
        </div>
        <button
          onClick={enqueue}
          className="px-5 py-2 rounded-full text-white font-semibold shadow-md transition
                     bg-gradient-to-r from-emerald-400 to-sky-400 hover:shadow-xl hover:scale-105"
        >
          Enqueue
        </button>
        <button
          onClick={dequeue}
          className="px-5 py-2 rounded-full text-white font-semibold shadow-md transition
                     bg-gradient-to-r from-rose-400 to-pink-500 hover:shadow-xl hover:scale-105"
        >
          Dequeue
        </button>
        <button
          onClick={peek}
          className="px-5 py-2 rounded-full text-white font-semibold shadow-md transition
                     bg-gradient-to-r from-fuchsia-400 to-indigo-400 hover:shadow-xl hover:scale-105"
        >
          Peek
        </button>
      </div>

      {/* visual de la cola */}
      <div className="flex items-center justify-center gap-2 mt-6">
        <div className="text-sm text-sky-700/70 mr-2">Frente →</div>
        {queue.map((val, idx) => {
          const isAnim = idx === animIndex;
          const isHi   = idx === highlightIndex;
          return (
            <div
              key={`${val}-${idx}`}
              className={[
                "px-4 py-3 rounded-2xl shadow-lg transition-all duration-300",
                "bg-white/70 backdrop-blur-sm border border-white/40",
                isAnim ? "scale-[1.03]" : "",
                isHi ? "ring-2 ring-sky-300" : "",
              ].join(" ")}
            >
              {val}
            </div>
          );
        })}
        <div className="text-sm text-rose-700/70 ml-2">← Final</div>
      </div>
    </div>
  );
}



