import { Box, Button, Flex, Image, HStack } from "@chakra-ui/react";
import metroHome from "@/assets/metroHome.jpg";
import metroHome3 from "@/assets/slide3.jpeg";
import mad1 from "@/assets/mad1.jpg";

import { useEffect, useCallback, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

const Home = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const autoplayPlugin = useCallback(
    Autoplay({ 
      delay: 5000,
      stopOnMouseEnter: true,
      stopOnInteraction: false
    }), 
    []
  );
  
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { 
      loop: true,
      skipSnaps: false,
      dragFree: false
    }, 
    [autoplayPlugin]
  );

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    
    emblaApi.on("select", onSelect);
    
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);
  
  const images = [metroHome, mad1, metroHome3];
  return (
    <Flex
      flex={1}
      position="relative"
      flexDirection="column"
      w="full"
      maxH="100vh"
      p={{ base: 2, md: 4 }}
      bg="#fafafa"
    >
      <Box className="embla" rounded="2xl" overflow="hidden" bg="#fafafa">
        <Box className="embla__viewport" ref={emblaRef}>
          <Flex className="embla__container">
            {images.map((src, index) => (
              <Box key={index} className="embla__slide">
                <Image
                  src={src}
                  loading="lazy"
                  fit="cover"
                  w="full"
                  h="100%"
                  objectFit="cover"
                />
              </Box>
            ))}
          </Flex>
        </Box>
      </Box>

      <Box
        onClick={scrollPrev}
        position="absolute"
        top="50%"
        left={4}
        transform="translateY(-50%)"
        zIndex={10}
        cursor="pointer"
        _hover={{ opacity: 0.8 }}
      >
        <FaAngleLeft color="#fafafa" size={45} />
      </Box>

      <Box
        onClick={scrollNext}
        position="absolute"
        top="50%"
        right={4}
        transform="translateY(-50%)"
        zIndex={10}
        cursor="pointer"
        _hover={{ opacity: 0.8 }}
      >
        <FaAngleRight color="#fafafa" size={45}/>
      </Box>

      <HStack
        spacing={3}
        position="absolute"
        bottom={6}
        left="50%"
        transform="translateX(-50%)"
        zIndex={10}
      >
        {images.map((_, index) => (
          <Box
            key={index}
            w={3}
            h={3}
            rounded="full"
            bg={selectedIndex === index ? "#EF7826" : "#fafafa"}
            transition="all 0.3s"
          />
        ))}
      </HStack>
    </Flex>
  );
};

export default Home;
