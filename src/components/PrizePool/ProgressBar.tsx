import { useEffect, useRef } from 'react';

export default function ProgressBar({ progress }: { progress: number }) {
  const progressRef = useRef(null);

  useEffect(() => {
    progressRef.current.style.width = `${progress}%`;
  }, [progress]);

  return (
    <div className="w-full bg-gray-200 rounded-full h-1.5 mb-4 dark:bg-gray-700">
      <div
        ref={progressRef}
        className="bg-[#FF2d74] h-1.5 rounded-full dark:bg-[#FF2d74]"
      />
    </div>
  );
}
