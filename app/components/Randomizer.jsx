"use client";

import { useRef } from "react";

export default function Randomizer() {
  let r1Ref = useRef(null);
  let r2Ref = useRef(null);

  const r1Items = [
    "healthcare",
    "education",
    "entertainment",
    "Women empowerment",
    "Accessibility",
    "AI",
    "Cyber Security",
    "agriculture",
    "blockchain",
    "logistics",
    "Urban Planning",
  ];
  const r2Items = [
    "pets",
    "Graphics/ Visualisation",
    "parking",
    "fintech",
    "Space exploration",
    "Social Media",
    "Gaming",
  ];

  function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
  }

  async function randomize() {
    let i = 1000; // This variable varies the speed of the animation
    let j = 1;

    const animate = async (timestamp) => {
      let r1Random = getRandomElement(r1Items);
      let r2Random = getRandomElement(r2Items);
      r1Ref.current.innerText = r1Random;
      r2Ref.current.innerText = r2Random;

      j = j * 1.2;

      if (j >= i) {
        return;
      } else {
        await new Promise((r) => setTimeout(r, j));
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex justify-center items-center">
        <div
          className="text-white text-xl border-b border-b-white m-5"
          ref={r1Ref}
        >
          Your Next Big
        </div>
        <div
          className="text-white text-xl border-b border-b-white m-5"
          ref={r2Ref}
        >
          IDEA!
        </div>
      </div>
      <button
        onClick={randomize}
        className="border border-white p-2 rounded-md"
      >
        Find Your Idea!
      </button>
    </div>
  );
}
