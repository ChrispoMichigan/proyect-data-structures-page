// src/components/tree/BSTView.jsx
import React, { useMemo, useState } from "react";


class BSTNode {
  constructor(v) {
    this.v = v;
    this.l = null;
    this.r = null;
  }
}

export default function BSTView() {
  const [root, setRoot] = useState(null);
  const [input, setInput] = useState("");
  const [highlight, setHighlight] = useState(null);   // valor resaltado por busqueda
  const [actionNode, setActionNode] = useState(null); // valor animado en operacion


  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
  const withAnim = async (fn) => { const r = await fn(); await sleep(450); return r; };


  const insert = async () => {
    const raw = input.trim();
    if (!raw) return;
    const val = isNaN(Number(raw)) ? raw : Number(raw);

    const clone = structuredCloneTree(root);
    if (!clone) {
      await withAnim(async () => setActionNode(val));
      setRoot(new BSTNode(val));
      await withAnim(async () => setActionNode(null));
      setInput("");
      return;
    }
    let cur = clone;
    while (true) {
      await withAnim(async () => setActionNode(cur.v));
      if (val < cur.v) {
        if (!cur.l) { cur.l = new BSTNode(val); setRoot(clone); break; }
        cur = cur.l;
      } else if (val > cur.v) {
        if (!cur.r) { cur.r = new BSTNode(val); setRoot(clone); break; }
        cur = cur.r;
      } else {

        setRoot(clone);
        break;
      }
    }
    await withAnim(async () => setActionNode(null));
    setInput("");
  };

  const search = async () => {
    const raw = input.trim();
    if (!raw) return;
    const val = isNaN(Number(raw)) ? raw : Number(raw);

    let cur = root;
    while (cur) {
      await withAnim(async () => { setHighlight(cur.v); setActionNode(cur.v); });
      if (val === cur.v) break;
      cur = val < cur.v ? cur.l : cur.r;
    }
    await withAnim(async () => { setHighlight(null); setActionNode(null); });
  };

  const remove = async () => {
    const raw = input.trim();
    if (!raw) return;
    const val = isNaN(Number(raw)) ? raw : Number(raw);

    const [newRoot] = await removeWithAnim(root, val, withAnim, setActionNode);

    const refreshed = structuredCloneTree(newRoot);
    setRoot(refreshed);
    await withAnim(async () => setActionNode(null));
    setInput("");
  };


  const traversals = useMemo(() => {
    const res = { inOrder: [], preOrder: [], postOrder: [] };
    inOrder(root, (v) => res.inOrder.push(v));
    preOrder(root, (v) => res.preOrder.push(v));
    postOrder(root, (v) => res.postOrder.push(v));
    return res;
  }, [root]);


  const layout = useMemo(() => computeLayout(root), [root]);
  const nodeMap = useMemo(() => {
    const m = new Map();
    layout.nodes.forEach((n) => m.set(n.ref, n));
    return m;
  }, [layout]);

  return (
    <div>
      {/* Acciones */}
      <div className="flex gap-3 mb-4 items-end justify-center">
        <div>
          <label className="block text-sm text-gray-600 mb-1">Valor</label>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="border rounded-lg px-3 py-2"
            placeholder="Ej. 50"
          />
        </div>
        <button
          onClick={insert}
          className="px-5 py-2 rounded-full text-white font-semibold shadow-md transition 
                     bg-gradient-to-r from-emerald-400 to-sky-400 hover:shadow-xl hover:scale-105"
        >
          Insertar
        </button>
        <button
          onClick={search}
          className="px-5 py-2 rounded-full text-white font-semibold shadow-md transition 
                     bg-gradient-to-r from-fuchsia-400 to-indigo-400 hover:shadow-xl hover:scale-105"
        >
          Buscar
        </button>
        <button
          onClick={remove}
          className="px-5 py-2 rounded-full text-white font-semibold shadow-md transition 
                     bg-gradient-to-r from-rose-400 to-pink-500 hover:shadow-xl hover:scale-105"
        >
          Eliminar
        </button>
      </div>

      {/* Recorridos */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-6">
        <TraversalBox title="In-Order" items={traversals.inOrder} />
        <TraversalBox title="Pre-Order" items={traversals.preOrder} />
        <TraversalBox title="Post-Order" items={traversals.postOrder} />
      </div>

      {/* arbol */}
      <div className="w-full flex justify-center">
        <div className="relative w-full max-w-4xl">
          <svg
            viewBox={`0 0 ${layout.width} ${layout.height}`}
            className="w-full h-[360px] md:h-[420px] lg:h-[480px]"
          >
            {/* gradientes para nodos */}
            <defs>
              {/* nodo normal */}
              <linearGradient id="nodeGrad" x1="0" x2="1" y1="0" y2="1">
                <stop offset="0%" stopColor="#fecdd3" /> {/* rose-200 */}
                <stop offset="100%" stopColor="#bae6fd" /> {/* sky-200 */}
              </linearGradient>
              {/* nodo activo  */}
              <linearGradient id="nodeGradActive" x1="0" x2="1" y1="0" y2="1">
                <stop offset="0%" stopColor="#f9a8d4" /> {/* pink-300 */}
                <stop offset="100%" stopColor="#93c5fd" /> {/* blue-300 */}
              </linearGradient>
              {/* nodo resaltado por busqueda */}
              <linearGradient id="nodeGradHighlight" x1="0" x2="1" y1="0" y2="1">
                <stop offset="0%" stopColor="#f5d0fe" /> {/* fuchsia-200 */}
                <stop offset="100%" stopColor="#ddd6fe" /> {/* violet-200 */}
              </linearGradient>
            </defs>

            {/* las rayas */}
            <g stroke="rgba(100,100,100,0.35)" strokeWidth="2">
              {layout.edges.map((e, i) => {
                const a = nodeMap.get(e.from);
                const b = nodeMap.get(e.to);
                if (!a || !b) return null;
                return <line key={i} x1={a.x} y1={a.y} x2={b.x} y2={b.y} />;
              })}
            </g>

            {/* nodos */}
            {layout.nodes.map((n, i) => (
              <g key={i} transform={`translate(${n.x}, ${n.y})`}>
                <circle
                  r={24}
                  fill={
                    n.value === highlight
                      ? "url(#nodeGradHighlight)"
                      : n.value === actionNode
                      ? "url(#nodeGradActive)"
                      : "url(#nodeGrad)"
                  }
                  stroke="rgba(255,255,255,0.7)"
                  strokeWidth="1.5"
                  style={{
                    filter: "drop-shadow(0 4px 10px rgba(0,0,0,0.12))",
                    transform: n.value === actionNode ? "scale(1.1)" : "scale(1.0)",
                    transition: "transform 250ms ease",
                  }}
                />
                <text
                  textAnchor="middle"
                  dominantBaseline="middle"
                  className="fill-slate-800 font-semibold"
                >
                  {n.value}
                </text>
              </g>
            ))}
          </svg>
        </div>
      </div>
    </div>
  );
}


function TraversalBox({ title, items }) {
  return (
    <div className="border rounded-xl p-3">
      <div className="font-semibold mb-2">{title}</div>
      <div className="flex flex-wrap gap-2">
        {items.map((v, i) => (
          <span key={i} className="px-3 py-1 rounded-full bg-gray-100 border text-sm">
            {v}
          </span>
        ))}
        {items.length === 0 && <span className="text-gray-400 text-sm">—</span>}
      </div>
    </div>
  );
}


function structuredCloneTree(node) {
  if (!node) return null;
  const n = new BSTNode(node.v);
  n.l = structuredCloneTree(node.l);
  n.r = structuredCloneTree(node.r);
  return n;
}

function inOrder(n, f) { if (!n) return; inOrder(n.l, f); f(n.v); inOrder(n.r, f); }
function preOrder(n, f) { if (!n) return; f(n.v); preOrder(n.l, f); preOrder(n.r, f); }
function postOrder(n, f) { if (!n) return; postOrder(n.l, f); postOrder(n.r, f); f(n.v); }

async function removeWithAnim(node, val, withAnim, setAction) {
  if (!node) return [null, false];
  await withAnim(async () => setAction(node.v));
  if (val < node.v) {
    const [nl, removed] = await removeWithAnim(node.l, val, withAnim, setAction);
    node.l = nl;
    return [node, removed];
  } else if (val > node.v) {
    const [nr, removed] = await removeWithAnim(node.r, val, withAnim, setAction);
    node.r = nr;
    return [node, removed];
  } else {
    // eliminar este
    if (!node.l) return [node.r, true];
    if (!node.r) return [node.l, true];
    // dos hijos minimo del subárbol derecho
    let minParent = node, min = node.r;
    while (min.l) {
      await withAnim(async () => setAction(min.v));
      minParent = min;
      min = min.l;
    }
    node.v = min.v;
    if (minParent.l === min) minParent.l = min.r; else minParent.r = min.r;
    return [node, true];
  }
}


function computeLayout(root) {
  const width = 820;  
  const gapY = 100;   
  const padY = 30;

  if (!root) return { nodes: [], edges: [], width, height: 160 };

  const nodes = [];
  const edges = [];
  const q = [{ n: root, level: 0, index: 0 }];
  let maxLevel = 0;

  while (q.length) {
    const { n, level, index } = q.shift();
    maxLevel = Math.max(maxLevel, level);

    const cols = 2 ** level;
    const x = ((index + 1) / (cols + 1)) * width;
    const y = padY + level * gapY;

    nodes.push({ ref: n, value: n.v, x, y });

    if (n.l) { q.push({ n: n.l, level: level + 1, index: index * 2 }); edges.push({ from: n, to: n.l }); }
    if (n.r) { q.push({ n: n.r, level: level + 1, index: index * 2 + 1 }); edges.push({ from: n, to: n.r }); }
  }

  return { nodes, edges, width, height: padY + (maxLevel + 1) * gapY };
}





