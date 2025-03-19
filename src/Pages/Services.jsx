import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";

import { FaHelmetSafety, FaArrowRight } from "react-icons/fa6";

import { FaPencilRuler } from "react-icons/fa";

import service2 from "@/assets/service2.png";
import service3 from "@/assets/service3.png";

const Services = () => {
  const serviceOffer = [
    {
      id: 1,
      icon: <FaHelmetSafety size={24} color='#121212' />,
      img: service2,
      title: "Engineering Services",
      subTitle:
        "Our skilled engineers provide diverse services, prioritizing quality construction with specialized solutions. Using renowned ‘Green technology,’ we ensure safe, efficient, and cost-effective outcomes.",
    },
    {
      id: 2,
      icon: <FaPencilRuler size={24} color='#121212' />,
      img: service3,
      title: "Architectural and engineering consultancy services",
      subTitle:
        "We specialize in providing innovative and high-quality architectural designs for your construction projects. Our team of experienced architects and designers are dedicated to delivering exceptional services that meet and exceed our clients expectations.",
    },
  ];
  return (
    <Flex
      data-state='open'
      animationDuration='slowest'
      animationStyle={{ _open: "slide-fade-in", _closed: "slide-fade-out" }}
      w={"100%"}
      height={"full"}
      flexDirection={"column"}
      alignItems={"center"}>
      <Flex
        flexDirection={"column"}
        alignItems={"center"}
        gap={4}
        py={8}
        px={["1rem", "1rem", "10rem", "20rem"]}>
        <Text
          color={"#121212"}
          textAlign={"center"}
          fontSize={{ smDown: 25, smToMd: 30, mdTo2xl: 45 }}
          fontWeight={"medium"}>
          Our Services
        </Text>
        <Text
          color={"#121212"}
          fontSize={16}
          fontWeight={"normal"}
          textAlign={"center"}>
          Metrosource LTD operates with the highest standards of
          professionalism, delivering a wide range of comprehensive services
          designed to meet diverse client needs effectively.
        </Text>
      </Flex>

      <Flex
        width={"100%"}
        px={5}
        gap={5}
        flexWrap={"wrap"}
        justifyContent={"center"}
        alignItems={"flex-start"}>
        {serviceOffer.map((item) => (
          <Box
            key={item.id}
            maxW='sm'
            p={2}
            className='cardBox'
            color={"#121212"}
            background='#f4f4f4'
            _hover={{
              background: "#ef7826",
              transition: "0.4s ease-in-out",
              color: "#ffffff !important",
              borderRadius: "2xl",
            }} // Smooth transition
          >
            <Box>
              <Flex position={"relative"}>
                <Image src={item.img} alt={item.title} />
                <Flex position={"absolute"} bottom={4} gap={1} right={4}>
                  <Button
                    bg={"#ef7826"}
                    className='hover-BTN'
                    color={"#ffffff"}
                    px={2}
                    rounded={"full"}>
                    Learn More
                  </Button>

                  <Button bg={"#ffffff"} className='hover-BTN' rounded={"full"}>
                    <FaArrowRight color={"#ef7826"} size={13} />
                  </Button>
                </Flex>
              </Flex>
              <Flex direction='column' gap={2} p={2}>
                <Flex
                  w='full'
                  justifyContent='flex-start'
                  alignItems='flex-start'>
                  {item.icon}
                </Flex>
                <Text
                  fontSize={{ smToXl: 18, xlTo2xl: 25 }}
                  fontWeight='medium'>
                  {item.title}
                </Text>
                <Text
                  fontSize={{ smToXl: 13, xlTo2xl: 16 }}
                  fontWeight='normal'>
                  {item.subTitle}
                </Text>
              </Flex>
            </Box>
          </Box>
        ))}
      </Flex>
    </Flex>
  );
};

export default Services;
