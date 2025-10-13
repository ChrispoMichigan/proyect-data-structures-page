// src/hooks/useAnimator.js
import { useCallback, useRef, useState } from "react";

export default function useAnimator(defaultSpeed = 600) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPaused, setIsPaused]   = useState(false);
  const [speed, setSpeed]         = useState(defaultSpeed);
  const gateRef                   = useRef(null);

  const sleep = (ms) => new Promise((res) => setTimeout(res, ms));

  const waitIfPaused = useCallback(async () => {
    while (isPaused) { await sleep(50); }
  }, [isPaused]);

  const waitStepGate = useCallback(async () => {
    if (!isPlaying && !isPaused) {
      await new Promise((resolve) => { gateRef.current = resolve; });
      gateRef.current = null;
    }
  }, [isPlaying, isPaused]);

  const play   = () => { setIsPlaying(true); setIsPaused(false); if (gateRef.current) gateRef.current(); };
  const pause  = () => setIsPaused(true);
  const resume = () => setIsPaused(false);
  const stepOnce = () => { setIsPlaying(false); setIsPaused(false); if (gateRef.current) gateRef.current(); };
  const stop = () => { setIsPlaying(false); setIsPaused(false); if (gateRef.current) gateRef.current(); };

  const withAnim = useCallback(async (fn) => {
    await waitIfPaused();
    await waitStepGate();
    const r = await fn();
    await sleep(speed);
    return r;
  }, [speed, waitIfPaused, waitStepGate]);

  return { isPlaying, isPaused, speed, setSpeed, play, pause, resume, stepOnce, stop, withAnim };
}


