import HeroIntro from "@/components/MetroGlobal/HeroIntro";
import Navbar from "@/components/MetroGlobal/Navbar";
import { Box, Flex, Image, SimpleGrid, Text, Heading, Container } from "@chakra-ui/react";
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
      icon: <FaPencilRuler size={32} color='#ef7826' />,
      img: service3,
      img2: service3a,
      title: "Architectural and Engineering Consultancy Services",
      subTitle:
        "We specialize in providing innovative and high-quality architectural designs for your construction projects. Our team of experienced architects and designers are dedicated to delivering exceptional services that meet and exceed our clients expectations.",
    },
    {
      id: 2,
      icon: <FaHelmetSafety size={32} color='#ef7826' />,
      img: service2,
      img2: service2a,
      title: "Engineering Services",
      subTitle:
        "Our skilled engineers provide diverse services, prioritizing quality construction with specialized solutions. Using renowned 'Green technology,' we ensure safe, efficient, and cost-effective outcomes.",
    },
  ];
  return (
    <Flex w={"100%"} flexDirection={"column"} bg={"#f4f4f4"}>
      <Navbar />
      <HeroIntro img={build} text={"Our Services"} />
      
      <Container 
        maxW="container.xl" 
        py={12} 
        px={12}
        display="flex"
        flexDirection="column"
        alignItems="center"
      >        
      <Heading 
          as="h2" 
          textAlign="center" 
          mb={10} 
          color="#121212"
          fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
        >
          What We Offer
        </Heading>
        
        <SimpleGrid
          width={"100%"}
          columns={{ base: 1, lg: 1 }}
          gap={8}
          alignItems={"center"}
          justifyItems="center"
          >
          {serviceOffer.map((item) => (
            <Box
              key={item.id}
              width={"100%"}
              className='serviceCard'
              borderRadius="xl"
              boxShadow="md"
              overflow="hidden"
              border="1px solid #e0e0e0"
              transition="all 0.3s ease"
              _hover={{
                transform: "translateY(-5px)",
                boxShadow: "lg",
                borderColor: "#ef7826",
              }}
            >
              <Flex
                flexDirection={{
                  base: "column",
                  lg: "row",
                }}
                justifyContent={"flex-start"}
                alignItems={"stretch"}
              >
                <Image
                  width={{
                    base: "100%",
                    lg: "40%",
                  }}
                  objectFit={"cover"}
                  src={item.img2}
                  height={{
                    base: "250px",
                    lg: "auto",
                  }}
                  alt={item.title}
                />
                <Flex 
                  direction='column' 
                  gap={4} 
                  p={6}
                  flex="1"
                  bg="white"
                  justifyContent="center"
                >
                  <Flex
                    w='full'
                    justifyContent='flex-start'
                    alignItems='flex-start'
                    mb={2}
                  >
                    <Box 
                      p={3} 
                      borderRadius="md" 
                      bg="#FFF3E0"
                    >
                      {item.icon}
                    </Box>
                  </Flex>
                  <Text
                    fontSize={{ base: "xl", md: "2xl" }}
                    fontWeight='bold'
                    color="#121212"
                  >
                    {item.title}
                  </Text>
                  <Text
                    fontSize={{ base: "md", lg: "lg" }}
                    fontWeight='normal'
                    color="#555"
                    lineHeight="1.7"
                  >
                    {item.subTitle}
                  </Text>
                </Flex>
              </Flex>
            </Box>
          ))}
        </SimpleGrid>
      </Container>
      
      <Footer />
    </Flex>
  );
};

export default Services;