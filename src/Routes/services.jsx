import HeroIntro from "@/components/MetroGlobal/HeroIntro";
import Navbar from "@/components/MetroGlobal/Navbar";
import { Flex, Image, SimpleGrid, Text } from "@chakra-ui/react";
import build from "@/assets/build.png";
import Footer from "@/components/MetroGlobal/Footer";
import { FaPencilRuler } from "react-icons/fa";
import { FaHelmetSafety } from "react-icons/fa6";
import { LuConstruction } from "react-icons/lu";
import service1 from "@/assets/service1.svg";
import service2 from "@/assets/service2.svg";
import service3 from "@/assets/service3.svg";

const Services = () => {
  const serviceOffer = [
    {
      id: 1,
      icon: <LuConstruction size={24} color='#121212' />,
      img: service1,
      title: "Building Construction",
      subTitle:
        "We offer end-to-end construction services, transforming designs into reality with state-of-the-art equipment and best practices. Our expertise spans residential, industrial, medical, and commercial projects.",
    },
    {
      id: 2,
      icon: <FaHelmetSafety size={24} color='#121212' />,
      img: service2,
      title: "Engineering Services",
      subTitle:
        "Our skilled engineers provide diverse services, prioritizing quality construction with specialized solutions. Using renowned ‘Green technology,’ we ensure safe, efficient, and cost-effective outcomes.",
    },
    {
      id: 3,
      icon: <FaPencilRuler size={24} color='#121212' />,
      img: service3,
      title: "Architectural and engineering consultancy services",
      subTitle:
        "We specialize in providing innovative and high-quality architectural designs for your construction projects. Our team of experienced architects and designers are dedicated to delivering exceptional services that meet and exceed our clients expectations.",
    },
  ];
  return (
    <Flex w={"100%"} flexDirection={"column"} bg={"#f4f4f4"}>
      <Navbar />
      <HeroIntro img={build} text={"Our Services"} />
      <SimpleGrid columns={1} gap='10px' px={4}>
        {serviceOffer.map((item) => (
          <Flex
            key={item.id}
            width={"100%"}
            p={1}
            background='#f4f4f4'
            _hover={{ background: "#ef7826", transition: "0.3s ease-in-out" }} // Smooth transition
          >
            <Flex
              flexDirection={{
                smDown: "column",
                smToLg: "column",
                lgTo2xl: "row",
              }}
              justifyContent={"flex-start"}
              alignItems={"center"}>
              <Image src={item.img} height={"70%"} alt={item.title} />
              <Flex direction='column' gap={2} p={2}>
                <Flex
                  w='full'
                  justifyContent='flex-start'
                  alignItems='flex-start'>
                  {item.icon}
                </Flex>
                <Text
                  color='#121212'
                  fontSize={{ smToXl: 18, xlTo2xl: 25 }}
                  fontWeight='medium'>
                  {item.title}
                </Text>
                <Text
                  fontSize={{ smToXl: 13, xlTo2xl: 16 }}
                  fontWeight='normal'
                  color='#121212'>
                  {item.subTitle}
                </Text>
              </Flex>
            </Flex>
          </Flex>
        ))}
      </SimpleGrid>
      <Footer />
    </Flex>
  );
};

export default Services;
