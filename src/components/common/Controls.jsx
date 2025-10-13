import React from "react";

export default function Controls({
  isPlaying,
  isPaused,
  speed,
  onPlay,
  onPause,
  onResume,
  onStep,
  onSpeedChange,
}) {
  return (
    <div className="flex items-center justify-center gap-3 mb-6">
      {!isPlaying ? (
        <button
          onClick={onPlay}
          className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-colors"
        >
          ▶ Play
        </button>
      ) : (
        <>
          {!isPaused ? (
            <button
              onClick={onPause}
              className="px-4 py-2 rounded-lg bg-yellow-500 hover:bg-yellow-600 text-white font-semibold transition-colors"
            >
              ❚❚ Pause
            </button>
          ) : (
            <button
              onClick={onResume}
              className="px-4 py-2 rounded-lg bg-green-600 hover:bg-green-700 text-white font-semibold transition-colors"
            >
              ► Resume
            </button>
          )}
        </>
      )}

      <button
        onClick={onStep}
        className="px-4 py-2 rounded-lg bg-purple-600 hover:bg-purple-700 text-white font-semibold transition-colors"
        title="Avanza un paso"
      >
        ▷ Step
      </button>

      <div className="flex items-center gap-2 ml-4">
        <span className="text-sm text-gray-600">Velocidad:</span>
        <input
          type="range"
          min="200"
          max="1200"
          step="100"
          value={speed}
          onChange={(e) => onSpeedChange(Number(e.target.value))}
          className="w-40"
        />
        <span className="text-sm text-gray-700">{speed} ms</span>
      </div>
    </div>
  );
}
