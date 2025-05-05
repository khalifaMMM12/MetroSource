import { Flex, Grid, GridItem, Image, Text } from "@chakra-ui/react";
import project1 from "@/assets/project1.svg";
import project2 from "@/assets/project2.svg";
import project3 from "@/assets/project3.svg";
import project4 from "@/assets/project4.svg";
import project5 from "@/assets/project5.svg";
import project6 from "@/assets/project6.svg";
import project7 from "@/assets/project7.svg";
import project8 from "@/assets/project8.svg";

const images = [
  project1,
  project2,
  project3,
  project4,
  project5,
  project6,
  project7,
  project8,
];

const RecentProjects = () => {
  return (
    <Flex
      w="full"
      flexDirection="column"
      align="center"
      py={10}
      px={{ base: 6, md: 8, xl: 10 }}
      bg="#f8f8f8"
    >
      <Text
        fontSize={{ base: "3xl", md: "5xl" }}
        fontWeight="bold"
        textAlign="center"
        mb={6}
      >
        Recent Projects
      </Text>

      <Text
        color="#121212"
        fontSize={{ base: "lg", md: "xl" }}
        textAlign="center"
        maxW="4xl"
        mb={10}
      >
        Metrosource LTD provides top-tier, all-encompassing services in the
        design and construction industry. Here are some of our featured
        projects:{" "}
        <span style={{ color: "#EF7826", textDecoration: "underline" }}>
          Explore more of our work!
        </span>
      </Text>

      <Grid
        w="100%"
        maxW="1400px"
        templateColumns={{
          base: "repeat(2, 1fr)",
          md: "repeat(3, 1fr)",
          lg: "repeat(4, 1fr)",
        }}
        autoRows="minmax(250px, auto)"
        gap={4}
      >
        {images.map((src, idx) => (
          <GridItem key={idx} w="100%" h="100%">
            <Image
              src={src}
              w="100%"
              h="100%"
              objectFit="cover"
              rounded="2xl"
              transition="transform 0.3s"
              _hover={{ transform: "scale(1.03)" }}
            />
          </GridItem>
        ))}
      </Grid>
    </Flex>
  );
};

export default RecentProjects;
