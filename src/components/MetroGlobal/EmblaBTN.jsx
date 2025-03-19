/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { Button } from "@chakra-ui/react";
import { useCallback, useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

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

export const PrevButton = (props) => {
  const { children, ...restProps } = props;

  return (
    <Button
      rounded={"full"}
      bg={"#EF7826"}
      color={"#ffffff"}
      className='embla__button embla__button--prev'
      type='button'
      {...restProps}>
      <FaArrowLeft size={14} color='#ffffff' />
      {children}
    </Button>
  );
};

export const NextButton = (props) => {
  const { children, ...restProps } = props;

  return (
    <Button
      rounded={"full"}
      bg={"#EF7826"}
      color={"#ffffff"}
      className='embla__button embla__button--next'
      type='button'
      {...restProps}>
      <FaArrowRight size={14} color='#ffffff' />

      {children}
    </Button>
  );
};
