import HeroIntro from "@/components/MetroGlobal/HeroIntro";
import Navbar from "@/components/MetroGlobal/Navbar";
import { Box, Flex, Image, SimpleGrid, Text } from "@chakra-ui/react";
import build from "@/assets/build.jpeg";
import Footer from "@/components/MetroGlobal/Footer";
import { FaPencilRuler } from "react-icons/fa";
import { FaHelmetSafety } from "react-icons/fa6";
import service2 from "@/assets/service1a.png";
import service3 from "@/assets/service2a.png";
import service2a from "@/assets/service2.png";
import service3a from "@/assets/service3.png";

const Services = () => {
  const serviceOffer = [
    {
      id: 1,
      icon: <FaHelmetSafety size={24} color='#121212' />,
      img: service2,
      img2: service2a,
      title: "Engineering Services",
      subTitle:
        "Our skilled engineers provide diverse services, prioritizing quality construction with specialized solutions. Using renowned ‘Green technology,’ we ensure safe, efficient, and cost-effective outcomes.",
    },
    {
      id: 2,
      icon: <FaPencilRuler size={24} color='#121212' />,
      img: service3,
      img2: service3a,
      title: "Architectural and engineering consultancy services",
      subTitle:
        "We specialize in providing innovative and high-quality architectural designs for your construction projects. Our team of experienced architects and designers are dedicated to delivering exceptional services that meet and exceed our clients expectations.",
    },
  ];
  return (
    <Flex w={"100%"} flexDirection={"column"} bg={"#f4f4f4"}>
      <Navbar />
      <HeroIntro img={build} text={"Our Services"} />
      <SimpleGrid
        width={"100%"}
        columns={1}
        gap='10px'
        px={4}
        alignItems={"center"}>
        {serviceOffer.map((item) => (
          <Box
            display={"flex"}
            key={item.id}
            width={"100%"}
            p={1}
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
            <Flex
              flexDirection={{
                smDown: "column",
                smToLg: "column",
                lgTo2xl: "row",
              }}
              justifyContent={"flex-start"}
              alignItems={"center"}>
              <Image
                width={{
                  smDown: "100%",
                  smToLg: "100%",
                }}
                objectFit={"cover"}
                src={item.img2}
                height={{
                  smDown: "100%",
                  smToLg: "100%",
                  lgTo2xl: "37vh",
                }}
                alt={item.title}
              />
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
            </Flex>
          </Box>
        ))}
      </SimpleGrid>
      <Footer />
    </Flex>
  );
};

export default Services;
