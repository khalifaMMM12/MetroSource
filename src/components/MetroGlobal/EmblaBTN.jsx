/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { Button } from "@chakra-ui/react";
import { useCallback, useEffect, useState } from "react";
import { IconButton } from "@chakra-ui/react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
export const usePrevNextButtons = (emblaApi) => {
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

  return {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  };
};

export const PrevButton = ({ onClick, disabled }) => (
  <IconButton
    aria-label="Previous slide"
    icon={<FaChevronLeft />}
    onClick={onClick}
    isDisabled={disabled}
    variant="solid"
    colorScheme="whiteAlpha"
    size="sm"
    bg="white"
    color="gray.800"
    _hover={{ bg: "gray.200" }}
    _disabled={{ opacity: 0.4, cursor: "not-allowed" }}
  />
);

export const NextButton = ({ onClick, disabled }) => (
  <IconButton
    aria-label="Next slide"
    icon={<FaChevronRight />}
    onClick={onClick}
    isDisabled={disabled}
    variant="solid"
    colorScheme="whiteAlpha"
    size="sm"
    bg="white"
    color="gray.800"
    _hover={{ bg: "gray.200" }}
    _disabled={{ opacity: 0.4, cursor: "not-allowed" }}
  />
);
