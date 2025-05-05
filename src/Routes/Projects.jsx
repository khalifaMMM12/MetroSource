import HeroIntro from "@/components/MetroGlobal/HeroIntro";
import Navbar from "@/components/MetroGlobal/Navbar";
import {
  Box,
  CloseButton,
  Container,
  Dialog,
  Flex,
  Heading,
  Image,
  Portal,
  SimpleGrid,
  Text,
  Badge,
  useBreakpointValue,
} from "@chakra-ui/react";
import build from "@/assets/build2.jpeg";
import Footer from "@/components/MetroGlobal/Footer";
import { Carousel } from "@mantine/carousel";
import "@mantine/carousel/styles.css";
import { FaArrowRight } from "react-icons/fa";
import fm1 from "@/assets/fmc.jpeg";
import fm2 from "@/assets/fmc2.jpg";
import fm3 from "@/assets/fmc3.jpg";
import fm4 from "@/assets/fmc4.jpg";
import fm5 from "@/assets/fmc5.jpg";
import fm6 from "@/assets/fmc6.jpg";

import jaha1 from "@/assets/jahi1.jpg";
import jaha2 from "@/assets/jahi2.jpg";
import jaha3 from "@/assets/jahi3.jpg";
import jaha4 from "@/assets/jahi4.jpg";
import jaha5 from "@/assets/jahi5.jpg";
import jaha6 from "@/assets/jahi6.jpg";
import jaha7 from "@/assets/jahi7.jpg";
import jaha8 from "@/assets/jahi8.jpg";
import mad1 from "@/assets/DBN1.jpg";
import mad2 from "@/assets/DBN0.jpeg";
import mad3 from "@/assets/01.jpeg";
import mad4 from "@/assets/02.jpeg";
import mad6 from "@/assets/03.jpeg";
import mad7 from "@/assets/04.jpeg";
import niss1 from "@/assets/niss1.jpeg";
import niss2 from "@/assets/niss2.jpg";
import niss3 from "@/assets/niss3.jpeg";
import niss4 from "@/assets/niss4.jpg";
import niss5 from "@/assets/niss5.jpg";

