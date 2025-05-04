import { Flex, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";
import m1 from "@/assets/m1.png";
import m2 from "@/assets/m2.png";

const MotionFlex = motion(Flex);
const MotionImage = motion(Image);

export default function Mission() {
  const vision = [
    { id: 1, img: m1 },
    { id: 2, img: m2 }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <MotionFlex
      width="full"
      minH="100vh"
      py={16}
      px={4}
      gap={[8, 12, 16]}
      flexWrap="wrap"
      justifyContent="center"
      alignItems="center"
      bg="#f4f4f4"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {vision.map((item) => (
        <MotionImage
          key={item.id}
          src={item.img}
          w={["90%", "80%", "45%"]}
          maxW="600px"
          rounded="xl"
          border="1px solid"
          borderColor="gray.200"
          variants={itemVariants}
          whileHover={{ 
            y: -5,
            scale: 1.02,
            transition: { duration: 0.3 }
          }}
        />
      ))}
    </MotionFlex>
  );
}