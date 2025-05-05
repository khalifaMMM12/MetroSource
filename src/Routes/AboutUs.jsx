import { useState, useEffect } from 'react';
import HeroIntro from "@/components/MetroGlobal/HeroIntro";
import { 
  Box, 
  Button, 
  Container,
  Flex, 
  Image, 
  SimpleGrid, 
  Text,
  Heading,
  useBreakpointValue,
  VStack,
  HStack,
  Badge,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import About from "@/assets/About.jpeg";
import Navbar from "@/components/MetroGlobal/Navbar";
import CoreValues from "@/components/MetroGlobal/CoreValues";
import CoreValue2 from "@/assets/CoreValue1.png";
import ab1 from "@/assets/ab1.png";
import ab2 from "@/assets/ab2.png";
import ab3 from "@/assets/ab3.png";
import ab4 from "@/assets/ab4.png";
import CEO from "@/assets/AboutCEO.png";
import Footer from "@/components/MetroGlobal/Footer";

// Create motion components
const MotionBox = motion(Box);
const MotionFlex = motion(Flex);
const MotionHeading = motion(Heading);
const MotionImage = motion(Image);

const AboutUs = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isMobile = useBreakpointValue({ base: true, md: false });
  const isTablet = useBreakpointValue({ base: false, sm: true, lg: false });
  const isDesktop = useBreakpointValue({ base: false, lg: true });

  const teams = [
    {
      id: 1,
      img: ab1,
      name: "Arc Abdullahi Bello Shu'aibu",
      role: "MD/CEO",
    },
    {
      id: 2,
      img: ab2,
      name: "Arc Kayode Oyawoye",
      role: "EXECUTIVE PARTNER",
    },
    {
      id: 3,
      img: ab3,
      name: "Arc Jibrilla Sahabo",
      role: "HEAD OF STUDIO",
    },
    {
      id: 4,
      img: ab4,
      name: "Asma'u Abubakar",
      role: "ACCOUNTANT",
    },
  ];

  // Custom animations for page scroll
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        when: "beforeChildren",
        staggerChildren: 0.3,
        duration: 0.6 
      }
    }
  };

  const textFadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8 } 
    }
  };

  return (
    <MotionBox 
      bg="#f4f4f4" 
      minH="100vh" 
      w="100%"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <Navbar />
      <Box mb={[6, 8, 10]}>
        <HeroIntro text="About Us" img={About} />
      </Box>
      
      {/* About Section */}
      <Container maxW="container.xl" py={[10, 12, 16]} px={[6, 8, 10]}>
        <VStack spacing={10} align="stretch">
          <MotionHeading 
            fontSize={["2xl", "3xl", "4xl"]} 
            color="#121212" 
            fontWeight="medium"
            borderBottom="3px solid #EF7826"
            pb={3}
            w="fit-content"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Meet Metrosource
          </MotionHeading>
          
          <MotionBox
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <Text
              fontSize={["md", "md", "lg"]}
              color="#121212"
              mb={6}
              lineHeight="taller"
              textAlign="justify"
              px={[2, 4, 6]}
            >
              Metrosource Limited is an indigenous firm that has been at the
              forefront of the design and construction industry in Nigeria since
              its establishment in 1998. With over two decades of experience, we
              have built a reputation for excellence, reliability, and
              innovation, providing premium, comprehensive services that cater
              to a wide range of clients, from private individuals to large
              corporations and government institutions.
            </Text>
            
            <Text
              fontSize={["md", "md", "lg"]}
              color="#121212"
              mb={6}
              lineHeight="taller"
              textAlign="justify"
              px={[2, 4, 6]}
            >
              From inception, our vision has been to redefine the Nigerian
              construction industry by integrating cutting-edge technology,
              modern design principles, and sustainable building practices. Our
              deep-rooted commitment to professionalism, perfection, and client
              satisfaction has set us apart, allowing us to deliver projects
              that not only meet but exceed expectations.
            </Text>
            
            <Text
              fontSize={["md", "md", "lg"]}
              color="#121212"
              mb={6}
              lineHeight="taller"
              textAlign="justify"
              px={[2, 4, 6]}
            >
              Metrosource Limited is owned and managed by a team of highly
              skilled, creative, and motivated professionals with decades of
              combined experience in architecture, civil engineering, urban
              planning, project management, and structural design. Their
              expertise and unwavering dedication to excellence give us a strong
              competitive advantage in executing projects of varying scales and
              complexities, ensuring that each structure we design and build
              stands as a testament to quality and durability.
            </Text>
            
            <Text
              fontSize={["md", "md", "lg"]}
              color="#121212"
              mb={6}
              lineHeight="taller"
              textAlign="justify"
              px={[2, 4, 6]}
            >
              With our headquarters strategically located in the heart of the
              Federal Capital Territory, Abuja, and additional operational
              offices in Lagos and Yola, we have successfully handled and
              executed numerous landmark projects across Nigeria and beyond. Our
              footprint extends into various regions of sub-Saharan Africa,
              demonstrating our capacity to deliver world-class infrastructure
              in diverse environments.
            </Text>
            
            <Text
              fontSize={["md", "md", "lg"]}
              color="#121212"
              mb={6}
              lineHeight="taller"
              textAlign="justify"
              px={[2, 4, 6]}
            >
              At Metrosource Limited, we take pride in our ability to turn
              concepts into reality, creating functional, aesthetically
              pleasing, and sustainable spaces that enhance communities and
              contribute to economic growth. Whether it's residential,
              commercial, industrial, or institutional projects, we remain
              committed to setting new standards in the industry by combining
              innovative thinking, meticulous planning, and flawless execution.
            </Text>
            
            <Text
              fontSize={["md", "md", "lg"]}
              color="#121212"
              lineHeight="taller"
              textAlign="justify"
              px={[2, 4, 6]}
            >
              Our journey over the years has been defined by our passion for
              excellence, our dedication to client satisfaction, and our
              relentless pursuit of architectural and engineering brilliance. As
              we continue to evolve, we remain focused on shaping the future of
              construction in Nigeria and beyond—one project at a time.
            </Text>
          </MotionBox>
        </VStack>
      </Container>
      
      {/* Core Values Section */}
      <Box w="100%" py={[10, 14, 20]} overflow="hidden" my={[6, 8, 12]}>
       <CoreValues />
      </Box>
      
      {/* CEO Section */}
      <Container maxW="container.xl" py={[8, 12, 16]} px={[6, 8, 10]}>
        <MotionBox 
          position="relative"
          h={["500px", "600px", "700px"]}
          mb={[12, 16, 20]}
          borderRadius="2xl"
          overflow="hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <MotionImage
            src={CEO}
            borderRadius="2xl"
            w="100%"
            h="100%"
            objectFit="cover"
            boxShadow="2xl"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.2 }}
          />
          
          <MotionBox
            position="absolute"
            bottom={["30px", "40px", "50px"]}
            left={["30px", "40px", "50px"]}
            bg="rgba(255, 255, 255, 0.95)"
            p={[5, 6, 8]}
            borderRadius="xl"
            boxShadow="xl"
            backdropFilter="blur(20px)"
            maxW={["95%", "90%", "500px"]}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ 
              duration: 0.8,
              delay: 0.5
            }}
            whileHover={{
              y: -8,
              boxShadow: "0 25px 50px -12px rgba(0,0,0,0.25)",
              transition: { duration: 0.3 }
            }}
          >
            <Text
              color="#121212"
              fontSize={["md", "lg", "xl"]}
              fontWeight="medium"
              lineHeight="tall"
              mb={5}
              textAlign="left"
            >
              "WE ARE SHARPENING OUR STRATEGY TO BE ONE OF THE WORLD'S MOST VALUABLE,
              MOST INNOVATIVE AND MOST ADMIRED COMPANIES"
            </Text>
            
            <Text
              color="#9D9D9C"
              fontWeight="500"
              fontSize={["xs", "sm", "md"]}
              mb={5}
            >
              FOUNDER | Abdullah Bello Shuaibu
            </Text>
            
            <Button
              bg="#EF7826"
              color="white"
              px={8}
              py={6}
              h="auto"
              fontWeight="normal"
              borderRadius="full"
              _hover={{
                bg: "#d66a1f",
                transform: "translateY(-3px)",
                boxShadow: "lg",
              }}
              transition="all 0.3s ease"
            >
              Read Founder's Letter
            </Button>
          </MotionBox>
        </MotionBox>
      </Container>
      
      {/* Team Section */}
      <Container maxW="container.xl" py={[12, 16, 20]} px={[6, 8, 10]}>
        <VStack spacing={8} mb={16}>
          <MotionHeading
            fontSize={["2xl", "3xl", "4xl"]}
            color="#121212"
            fontWeight="medium"
            textAlign="center"
            position="relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            _after={{
              content: '""',
              display: 'block',
              width: '80px',
              height: '4px',
              bg: '#EF7826',
              margin: '0 auto',
              marginTop: '12px',
            }}
          >
            Meet the Team
          </MotionHeading>
          
          <MotionBox
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <Text
              color="#121212"
              fontSize={["sm", "md", "lg"]}
              fontWeight="normal"
              textAlign="center"
              maxW="700px"
              px={4}
            >
              The Dream Team Committed to Excellence.
            </Text>
          </MotionBox>
        </VStack>
        
        <SimpleGrid 
          columns={[1, 2, 2, 4]} 
          spacing={[16, 20, 24]}  
          px={[4, 6, 8, 10]}  
          py={[10, 12, 14]}     
          mx="auto"  
          maxW="1400px"
        >
          {teams.map((team, index) => (
            <MotionBox
              key={team.id}
              position="relative"
              whileHover={{ y: -15 }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.7,
                delay: 0.2 + (index * 0.15)
              }}
              mx="auto" 
              w="full" 
              maxW="320px"
              mb={10}
            >
              <Box
                borderRadius="2xl"
                overflow="hidden"
                boxShadow="xl"
                h={["380px", "420px", "480px"]}
              >
                <MotionImage
                  src={team.img}
                  width="100%"
                  height="100%"
                  objectFit="cover"
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.5 }}
                />
              </Box>
              
              <MotionFlex
                position="absolute"
                bottom={6}
                width="90%"
                left="5%"
                bg="rgba(241, 239, 231, 0.85)"
                borderRadius="xl"
                p={5}
                backdropFilter="blur(10px)"
                flexDirection="column"
                boxShadow="lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.5, 
                  delay: 0.5 + (index * 0.15) 
                }}
              >
                <Text 
                  fontSize={["md", "lg", "xl"]} 
                  color="#121212"
                  fontWeight="medium"
                  mb={2}
                >
                  {team.name}
                </Text>
                
                <HStack>
                  <Badge 
                    bg="#EF7826" 
                    color="white" 
                    px={3} 
                    py={1.5} 
                    borderRadius="md"
                    fontSize="sm"
                    letterSpacing="0.5px"
                  >
                    {team.role}
                  </Badge>
                </HStack>
              </MotionFlex>
            </MotionBox>
          ))}
        </SimpleGrid>
      </Container>
      <Footer />
    </MotionBox>
  );
};

export default AboutUs;