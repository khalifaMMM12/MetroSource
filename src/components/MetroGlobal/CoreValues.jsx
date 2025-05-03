import {
  Box,
  Flex,
  Text,
  VStack,
  Circle,
  useBreakpointValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaBolt } from "react-icons/fa";

const MotionBox = motion(Box);

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

const CoreValues = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Box bg="#121212" py={20} px={[4, 10]} minH="100vh" position="relative">
      <Flex direction="column" align="center" justify="center" mb={16}>
        <Text fontSize={["2xl", "3xl", "4xl"]} fontWeight="bold" color="white">
          Our Core Values
        </Text>
      </Flex>

      <Box position="relative" w="full" maxW="6xl" mx="auto">
        {/* Central Circle */}
        <Circle size={24} bg="black" border="2px solid white" mx="auto" zIndex={2}>
          <FaBolt size={32} color="white" />
        </Circle>

        {/* Lines */}
        <svg
          width="100%"
          height="500px"
          style={{ position: "absolute", top: 0, left: 0, zIndex: 1 }}
        >
          <path
            d="M 50% 120 L 25% 250"
            stroke="white"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M 50% 120 L 75% 250"
            stroke="white"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M 50% 120 L 30% 420"
            stroke="white"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M 50% 120 L 70% 420"
            stroke="white"
            strokeWidth="2"
            fill="none"
          />
        </svg>

        {/* Core Value Cards */}
        <Flex
          direction={isMobile ? "column" : "row"}
          wrap="wrap"
          justify="space-between"
          mt={isMobile ? 10 : 28}
          px={[4, 8]}
          zIndex={2}
          position="relative"
          gap={8}
        >
          {values.map((val, index) => (
            <MotionBox
              key={index}
              bg="#1a1a1a"
              p={6}
              rounded="lg"
              maxW="sm"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              boxShadow="lg"
              color="white"
              borderLeft="4px solid #EF7826"
            >
              <Text fontWeight="bold" fontSize="lg" mb={2}>
                {val.title}
              </Text>
              <Text fontSize="sm" color="gray.300">
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
