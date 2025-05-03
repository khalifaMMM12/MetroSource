import { PrevButton, NextButton } from "@/components/MetroGlobal/EmblaBTN";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import pic1 from "@/assets/pic2.png";
import "../../App.css";

const EmblaCarousel = ({ slides, options }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const usePrevNextButtons = (emblaApi) => {
    const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
    const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

    const onPrevButtonClick = useCallback(() => {
      if (!emblaApi) return;
      emblaApi.scrollPrev();
    }, [emblaApi]);

    const onNextButtonClick = useCallback(() => {
      if (!emblaApi) return;
      emblaApi.scrollNext();
    }, [emblaApi]);

    const onSelect = useCallback((emblaApi) => {
      setPrevBtnDisabled(!emblaApi.canScrollPrev());
      setNextBtnDisabled(!emblaApi.canScrollNext());
    }, []);

    useEffect(() => {
      if (!emblaApi) return;
      onSelect(emblaApi);
      emblaApi.on("reInit", onSelect).on("select", onSelect);
    }, [emblaApi, onSelect]);

    return { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick };
  };

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <Box w="100%" overflow="hidden" position="relative" className="embla2">
      <Box className="embla__viewport2" ref={emblaRef}>
        <Flex className="embla__container2">
          {slides.map((index) => (
            <Flex
              key={index}
              direction="column"
              justify="space-between"
              bg="rgba(255,255,255,0.04)"
              backdropFilter="blur(10px)"
              border="1px solid rgba(255,255,255,0.1)"
              maxW={["90%", "70%", "55%", "35%"]}
              p={6}
              m={2}
              rounded="xl"
              className="embla__slide2"
            >
              {/* Top text */}
              <Flex direction="column" gap={4}>
                <Text color="whiteAlpha.900" fontSize={["sm", "sm", "md"]} lineHeight="1.6">
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua.”
                </Text>
                <Flex align="center" gap={2} cursor="pointer">
                  <Text color="orange.400" fontWeight="medium" fontSize="sm">
                    View Project
                  </Text>
                  <FaArrowRight color="#EF7826" size={12} />
                </Flex>
              </Flex>

              {/* Avatar & user */}
              <Flex mt={6} gap={4} align="center">
                <Image src={pic1} alt="author" boxSize="50px" rounded="full" />
                <Flex direction="column">
                  <Text color="white" fontWeight="semibold" fontSize="md">
                    John Femi
                  </Text>
                  <Text color="whiteAlpha.600" fontSize="sm">
                    Director, Jabi Hospital
                  </Text>
                </Flex>
              </Flex>
            </Flex>
          ))}
        </Flex>
      </Box>

      <Flex
        position="absolute"
        top={0}
        right={0}
        p={3}
        zIndex={10}
        gap={2}
        justifyContent="flex-end"
      >
        <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
        <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
      </Flex>
    </Box>
  );
};

export default EmblaCarousel;
