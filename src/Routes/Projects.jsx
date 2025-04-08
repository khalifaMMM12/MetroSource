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
import fm1 from "@/assets/fm1.jpg";
import fm2 from "@/assets/fm1a.jpg";
import fm3 from "@/assets/fm2.jpg";
import fm4 from "@/assets/fm3.jpg";
import fm5 from "@/assets/fm4.jpg";
import jaha1 from "@/assets/jaha1.jpg";
import jaha2 from "@/assets/jaha2.jpg";
import jaha3 from "@/assets/jaha3.jpg";
import jaha4 from "@/assets/jaha4.jpg";
import jaha5 from "@/assets/jaha5.jpg";
import jaha6 from "@/assets/jaha6.jpg";
import mad1 from "@/assets/mad1.jpg";
import mad2 from "@/assets/mad2.jpg";
import mad3 from "@/assets/mad3.jpg";
import mad4 from "@/assets/mad4.jpg";
import mad5 from "@/assets/mad5.jpg";
import mad6 from "@/assets/mad6.jpg";
import mad7 from "@/assets/mad7.jpg";
const Projects = () => {
  const projectOffer = [
    {
      id: 1,
      img: jaha5,
      title: "Jada Country Home",
      subTitle: "Description of Project 1",
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
      ],
    },
    {
      id: 2,
      img: fm2,
      title: "FMC Project",
      subTitle: "Description of Project 2",
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
      ],
    },
    {
      id: 3,
      img: mad7,
      title: "Madugu Residence",
      subTitle: "Description of Project 3",
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
          id: 3,
          img: mad5,
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
