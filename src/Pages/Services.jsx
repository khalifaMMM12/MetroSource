import {
  Box,
  Button,
  CloseButton,
  Dialog,
  Flex,
  Image,
  List,
  Portal,
  Text,
} from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FaHelmetSafety, FaArrowRight } from "react-icons/fa6";
import { FaPencilRuler } from "react-icons/fa";
import service2 from "@/assets/service2.png";
import service3 from "@/assets/service3.png";

const MotionBox = motion.create(Box);

const dialogVariants = {
  hidden: {
    opacity: 0,
    scale: 0.95,
    y: 20
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring",
      damping: 25,
      stiffness: 300
    }
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    y: 20,
    transition: {
      duration: 0.2
    }
  }
};

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

const Services = () => {
  const serviceOffer = [
    {
      id: 1,
      icon: <FaPencilRuler size={24} color='#121212' />,
      img: service3,
      title: "Architectural and engineering consultancy services",
      subService: [
        "PROJECT PLANNING AND DESIGN",
        "URBAN DESIGN AND LANDSCAPE",
        "INTERIOR DESIGN",
        "BUILDING TRANSFORMATION AND ADAPTIVE REUSE",
        "PROJECT MANAGEMENT",
      ],
      subTitle:
        "We specialize in providing innovative and high-quality architectural designs for your construction projects. Our team of experienced architects and designers are dedicated to delivering exceptional services that meet and exceed our clients' expectations.",
    },
    {
      id: 2,
      icon: <FaHelmetSafety size={24} color='#121212' />,
      img: service2,
      title: "Engineering Services",
      subService: [
        "BUILDING CONSTRUCTION AND ENGINEERING",
        "STRUCTURAL ENGINEERING",
        "MEP ENGINEERING",
        "CIVIL ENGINEERING",
        "PROJECT MANAGEMENT",
        "PROJECT MONITORING AND EVALUATION",
        "ENVIRONMENTAL IMPACT ANALYSIS",
      ],
      subTitle:
        "Our skilled engineers provide diverse services, prioritizing quality construction with specialized solutions. Using renowned ‘Green technology,’ we ensure safe, efficient, and cost-effective outcomes.",
    },
  ];

  const [openDialogs, setOpenDialogs] = useState({});
  const MotionDialogContent = motion.create(Dialog.Content);

  const handleDialogChange = (id, open) => {
    setOpenDialogs(prev => ({
      ...prev,
      [id]: open
    }));
  };

  return (
    <Flex flexDirection="column" w="full" px={{ base: 4, md: 8 }} py={10}>
      <Text
        fontSize={{ base: "2xl", md: "4xl" }}
        fontWeight="bold"
        textAlign="center"
        mb={4}
      >
        Our Services
      </Text>
      <Text
        fontSize={{ base: "sm", md: "md" }}
        textAlign="center"
        maxW="3xl"
        mx="auto"
        color="gray.700"
        mb={10}
      >
        Metrosource LTD operates with the highest standards of professionalism,
        delivering a wide range of comprehensive services designed to meet
        diverse client needs effectively.
      </Text>

      <Flex
        gap={8}
        flexWrap="wrap"
        justifyContent="center"
        alignItems="stretch"
      >
        {serviceOffer.map((item, index) => (
          <MotionBox
            key={item.id}
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={index}
            bg="white"
            // shadow="md"
            rounded="xl"
            overflow="hidden"
            maxW="sm"
            w="full"
            borderWidth="1px"
            borderColor="black.400"
            className="transition-all duration-300 border-black"
          >
            <Box position="relative">
              <Image src={item.img} alt={item.title} w="full" h="200px" objectFit="cover" />
                <Flex position="absolute" bottom={4} right={4} gap={2} px={2} py={1} >               

                <Dialog.Root
                    open={!!openDialogs[item.id]}
                    onOpenChange={(open) => handleDialogChange(item.id, open)}
                  >
                  <Dialog.Trigger asChild>
                    <Button
                      rightIcon={<FaArrowRight />}
                      px={4}
                      py={2}
                      bg="#ef7826"
                      color="white"
                      size="sm"
                      rounded="full"
                      _hover={{ bg: "#e46e1f" }}
                    >
                      Learn More
                    </Button>
                  </Dialog.Trigger>
                        
                  <Portal>
                  <Dialog.Backdrop
                    bg="blackAlpha.600"
                    onClick={() => handleDialogChange(item.id, false)}
                  />
                    <Dialog.Positioner>
                      <MotionDialogContent
                        bg="gray.900"
                        maxW={{ base: "90%", md: "lg" }}
                        w="full"
                        rounded="2xl"
                        variants={dialogVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        color="white"
                        p={6}
                        // shadow="xl"
                        className="border-1"
                        style={{ 
                          transformOrigin: "center" 
                        }}
                      >
                        <Dialog.Header
                          display="flex"
                          justifyContent="space-between"
                          alignItems="center"
                          borderBottom="1px solid"
                          borderColor="whiteAlpha.200"
                          mb={4}
                        >
                          <Dialog.Title fontSize="xl" fontWeight="bold" color="orange.300">
                            {item.title} Sub-services
                          </Dialog.Title>
                          <Dialog.CloseTrigger asChild>
                            <CloseButton
                              color="white"
                              _hover={{ color: "orange.300" }}
                            />
                          </Dialog.CloseTrigger>
                        </Dialog.Header>
                        
                        <Dialog.Body>
                          <List.Root spacing={3} listStyle="disc" pl={4}>
                            {item.subService.map((service, i) => (
                              <List.Item key={i} fontSize="sm" color="whiteAlpha.900">
                                {service}
                              </List.Item>
                            ))}
                          </List.Root>
                        </Dialog.Body>
                      </MotionDialogContent>
                    </Dialog.Positioner>
                  </Portal>
                </Dialog.Root>
              </Flex>
            </Box>

            <Box p={4}>
              <Box mb={2}>{item.icon}</Box>
              <Text fontSize="lg" fontWeight="semibold" mb={2}>
                {item.title}
              </Text>
              <Text fontSize="sm" color="gray.600">
                {item.subTitle}
              </Text>
            </Box>
          </MotionBox>
        ))}
      </Flex>
    </Flex>
  );
};

export default Services;
