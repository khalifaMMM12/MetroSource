import {
  Box,
  Button,
  Flex,
  Image,
  List,
  ListItem,
  Text,
  Icon
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaHelmetSafety, FaArrowRight } from "react-icons/fa6";
import { FaPencilRuler } from "react-icons/fa";
import service2 from "@/assets/service2.png";
import service3 from "@/assets/service3.png";
// import Modal from "@/components/MetroGlobal/Modal";

const MotionBox = motion(Box);

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
      IconComponent: FaPencilRuler, 
      img: service3,
      title: "Architectural and Engineering Consultancy",
      // subService: [
      //   "Project Planning and Design",
      //   "Urban Design and Landscape",
      //   "Interior Design",
      //   "Building Transformation and Adaptive Reuse",
      //   "Project Management",
      // ],
      subTitle:
        "We provide innovative, high-quality architectural and engineering solutions tailored to your project's unique needs.",
    },
    {
      id: 2,
      IconComponent: FaHelmetSafety,
      img: service2,
      title: "Engineering Services",
      // subService: [
      //   "Building Construction and Engineering",
      //   "Structural Engineering",
      //   "MEP Engineering",
      //   "Civil Engineering",
      //   "Project Management",
      //   "Monitoring and Evaluation",
      //   "Environmental Impact Analysis",
      // ],
      subTitle:
        "Our engineers deliver sustainable, safe, and cost-effective results using the latest in green technology.",
    },
  ];

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
        fontSize={{ base: "lg", md: "xl" }}
        textAlign="center"
        maxW="3xl"
        mx="auto"
        color="gray.700"
        mb={10}
      >
        Metrosource LTD delivers a wide range of comprehensive services
        tailored to meet your needs with the highest standards of professionalism.
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
            rounded="xl"
            overflow="hidden"
            maxW="sm"
            w="full"
            borderWidth="1px"
            borderColor="black"
          >
            <Box position="relative">
              <Image
                src={item.img}
                alt={item.title}
                w="full"
                h="200px"
                objectFit="cover"
              />
            </Box>

            <Box p={4}>
              <Box mb={2}>
                <Icon as={item.IconComponent} w={6} h={6} color="#121212" />
              </Box>
              <Text fontSize="xl" fontWeight="semibold" mb={2}>
                {item.title}
              </Text>
              <Text fontSize="md" color="gray.600" mb={4}>
                {item.subTitle}
              </Text>

              {/* <Modal title={item.title + " – Sub-services"} triggerLabel="View Details">
                <List spacing={3} styleType="disc" pl={4}>
                  {item.subService.map((service, i) => (
                    <ListItem key={i}>{service}</ListItem>
                  ))}
                </List>
              </Modal> */}
            </Box>
          </MotionBox>
        ))}
      </Flex>
    </Flex>
  );
};

export default Services;