const Projects = () => {
  const carouselHeight = useBreakpointValue({ base: 350, md: 500, lg: 600 });
  
  const projectOffer = [
    {
      id: 1,
      img: jaha5,
      title: "Jahi Residential Complex",
      category: "Residential",
      description: "Premium residential development featuring modern architectural design and high-end amenities.",
      gallery: [
        { id: 1, img: jaha5 },
        { id: 2, img: jaha6 },
        { id: 3, img: jaha3 },
        { id: 4, img: jaha4 },
        { id: 5, img: jaha2 },
        { id: 6, img: jaha1 },
        { id: 7, img: jaha7 },
        { id: 8, img: jaha8 },
      ],
    },
    {
      id: 2,
      img: fm2,
      title: "FMC Commercial Center",
      category: "Commercial",
      description: "State-of-the-art commercial center designed for optimal business operations and client comfort.",
      gallery: [
        { id: 1, img: fm1 },
        { id: 2, img: fm2 },
        { id: 3, img: fm3 },
        { id: 4, img: fm4 },
        { id: 5, img: fm5 },
        { id: 6, img: fm6 },
      ],
    },
    {
      id: 3,
      img: mad2,
      title: "DBN Project",
      category: "Corporate",
      description: "Modern corporate building with innovative sustainable features and flexible workspace solutions.",
      gallery: [
        { id: 1, img: mad1 },
        { id: 2, img: mad3 },
        { id: 4, img: mad2 },
        { id: 5, img: mad4 },
        { id: 6, img: mad6 },
        { id: 7, img: mad7 },
      ],
    },
    {
      id: 4,
      img: niss2,
      title: "Nisa International Medical Center",
      category: "Healthcare",
      description: "Cutting-edge medical facility designed to provide world-class healthcare services in a healing environment.",
      gallery: [
        { id: 1, img: niss1 },
        { id: 2, img: niss2 },
        { id: 3, img: niss3 },
        { id: 4, img: niss4 },
        { id: 5, img: niss5 },
      ],
    },
  ];
  
  return (
    <Flex w="100%" flexDirection="column" bg="#f8f9fa">
      <Navbar />
      <HeroIntro img={build} text="Our Portfolio" />
      
      <Container maxW="container.xl" py={12} px={[4, 6, 8]}>
        <Flex 
          direction="column" 
          align="center"    
          maxW="1400px"
          mx="auto"
        >
        <Heading 
          as="h2" 
          textAlign="center" 
          mb={8} 
          color="#121212"
          fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
        >
          Recent Projects
        </Heading>
        
        <Text 
          textAlign="center" 
          mb={12} 
          color="#555"
          maxW="800px"
          mx="auto"
          fontSize={{ base: "md", md: "lg" }}
        >
          Explore our portfolio of successful projects across various sectors, showcasing our commitment to excellence in design and construction.
        </Text>
        
        <SimpleGrid 
          columns={{ base: 1, md: 2, lg: 3 }} 
          spacing={16}
          px={[6, 8, 10]}          
          py={8}                  
          justifyItems="center"
          alignItems="center"
          mx="auto"
          w="full"
          maxW="1400px" 
        >
          {projectOffer.map((item) => (
            <Box
              key={item.id}
              borderRadius="xl"
              overflow="hidden"
              boxShadow="lg"
              bg="white"
              transition="all 0.3s ease"
              maxW="380px"        
              w="full"      
              mx="auto"    
              mb={5}   
              _hover={{
                transform: "translateY(-8px)",
                boxShadow: "xl",
              }}
            >
              <Dialog.Root
                size="full"
                placement="center"
                motionPreset="scale"
              >
                <Dialog.Trigger>
                  <Box position="relative">
                    <Image
                      width="100%"
                      height="300px"
                      objectFit="cover"
                      src={item.img}
                      transition="all 0.5s ease"
                      _hover={{
                        transform: "scale(1.05)",
                      }}
                    />
                    <Box
                      position="absolute"
                      top="0"
                      left="0"
                      right="0"
                      bottom="0"
                      bg="blackAlpha.400"
                      transition="all 0.3s ease"
                      opacity="0"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      _hover={{ opacity: 1 }}
                    >
                      <Flex
                        align="center"
                        bg="whiteAlpha.800"
                        py={2}
                        px={4}
                        borderRadius="md"
                      >
                        <Text fontWeight="medium" color="#121212" mr={2}>
                          View Gallery
                        </Text>
                        <FaArrowRight size={14} />
                      </Flex>
                    </Box>
                  </Box>
                </Dialog.Trigger>
                
                <Box p={5}>
                  <Badge 
                    colorScheme="orange" 
                    mb={2}
                  >
                    {item.category}
                  </Badge>
                  <Heading 
                    as="h3" 
                    size="md" 
                    mb={2}
                    color="#121212"
                  >
                    {item.title}
                  </Heading>
                  <Text 
                    color="#555" 
                    fontSize="sm"
                    noOfLines={2}
                  >
                    {item.description}
                  </Text>
                </Box>
                
                <Portal>
                  <Dialog.Backdrop bg="blackAlpha.800" backdropFilter="blur(5px)" />
                  <Dialog.Positioner>
                    <Dialog.Content 
                      bg="#121212" 
                      borderRadius="xl"
                      mx={{ base: 4, md: 8 }}
                      my={{ base: 4, md: 8 }}
                      maxW="1200px"
                      w="calc(100% - 32px)"
                    >
                      <Dialog.Header p={5} borderBottom="1px solid" borderColor="whiteAlpha.200">
                        <Flex justify="space-between" align="center" w="full">
                          <Box>
                            <Dialog.Title color="white" fontSize={{ base: "xl", md: "2xl" }}>
                              {item.title}
                            </Dialog.Title>
                            <Badge 
                              colorScheme="orange" 
                              mt={1}
                            >
                              {item.category}
                            </Badge>
                          </Box>
                          <Dialog.CloseTrigger asChild>
                            <CloseButton 
                              size="md" 
                              color="white"
                              _hover={{ bg: "whiteAlpha.200" }}
                            />
                          </Dialog.CloseTrigger>
                        </Flex>
                      </Dialog.Header>
                      
                      <Dialog.Body p={0}>
                        <Carousel 
                          withIndicators 
                          height={carouselHeight}
                          withControls
                          loop
                          styles={{
                            indicator: {
                              width: '12px',
                              height: '6px',
                              transition: 'width 250ms ease',
                              '&[data-active]': {
                                width: '40px',
                                backgroundColor: '#ef7826',
                              },
                            },
                            control: {
                              backgroundColor: 'rgba(255, 255, 255, 0.6)',
                              width: '40px',
                              height: '40px',
                              borderRadius: '50%',
                              '&:hover': {
                                backgroundColor: '#ef7826',
                              },
                            },
                          }}
                        >
                          {item.gallery?.map((img) => (
                            <Carousel.Slide key={img.id}>
                              <Image
                                src={img.img}
                                alt={`${item.title} - Image ${img.id}`}
                                width="100%"
                                height="100%"
                                objectFit="contain"
                              />
                            </Carousel.Slide>
                          ))}
                        </Carousel>
                        
                        <Box p={6} borderTop="1px solid" borderColor="whiteAlpha.200">
                          <Text color="white">
                            {item.description}
                          </Text>
                        </Box>
                      </Dialog.Body>
                    </Dialog.Content>
                  </Dialog.Positioner>
                </Portal>
              </Dialog.Root>
            </Box>
          ))}
        </SimpleGrid>
      </Flex>
      </Container>
      
      <Footer />
    </Flex>
  );
};

export default Projects;