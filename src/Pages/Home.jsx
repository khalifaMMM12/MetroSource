import { Box, Button, Flex, Image } from "@chakra-ui/react";
import metroHome from "@/assets/metroHome.jpg";
import metroHome3 from "@/assets/slide3.jpeg";
import mad1 from "@/assets/mad1.jpg";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Home = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const autoplay = Autoplay({ delay: 3000, stopOnInteraction: false, stopOnMouseEnter: true });

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "center",
      skipSnaps: false,
      containScroll: "trimSnaps",
      dragFree: true,
      startIndex: 0,
      slidesToScroll: 1,
    },
    [autoplay]
  );

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi]);

  const images = [metroHome, mad1, metroHome3];

  return (
    <Flex
      flexDir="column"
      w="full"
      maxW="1200px"
      mx="auto"
      position="relative"
      overflow="hidden"
    >
      <Box ref={emblaRef} className="embla__viewport" overflow="hidden" w="full">
        <Flex className="embla__container">
          {images.map((img, index) => (
            <Box
              key={index}
              className={`embla__slide ${selectedIndex === index ? "is-selected" : ""}`}
            >
              <Image
                src={img}
                alt={`Slide ${index}`}
                objectFit="cover"
                rounded="xl"
                w="full"
                h={{ base: "60vh", md: "500px" }}
                sx={{
                  transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                  filter: selectedIndex === index ? 'brightness(1)' : 'brightness(0.7)',
                }}
              />
            </Box>
          ))}
        </Flex>
      </Box>

      {/* Pagination Dots */}
      <Flex justify="center" mt={3} gap={2}>
        {images.map((_, index) => (
          <Box
            key={index}
            w="10px"
            h="10px"
            bg={selectedIndex === index ? "blue.500" : "gray.300"}
            rounded="full"
            transition="all 0.3s"
          />
        ))}
      </Flex>

      {/* Left Button */}
      <Button
        position="absolute"
        top="50%"
        left="2"
        transform="translateY(-50%)"
        bg="rgba(0,0,0,0.5)"
        _hover={{ bg: "rgba(0,0,0,0.7)" }}
        rounded="full"
        zIndex={1}
        onClick={scrollPrev}
      >
        <FaArrowLeft color="white" />
      </Button>

      {/* Right Button */}
      <Button
        position="absolute"
        top="50%"
        right="2"
        transform="translateY(-50%)"
        bg="rgba(0,0,0,0.5)"
        _hover={{ bg: "rgba(0,0,0,0.7)" }}
        rounded="full"
        zIndex={1}
        onClick={scrollNext}
      >
        <FaArrowRight color="white" />
      </Button>
    </Flex>
  );
};

export default Home;
