import HeroIntro from "@/components/MetroGlobal/HeroIntro";
import Navbar from "@/components/MetroGlobal/Navbar";
import {
  CloseButton,
  Dialog,
  Flex,
  Image,
  Portal,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import build from "@/assets/build2.jpeg";
import Footer from "@/components/MetroGlobal/Footer";
import { Carousel } from "@mantine/carousel";
import "@mantine/carousel/styles.css";
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
  const projectOffer = [
    {
      id: 1,
      img: jaha5,
      title: "Jahi",

      gallery: [
        {
          id: 1,
          img: jaha5,
        },
        {
          id: 2,
          img: jaha6,
        },
        {
          id: 3,
          img: jaha3,
        },
        {
          id: 4,
          img: jaha4,
        },
        {
          id: 5,
          img: jaha2,
        },
        {
          id: 6,
          img: jaha1,
        },
        {
          id: 7,
          img: jaha7,
        },
        {
          id: 8,
          img: jaha8,
        },
      ],
    },
    {
      id: 2,
      img: fm2,
      title: "FMC Project",

      gallery: [
        {
          id: 1,
          img: fm1,
        },
        {
          id: 2,
          img: fm2,
        },
        {
          id: 3,
          img: fm3,
        },
        {
          id: 4,
          img: fm4,
        },
        {
          id: 5,
          img: fm5,
        },
        {
          id: 6,
          img: fm6,
        },
      ],
    },
    {
      id: 3,
      img: mad2,
      title: "DBN Project",

      gallery: [
        {
          id: 1,
          img: mad1,
        },
        {
          id: 2,
          img: mad3,
        },

        {
          id: 4,
          img: mad2,
        },
        {
          id: 5,
          img: mad4,
        },
        {
          id: 6,
          img: mad6,
        },
        {
          id: 7,
          img: mad7,
        },
      ],
    },
    {
      id: 4,
      img: niss2,
      title: "Nisa International Medical Center",

      gallery: [
        {
          id: 1,
          img: niss1,
        },
        {
          id: 2,
          img: niss2,
        },

        {
          id: 3,
          img: niss3,
        },
        {
          id: 4,
          img: niss4,
        },
        {
          id: 5,
          img: niss5,
        },
      ],
    },
  ];
  return (
    <Flex w={"100%"} flexDirection={"column"} bg={"#f4f4f4"}>
      <Navbar />
      <HeroIntro img={build} text={"Recents Projects"} />
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xlTo2xl: 3 }} gap={4} p={4}>
        {projectOffer.map((item) => (
          <Flex
            key={item.id}
            flexDirection={"column"}
            rounded='lg'
            pos={"relative"}>
            <Dialog.Root
              size='cover'
              placement='center'
              motionPreset='slide-in-bottom'>
              <Dialog.Trigger>
                <Image
                  width={"100%"}
                  height={"50vh"}
                  src={item?.img}
                  filter={" brightness(0.5)"}
                />
                <Text
                  pos={"absolute"}
                  top={"50%"}
                  textAlign={"center"}
                  fontSize={18}
                  left={"20%"}
                  right={"20%"}
                  fontWeight={"bold"}
                  color={"#ffffff"}>
                  {item?.title}
                </Text>
              </Dialog.Trigger>
              <Portal>
                <Dialog.Backdrop />
                <Dialog.Positioner>
                  <Dialog.Content bg={"#121212"}>
                    <Dialog.Header p={4} position={"relative"}>
                      <Dialog.Title color={"#ffffff"}>
                        {item?.title}
                      </Dialog.Title>
                      <Dialog.CloseTrigger
                        pos={"absolute"}
                        right={5}
                        rounded={"full"}
                        top={5}
                        bg={"#ffffff"}
                        asChild>
                        <CloseButton size='sm' color={"#121212"} />
                      </Dialog.CloseTrigger>
                    </Dialog.Header>
                    <Dialog.Body>
                      <Carousel withIndicators height={500}>
                        {item.gallery?.map((img) => (
                          <Carousel.Slide key={img.id}>
                            <Image
                              src={img.img}
                              alt={`Image ${img.id}`}
                              width={"100%"}
                              objectFit={"contain"}
                              height={"100%"}
                            />
                          </Carousel.Slide>
                        ))}
                      </Carousel>
                    </Dialog.Body>
                  </Dialog.Content>
                </Dialog.Positioner>
              </Portal>
            </Dialog.Root>
          </Flex>
        ))}
      </SimpleGrid>
      <Footer />
    </Flex>
  );
};

export default Projects;
