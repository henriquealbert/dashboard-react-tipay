import { Img } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

export default function ImageSlider() {
  const [current, setCurrent] = useState(0);

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  useEffect(() => {
    setCurrent(getRandomInt(0, 3));
  }, []);

  const data = [
    {
      src: '/images/slider/walpaper-1.png'
    },
    {
      src: '/images/slider/walpaper-2.png'
    },
    {
      src: '/images/slider/walpaper-3.png'
    },
    {
      src: '/images/slider/walpaper-4.png'
    }
  ];

  return (
    <>
      {data
        .filter((item, index) => index === current)
        .map((slide, index) => {
          return (
            <Img
              key={index}
              src={slide.src}
              alt="Mulher sorrindo e usando App Tipay"
              objectFit="cover"
              objectPosition="right top"
              w={{ base: '100%', lg: '50%', xl: '60%' }}
              h="100vh"
            />
          );
        })}
    </>
  );
}
