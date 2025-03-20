import EmblaCarousel from "@/components/MetroGlobal/Slide";
import { Button, Flex, Text } from "@chakra-ui/react";
import { IoChatbubbleOutline } from "react-icons/io5";
const ClientPage = () => {
  const OPTIONS = { align: "start" };
  const SLIDE_COUNT = 5;
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

  return (
    <Flex
      w={"full"}
      bg={"#f4f4f4"}
      p={{
        smDown: 2,
        smToMd: 2,
        mdTo2xl: 4,
      }}>
      <Flex
        w={"full"}
        height={"full"}
        pos={"relative"}
        flexDirection={"column"}
        gap={10}
        bg={"#121212"}
        p={{
          smDown: 2,
          smToMd: 2,
          mdTo2xl: 4,
        }}
        rounded={"2xl"}>
        <Flex w={"full"} justifyContent={"flex-start"} alignItems={"center"}>
          <Text
            color={"#f4f4f4"}
            fontSize={[18, 18, 22, 30, 40]}
            fontWeight={"medium"}>
            What our clients say
          </Text>
        </Flex>
        <Flex w={"full"}>
          <EmblaCarousel slides={SLIDES} options={OPTIONS} />
        </Flex>
        <Flex
          w={"full"}
          p={2}
          gap={5}
          flexDirection={{
            smDown: "column",
            smToMD: "column",
            mdTo2xl: "row",
          }}>
          <Flex w={"full"} gap={2}>
            <Flex
              bg={"#EF7826"}
              w={55}
              h={"full"}
              p={[3, 3, 2, 2, 2]}
              justifyContent={"center"}
              alignItems={"center"}
              rounded={"xl"}>
              <IoChatbubbleOutline size={19} />
            </Flex>
            <Flex flexDirection={"column"} gap={1}>
              <Text fontSize={[13, 13, 15, 20]} color={"#ffffff"}>
                Let’s Build Something Amazing Together
              </Text>
              <Text fontSize={[8, 8, 12, 13]} color={"#f4f4f490"}>
                Share your project details with us, and we’ll take it from
                there.
              </Text>
            </Flex>
          </Flex>
          <Button bg={"#ffffff"} alignSelf={"center"} px={5} color={"#EF7826"}>
            Get in Touch
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default ClientPage;
