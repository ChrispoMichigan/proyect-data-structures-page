// src/components/stack/StackView.jsx
import React, { useState } from "react";

export default function StackView() {
  const [stack, setStack] = useState([]);
  const [input, setInput] = useState("");
  const [highlightIndex, setHighlightIndex] = useState(null); // para peek
  const [animIndex, setAnimIndex] = useState(null); // para push/pop


  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
  const withAnim = async (fn) => { const r = await fn(); await sleep(450); return r; };

  const push = async () => {
    const val = input.trim();
    if (!val) return;
    await withAnim(async () => {
      setAnimIndex(stack.length);
      setStack((prev) => [...prev, val]);
    });
    setAnimIndex(null);
    setInput("");
  };

  const pop = async () => {
    if (stack.length === 0) return;
    await withAnim(async () => setAnimIndex(stack.length - 1));
    await withAnim(async () => {
      setStack((prev) => prev.slice(0, -1));
      setAnimIndex(null);
    });
  };

  const peek = async () => {
    if (stack.length === 0) return;
    const top = stack.length - 1;
    await withAnim(async () => setHighlightIndex(top));
    await withAnim(async () => setHighlightIndex(null));
  };

  return (
    <div>
      <div className="flex gap-3 mb-4 items-end justify-center">
        <div>
          <label className="block text-sm text-gray-600 mb-1">Valor</label>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="border rounded-lg px-3 py-2"
            placeholder="Ej. 42"
          />
        </div>
        <button
          onClick={push}
          className="px-5 py-2 rounded-full text-white font-semibold shadow-md transition 
                     bg-gradient-to-r from-emerald-400 to-sky-400 hover:shadow-xl hover:scale-105"
        >
          Push
        </button>
        <button
          onClick={pop}
          className="px-5 py-2 rounded-full text-white font-semibold shadow-md transition 
                     bg-gradient-to-r from-rose-400 to-pink-500 hover:shadow-xl hover:scale-105"
        >
          Pop
        </button>
        <button
          onClick={peek}
          className="px-5 py-2 rounded-full text-white font-semibold shadow-md transition 
                     bg-gradient-to-r from-fuchsia-400 to-indigo-400 hover:shadow-xl hover:scale-105"
        >
          Peek
        </button>
      </div>

      {/* visual de pila */}
      <div className="flex flex-col items-center mt-6">
        <div className="w-64 h-2 bg-gray-200 rounded-full mb-2" />
        <div className="flex flex-col-reverse gap-2">
          {stack.map((val, idx) => {
            const isTop = idx === stack.length - 1;
            const isAnim = idx === animIndex;
            const isHi  = idx === highlightIndex;

            return (
              <div
                key={`${val}-${idx}`}
                className={[
                  "w-64 px-4 py-3 rounded-2xl shadow-lg transition-all duration-300 text-center",
                  "border border-white/40 bg-white/70 backdrop-blur-sm",
                  isAnim ? "translate-y-1 scale-[1.02]" : "",
                  isHi ? "ring-2 ring-fuchsia-300" : "",
                ].join(" ")}
              >
                {val}
                {isTop && (
                  <div className="mt-1 inline-block text-xs px-2 py-0.5 rounded-full 
                                  bg-rose-100 text-rose-700 border border-rose-200">
                    Top
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

