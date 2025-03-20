import { Flex, Image, Text } from "@chakra-ui/react";
import m1 from "@/assets/m1.png";
import m2 from "@/assets/m2.png";
export default function Mission() {
  const vision = [
    {
      id: 1,
      img: m1,
      title: "Our Vision",
      writeUp:
        "``To be global leader, most client focused and technology enabled solution provider to the built environments.``",
    },
    {
      id: 2,
      img: m2,
      title: "Our Mission",
      writeUp:
        "``To be the most preferred indigenous design and Construction Company in Nigeria, by being innovative and customer centric in our Approach``",
    },
  ];
  return (
    <Flex
      width={"100%"}
      height={"100vh"}
      gap={[2, 2, 4]}
      flexWrap={"wrap"}
      justifyContent={"center"}
      alignItems={"center"}>
      {vision.map((item) => (
        <Flex
          key={item.id}
          pos={"relative"}
          flexDirection={"column"}
          alignItems={"center"}
          w={{
            smDown: "95%",
            smToMd: "95%",
            mdTo2xl: "40%",
          }}
          h={["50vh", "50vh", "100%"]}>
          <Image src={item.img} w={"100%"} h={"100%"} fit={"contain"} />
          <Flex
            w={"full"}
            height={"full"}
            justifyContent={"space-between"}
            flexDirection={"column"}>
            <Text></Text>
            <Text></Text>
          </Flex>
        </Flex>
      ))}
    </Flex>
  );
}
