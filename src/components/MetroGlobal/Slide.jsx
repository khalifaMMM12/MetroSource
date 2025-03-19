/* eslint-disable react/prop-types */
import { PrevButton, NextButton } from "@/components/MetroGlobal/EmblaBTN";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";

import pic1 from "@/assets/pic2.png";
import "../../App.css";
const EmblaCarousel = ({ slides, options }) => {
  const usePrevNextButtons = (emblaApi) => {
    const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
    const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

    const onPrevButtonClick = useCallback(() => {
      if (!emblaApi) return;
      emblaApi.scrollPrev();
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

    return {
      prevBtnDisabled,
      nextBtnDisabled,
      onPrevButtonClick,
      onNextButtonClick,
    };
  };
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const onNextButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
  }, [emblaApi]);
  const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick } =
    usePrevNextButtons(emblaApi);

  return (
    <Box w={"100%"} overflow={"hidden"} className='embla2'>
      <Box className='embla__viewport2' ref={emblaRef}>
        <Flex className='embla__container2'>
          {slides.map((index) => (
            <Flex
              bg={"#ffffff05"}
              flexDirection={"column"}
              justifyContent={"space-between"}
              className='embla__slide2'
              maxW={["60% ", "60%", "55%", "35%"]}
              p={4}
              key={index}>
              <Flex w={"100%"} gap={2} flexDirection={"column"}>
                <Text color={"#ffffff"} fontSize={[10, 11, 13, 14, 14]}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in.
                </Text>
                <Flex
                  w={"full"}
                  justifyContent={"flex-start"}
                  gap={1}
                  alignItems={"center"}>
                  <Text color={"#EF7826"} fontSize={14}>
                    Look at project
                  </Text>
                  <FaArrowRight color={"#EF7826"} size={14} />
                </Flex>
              </Flex>
              <Flex
                w={"100%"}
                gap={1}
                justifyContent={"flex-start"}
                alignItems={"center"}>
                <Image src={pic1} fit={"cover"} w={51} h={51} />
                <Flex w={"100%"} p={4} flexDirection={"column"}>
                  <Text color={"#ffffff"} fontSize={[11, 13, 16, 18]}>
                    John Femi
                  </Text>
                  <Text color={"#ffffff50"} fontSize={[9, 9, 12, 12]}>
                    Director, Jabi Hospital.
                  </Text>
                </Flex>
              </Flex>
            </Flex>
          ))}
        </Flex>
      </Box>

      <Box
        gap={2}
        top={5}
        right={5}
        pos={"absolute"}
        className='embla__controls'>
        <Flex gap={3} className='embla__buttons'>
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </Flex>
      </Box>
    </Box>
  );
};

export default EmblaCarousel;
