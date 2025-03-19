import { Box, Button, Flex, Image } from "@chakra-ui/react";
import metroHome from "@/assets/metroHome.jpg";
import metroHome2 from "@/assets/slide2.png";
import metroHome3 from "@/assets/slide3.png";
import { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Home = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);
  return (
    <Flex
      flex={1}
      position={"relative"}
      flexDirection={"column"}
      w={"full"}
      height={{
        smDown: "100vh",
        smToLg: "100vh",
        lgTo2xl: 780,
      }}
      p={4}
      bg={"#f4f4f4"}>
      <Box className='embla' rounded={"2xl"} bg={"#fafafa"}>
        <Box className='embla__viewport' rounded={"2xl"} ref={emblaRef}>
          <Flex
            w={"full"}
            height={{
              smDown: "80vh",
              smToMd: "80vh",
              MdTo2xl: "full",
            }}
            className='embla__container'>
            <Box
              bg={"black"}
              className='embla__slide'
              w={"full"}
              rounded={"2xl"}>
              <Image
                src={metroHome}
                loading='lazy'
                rounded={"2xl"}
                w={"full"}
                height={"100%"}
              />
            </Box>
            <Box bg={"blue"} className='embla__slide'>
              <Image
                src={metroHome2}
                loading='lazy'
                rounded={"2xl"}
                fit={"contain"}
                w={"full"}
                height={"100%"}
              />
            </Box>
            <Box bg={"green"} className='embla__slide'>
              <Image
                src={metroHome3}
                loading='lazy'
                rounded={"2xl"}
                w={"full"}
                height={"100%"}
              />
            </Box>
          </Flex>
        </Box>
      </Box>
      <Flex
        w={"full"}
        gap={20}
        justify={"flex-end"}
        pos={"absolute"}
        right={10}
        bottom={10}>
        <Button
          bg={"transparent"}
          rounded={"full"}
          className='embla__prev'
          onClick={scrollPrev}>
          <FaArrowLeft color='#ffffff' />
        </Button>
        <Button
          bg={"transparent"}
          rounded={"full"}
          className='embla__next'
          onClick={scrollNext}>
          <FaArrowRight color='#ffffff' />
        </Button>
      </Flex>
    </Flex>
  );
};

export default Home;
