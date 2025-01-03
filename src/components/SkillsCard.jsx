import { useState, useEffect } from "react";

function SkillCard() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTablet, setIsTablet] = useState(false);
  const [isLaptop, setIsLaptop] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth;
      setIsTablet(width >= 768);
      setIsLaptop(width >= 1024);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const cards = [
    <li className="text-neutral bg-primary h-5/6 max-w-72 m-auto tablet:h-4/6 tablet:max-w-96 laptop:h-5/6">
      <h3 className="text-2xl font-bold text-center py-5">FRONTEND</h3>
      <figure className="grid grid-cols-2 items-center">
        <img src="html-logo.svg" alt="HTML LOGO" className="max-w-16 justify-self-center tablet:max-w-20" />
        <figcaption className="font-bold text-lg">HTML</figcaption>
      </figure>
      <figure className="grid grid-cols-2 items-center">
        <img src="css-logo.svg" alt="CSS LOGO" className="max-w-16 justify-self-center tablet:max-w-20" />
        <figcaption className="font-bold text-lg">CSS</figcaption>
      </figure>
      <figure className="grid grid-cols-2 items-center">
        <img src="javascript-logo.svg" alt="JAVASCRIPT LOGO" className="max-w-16 justify-self-center" />
        <figcaption className="font-bold text-lg">JAVASCRIPT</figcaption>
      </figure>
      <figure className="grid grid-cols-2 items-center">
        <img src="react-logo.svg" alt="REACT LOGO" className="max-w-16 justify-self-center tablet:max-w-20" />
        <figcaption className="font-bold text-lg">REACT</figcaption>
      </figure>
      <figure className="grid grid-cols-2 items-center">
        <img src="tailwind-logo.svg" alt="TAILWIND LOGO" className="max-w-16 justify-self-center tablet:max-w-20" />
        <figcaption className="font-bold text-lg">TAILWIND</figcaption>
      </figure>
    </li>,
    <li className="text-neutral bg-primary h-5/6 max-w-72 m-auto tablet:h-4/6 tablet:max-w-96 laptop:h-5/6">
      <h3 className="text-2xl font-bold text-center py-5">BACKEND</h3>
      <figure className="grid grid-cols-2 items-center">
        <img src="node-logo.svg" alt="NODE JS LOGO" className="max-w-16 justify-self-center tablet:max-w-20" />
        <figcaption className="font-bold text-lg">NODE</figcaption>
      </figure>
      <figure className="grid grid-cols-2 items-center">
        <img src="python-logo.svg" alt="PYTHON LOGO" className="max-w-16 justify-self-center tablet:max-w-20" />
        <figcaption className="font-bold text-lg">PYTHON</figcaption>
      </figure>
    </li>,
    <li className="text-neutral bg-primary h-5/6 max-w-72 m-auto tablet:h-4/6 tablet:max-w-96 laptop:h-5/6">
      <h3 className="text-2xl font-bold text-center py-5">TOOLS</h3>
      <figure className="grid grid-cols-2 items-center">
        <img src="figma-logo.svg" alt="FIGMA LOGO" className="max-w-16 justify-self-center tablet:max-w-20" />
        <figcaption className="font-bold text-lg">FIGMA</figcaption>
      </figure>
      <figure className="grid grid-cols-2 items-center">
        <img src="framer-logo.svg" alt="FRAMER LOGO" className="max-w-16 justify-self-center tablet:max-w-20" />
        <figcaption className="font-bold text-lg">FRAMER</figcaption>
      </figure>
      <figure className="grid grid-cols-2 items-center">
        <img src="google-sheets-logo.svg" alt="GOOGLE SHEET LOGO" className="max-w-16 justify-self-center tablet:max-w-20" />
        <figcaption className="font-bold text-lg">GOOGLE SHEET</figcaption>
      </figure>
    </li>,
  ];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex === 0) {
        if (isTablet) return cards.length - 1;
        return cards.length - 1;
      }
      return prevIndex - 1;
    });
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => {
      if (isTablet && prevIndex === cards.length - 1) return 0;
      if (prevIndex === cards.length - 1) return 0;
      return prevIndex + 1;
    });
  };

  return (
    <>
      {!isLaptop && (
        <button
          id="prev"
          onClick={handlePrev}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-primary text-neutral p-2 rounded-full z-10"
        >
          &#8249;
        </button>
      )}
      <ul className="grow flex justify-center relative overflow-hidden w-4/5 m-auto tablet:justify-normal">
        <div 
          className="flex transition-transform duration-500 tablet:w-3/4 laptop:w-full" 
          style={{ transform: isLaptop ? 'none' : `translateX(-${currentIndex * 100}%)` }}
        >
          {cards.map((card, index) => (
            <div key={index} className="flex-shrink-0 w-full laptop:w-1/3">
              {card}
            </div>
          ))}
        </div>
      </ul>
      {!isLaptop && (
        <button
          id="next"
          onClick={handleNext}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-primary text-neutral p-2 rounded-full z-10"
        >
          &#8250;
        </button>
      )}
    </>
  );
}

export default SkillCard;
