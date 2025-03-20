import { Flex, Grid, GridItem, Image, Text } from "@chakra-ui/react";
import project1 from "@/assets/project1.svg";
import project2 from "@/assets/project2.svg";
import project3 from "@/assets/project3.svg";
import project4 from "@/assets/project4.svg";
import project5 from "@/assets/project5.svg";
import project6 from "@/assets/project6.svg";
import project7 from "@/assets/project7.svg";
import project8 from "@/assets/project8.svg";
const RecentProjects = () => {
  return (
    <Flex
      data-state='open'
      _open={{
        animation: "fade-in 500ms ease-in",
      }}
      w={"100%"}
      height={"full"}
      flexDirection={"column"}
      alignItems={"center"}>
      <Flex
        flexDirection={"column"}
        alignItems={"center"}
        gap={4}
        py={8}
        px={{
          smDown: 2,
          smToMd: 4,
          mdTo2xl: "20rem",
        }}>
        <Text
          color={"#121212"}
          textAlign={"center"}
          fontSize={{ smDown: 25, smToMd: 30, mdTo2xl: 45 }}
          fontWeight={"medium"}>
          Recent Projects
        </Text>
        <Text
          color={"#121212"}
          fontSize={{
            smDown: 13,
            smToMd: 13,
            mdTo2xl: 16,
          }}
          fontWeight={"normal"}
          textAlign={"center"}>
          Metrosource LTD provides top-tier, all-encompassing services in the
          design and construction industry. Here are some of our featured
          projects:{" "}
          <span
            style={{
              color: "#EF7826",
              textDecoration: "underline",
            }}>
            Explore more of our work!
          </span>
        </Text>
      </Flex>

      <Grid
        w='100%'
        height={{
          smDown: "fit-content",
          smToLg: "fit-content",
          lgTo2xl: "150vh",
        }}
        px={{
          smDown: 3,
          smToMd: 3,
          mdTo2xl: 10,
        }}
        py={5}
        templateRows='repeat(4, minmax(0, 1fr))'
        templateColumns={{
          smDown: "repeat(2, 1fr)",
          smToLg: "repeat(2, 1fr)",
          lgTo2xl: "repeat(3, 1fr)",
        }}
        gap={5}>
        <GridItem rowSpan={[1, 1, 2, 2]} colSpan={1} h='100%'>
          <Image src={project1} w='100%' h='100%' rounded='2xl' />
        </GridItem>
        <GridItem colSpan={1} h='100%'>
          <Image src={project2} w='100%' h='100%' rounded='2xl' />
        </GridItem>
        <GridItem colSpan={1} h='100%'>
          <Image src={project3} w='100%' h='100%' rounded='2xl' />
        </GridItem>
        <GridItem colSpan={1} h='100%'>
          <Image src={project4} w='100%' h='100%' rounded='2xl' />
        </GridItem>
        <GridItem colSpan={1} rowSpan={[1, 1, 2, 3]} h='100%'>
          <Image src={project6} w='100%' h='100%' rounded='2xl' />
        </GridItem>
        <GridItem colSpan={1} h='100%'>
          <Image src={project5} w='100%' h='100%' rounded='2xl' />
        </GridItem>
        <GridItem colSpan={1} h='100%'>
          <Image src={project7} w='100%' h='100%' rounded='2xl' />
        </GridItem>
        <GridItem colSpan={1} h='100%'>
          <Image src={project8} w='100%' h='100%' rounded='2xl' />
        </GridItem>
      </Grid>
    </Flex>
  );
};

export default RecentProjects;
