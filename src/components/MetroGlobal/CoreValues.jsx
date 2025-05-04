import {
  Box,
  Flex,
  Text,
  VStack,
  Circle,
  useBreakpointValue,
  Image
} from "@chakra-ui/react";
import Logo from "@/assets/logo.svg";
import { motion } from "framer-motion";
import { useRef } from "react";

const MotionBox = motion(Box);
const MotionCircle = motion(Circle);
const MotionText = motion(Text);

const values = [
  {
    title: "Professionalism",
    description:
      "We possess the competence and skill expected of professionals expected to deliver on projects effectively.",
  },
  {
    title: "Integrity",
    description: "We value honesty and transparency in all our dealings.",
  },
  {
    title: "Innovation",
    description:
      "We constantly push boundaries and seek better, smarter solutions.",
  },
  {
    title: "Collaboration",
    description: "We work together to achieve shared goals effectively.",
  },
];

const cardVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const CoreValues = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Box bg="#121212" py={8} px={[4, 8]} minH="auto" position="relative">
      {/* Heading */}
      <Flex direction="column" align="center" justify="center" mb={6}>
        <MotionText
          fontSize={["2xl", "3xl", "4xl"]}
          fontWeight="bold"
          color="white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our Core Values
        </MotionText>
      </Flex>

      <Box position="relative" w="full" maxW="6xl" mx="auto">
        {/* Central Logo */}
        <MotionCircle
          size={20}
          mx="auto"
          zIndex={2}
          position="relative"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Image src={Logo} h={{ base: "30px", md: "40px" }} />
        </MotionCircle>

        {/* Cards */}
        <Flex
          direction={isMobile ? "column" : "row"}
          wrap="wrap"
          justify="center"
          mt={12}
          gap={6}
        >
          {values.map((val, index) => (
            <MotionBox
              key={index}
              custom={index}
              variants={cardVariant}
              initial="hidden"
              animate="visible"
              bg="#1a1a1a"
              p={5}
              rounded="lg"
              w={{ base: "100%", sm: "80%", md: "45%", lg: "40%" }}
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 200 }}
              color="white"
              borderLeft="4px solid #EF7826"
            >
              <Text fontWeight="bold" fontSize="xl" mb={2}>
                {val.title}
              </Text>
              <Text fontSize="lg" color="gray.300">
                {val.description}
              </Text>
            </MotionBox>
          ))}
        </Flex>
      </Box>
    </Box>
  );
};

export default CoreValues;
