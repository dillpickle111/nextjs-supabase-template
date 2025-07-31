"use client";

import { useEffect, useState } from "react";

export function TestFramer() {
  const [heroModule, setHeroModule] = useState<unknown>(null);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    import("../../framer/hero")
      .then((module) => {
        console.log("Hero module:", module);
        setHeroModule(module);
      })
      .catch((err) => {
        console.error("Error importing hero:", err);
        setError(err.message);
      });
  }, []);

  if (error) {
    return (
      <div className="p-8">
        <h2 className="text-red-500">Error: {error}</h2>
      </div>
    );
  }

  if (!heroModule) {
    return (
      <div className="p-8">
        <h2>Loading module...</h2>
      </div>
    );
  }

  return (
    <div className="p-8">
      <h2>Module loaded successfully!</h2>
      <pre className="bg-gray-100 p-4 rounded mt-4 text-sm overflow-auto">
        {JSON.stringify(Object.keys(heroModule), null, 2)}
      </pre>
    </div>
  );
} 