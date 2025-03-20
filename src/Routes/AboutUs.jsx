/* eslint-disable react/no-unescaped-entities */
import HeroIntro from "@/components/MetroGlobal/HeroIntro";
import { Box, Button, Flex, Image, SimpleGrid, Text } from "@chakra-ui/react";
import About from "@/assets/About.png";
import Navbar from "@/components/MetroGlobal/Navbar";

import CoreValue2 from "@/assets/CoreValue1.png";
import ab1 from "@/assets/ab1.png";
import ab2 from "@/assets/ab2.png";
import ab3 from "@/assets/ab3.png";
import ab4 from "@/assets/ab4.png";
import CEO from "@/assets/AboutCEO.png";
import Footer from "@/components/MetroGlobal/Footer";
const AboutUs = () => {
  const teams = [
    {
      id: 1,
      img: ab1,
      name: "Abdullah Bello Shuaibu",
      role: "President/Chief Executive Officer",
      degree: "M.Sc. (Architecture), MBA, MNIA, Member, ARCON",
    },
    {
      id: 2,
      img: ab2,
      name: "Abdullah Bello Shuaibu",
      role: "President/Chief Executive Officer",
      degree: "M.Sc. (Architecture), MBA, MNIA, Member, ARCON",
    },
    {
      id: 3,
      img: ab3,

      name: "Abdullah Bello Shuaibu",
      role: "President/Chief Executive Officer",
      degree: "M.Sc. (Architecture), MBA, MNIA, Member, ARCON",
    },
    {
      id: 4,
      img: ab4,

      name: "Abdullah Bello Shuaibu",
      role: "President/Chief Executive Officer",
      degree: "M.Sc. (Architecture), MBA, MNIA, Member, ARCON",
    },
  ];
  return (
    <Flex
      bg={"#f4f4f4"}
      flex={1}
      w={"100%"}
      height={"fit-content"}
      flexDirection={"column"}>
      <Navbar />
      <HeroIntro text={"About Us"} img={About} />
      <Flex
        width={"100%"}
        height={"100%"}
        py={4}
        gap={10}
        px={{ smDown: 4, smToMd: 4, mdTo2xl: 10 }}
        flexDirection={{
          smDown: "column",
          smToXl: "column",
          xlTo2xl: "row",
        }}>
        <Flex flexDirection={"column"} gap={5}>
          <Text
            fontSize={[20, 20, 30, 40]}
            color={"#121212"}
            fontWeight={"medium"}>
            Meet Metrosource
          </Text>
          <Box w={"full"}>
            <Button
              bg={"transparent"}
              fontWeight={"normal"}
              border={"1px #121212 solid"}
              px={10}
              fontSize={18}
              rounded={"3xl"}>
              Our Story
            </Button>
            <Text
              fontWeight={"normal"}
              mb={3}
              fontSize={[14, 14, 14, 20]}
              color={"#121212"}>
              Metrosource Limited is an indigenous firm that has been at the
              forefront of the design and construction industry in Nigeria since
              its establishment in 1998. With over two decades of experience, we
              have built a reputation for excellence, reliability, and
              innovation, providing premium, comprehensive services that cater
              to a wide range of clients, from private individuals to large
              corporations and government institutions.
            </Text>
            <Text
              fontWeight={"normal"}
              mb={3}
              fontSize={[14, 14, 14, 20]}
              color={"#121212"}>
              From inception, our vision has been to redefine the Nigerian
              construction industry by integrating cutting-edge technology,
              modern design principles, and sustainable building practices. Our
              deep-rooted commitment to professionalism, perfection, and client
              satisfaction has set us apart, allowing us to deliver projects
              that not only meet but exceed expectations.
            </Text>
            <Text
              fontWeight={"normal"}
              mb={3}
              fontSize={[14, 14, 14, 20]}
              color={"#121212"}>
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
              fontWeight={"normal"}
              mb={3}
              fontSize={[14, 14, 14, 20]}
              color={"#121212"}>
              With our headquarters strategically located in the heart of the
              Federal Capital Territory, Abuja, and additional operational
              offices in Lagos and Yola, we have successfully handled and
              executed numerous landmark projects across Nigeria and beyond. Our
              footprint extends into various regions of sub-Saharan Africa,
              demonstrating our capacity to deliver world-class infrastructure
              in diverse environments.
            </Text>
            <Text
              fontWeight={"normal"}
              mb={3}
              fontSize={[14, 14, 14, 20]}
              color={"#121212"}>
              At Metrosource Limited, we take pride in our ability to turn
              concepts into reality, creating functional, aesthetically
              pleasing, and sustainable spaces that enhance communities and
              contribute to economic growth. Whether it's residential,
              commercial, industrial, or institutional projects, we remain
              committed to setting new standards in the industry by combining
              innovative thinking, meticulous planning, and flawless execution.
            </Text>
            <Text
              fontWeight={"normal"}
              fontSize={[14, 14, 14, 20]}
              color={"#121212"}>
              Our journey over the years has been defined by our passion for
              excellence, our dedication to client satisfaction, and our
              relentless pursuit of architectural and engineering brilliance. As
              we continue to evolve, we remain focused on shaping the future of
              construction in Nigeria and beyond—one project at a time.
            </Text>
          </Box>
        </Flex>
      </Flex>

      <Image
        src={CoreValue2}
        w={"100%"}
        height={{ smDown: "55vh", smToLg: "55vh", lgTo2xl: "150vh" }}
        fit={"cover"}
      />

      <Flex
        width={"100%"}
        height={"100vh"}
        position={"relative"}
        p={{ smDown: 2, smToMd: 2, mdTo2xl: 4 }}>
        <Image
          src={CEO}
          rounded={"2xl"}
          w={"100%"}
          height={"100%"}
          fit={"cover"}
        />
        <Flex
          flexDirection={"column"}
          gap={4}
          width={{
            smDown: "95%",
            smToMd: "95%",
            mdTo2xl: "35%",
          }}
          height={"fit-content"}
          bg={"#ffffff"}
          position={"absolute"}
          bottom={2}
          left={0}
          p={6}
          rounded={"2xl"}>
          <Text
            color={"#121212"}
            fontSize={{
              smDown: 15,
              smToMd: 15,
              mdTo2xl: 20,
            }}
            fontWeight={"medium"}>
            "WE ARE SHARPENING OUR STRATEGY TO <br /> BE ONE OF THE WORLD'S MOST
            VALUABLE,
            <br /> MOST INNOVATIVE AND MOST ADMIRED COMPANIES"
          </Text>
          <Text
            color={"#9D9D9C"}
            fontWeight={"500"}
            fontSize={{
              smDown: 12,
              smToMd: 12,
              mdTo2xl: 14,
            }}>
            FOUNDER | Abdullah Bello Shuaibu
          </Text>
          <Button
            width={"fit-content"}
            bg={"#EF7826"}
            px={4}
            fontWeight={"light"}
            color={"#ffffff"}
            rounded={"3xl"}>
            Read Founder’s Letter
          </Button>
        </Flex>
      </Flex>

      <Flex
        width={"100%"}
        flexDirection={"column"}
        px={{ smDown: 2, smToMd: 2, mdTo2xl: 10 }}
        py={8}>
        <Flex
          flexDirection={"column"}
          alignItems={"center"}
          gap={4}
          py={8}
          px={["1rem", "1rem", "10rem", "20rem"]}>
          <Text
            color={"#121212"}
            textAlign={"center"}
            fontSize={{ smDown: 25, smToMd: 30, mdTo2xl: 45 }}
            fontWeight={"medium"}>
            Meet the Team
          </Text>
          <Text
            color={"#121212"}
            fontSize={16}
            fontWeight={"normal"}
            textAlign={"center"}>
            The Dream Team Committed to Excellence.
          </Text>
        </Flex>
        <SimpleGrid
          columns={{ base: 1, smOnly: 1, mdOnly: 2, lgToXl: 2, xlTo2xl: 4 }}
          gap='10px'>
          {teams.map((team) => (
            <Box
              key={team.id}
              position={"relative"}
              w={"100%"}
              height={{ smDown: "65vh", smToLg: "65vh", lgTo2xl: "70vh" }}>
              <Image
                src={team.img}
                width={"100%"}
                height={"100%"}
                fit={{ smDown: "cover", smToMd: "cover", MdTo2xl: "cover" }}
                rounded={"2xl"}
              />
              <Flex
                pos={"absolute"}
                bottom={4}
                bg={"#F1EFE780"}
                width={"90%"}
                rounded={"2xl"}
                p={2}
                left={"4%"}
                backdropFilter={"blur(20px)"}
                flexDirection={"column"}>
                <Text fontSize={{ smToLg: 13, lgTo2xl: 18 }} color={"#121212"}>
                  {team.name}
                </Text>
                <Text fontSize={13} color={"#12121250"}>
                  {team.role}
                </Text>
                <Text fontSize={11} color={"#121212"}>
                  {team.degree}
                </Text>
              </Flex>
            </Box>
          ))}
        </SimpleGrid>
      </Flex>
      <Footer />
    </Flex>
  );
};

export default AboutUs;
