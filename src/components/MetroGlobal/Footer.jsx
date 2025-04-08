import { Flex, Image, List, SimpleGrid, Text } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import Logo from "@/assets/logo.svg";

import Metro from "@/assets/metro.png";

import { FaFacebook, FaInstagram, FaLinkedinIn } from "react-icons/fa";
const Footer = () => {
  const menu = [
    {
      name: "Home",
      hrefLink: "/",
    },

    {
      name: "About Us",
      hrefLink: "/about",
    },

    {
      name: "Our Services",
      hrefLink: "/services",
    },

    {
      name: "Recent Projects",
      hrefLink: "/projects",
    },
  ];
  const address = [
    {
      title:
        "Suite 304, Zeto Court, Oshogbo close Area 11 Oshogbo close Area 11, Garki, Abuja.",
    },
    {
      title: "+234 802 356 7392",
    },
    {
      title: "info@metrosourceltd.com",
    },
  ];
  return (
    <Flex
      w={"100%"}
      flexDirection={"column"}
      gap={2}
      bg={"#121212"}
      pos={"relative"}>
      <Flex p={4}>
        <Image src={Logo} />
      </Flex>
      <SimpleGrid columns={[1, 1, 3, 3, 3]} gap={10} p={4}>
        <Flex flexDirection={"column"} gap={4}>
          <Text color='#ef7826' fontSize={16}>
            Menu
          </Text>
          <List.Root listStyle={"none"} gap={2}>
            {menu.map((menuItem) => (
              <List.Item
                color={"#F1EFE7"}
                textAlign={"left"}
                key={menuItem.name}
                cursor={"pointer"}
                fontWeight={"normal"}
                _hover={{ color: "#ef7826" }}
                fontSize={14}>
                <NavLink to={menuItem.hrefLink}>{menuItem.name}</NavLink>
              </List.Item>
            ))}
          </List.Root>
        </Flex>
        <Flex flexDirection={"column"} gap={4}>
          <Text color='#ef7826' fontSize={16}>
            Get in Touch
          </Text>
          <List.Root listStyle={"none"} gap={2}>
            {address.map((item) => (
              <List.Item
                color={"#F1EFE7"}
                textAlign={"left"}
                key={item.title}
                cursor={"pointer"}
                fontWeight={"normal"}
                _hover={{ color: "#ef7826" }}
                fontSize={14}>
                {item.title}
              </List.Item>
            ))}
          </List.Root>
        </Flex>
        <Flex flexDirection={"column"} gap={4}>
          <Text color='#ef7826' fontSize={16}>
            Socials
          </Text>
          <Flex w={"100%"} gap={3} alignItems={"center"}>
            <FaFacebook size={20} color='#f4f4f4' />
            <FaInstagram size={20} color='#f4f4f4' />
            <FaLinkedinIn size={20} color='#f4f4f4' />
          </Flex>
        </Flex>
      </SimpleGrid>
      <Image src={Metro} pos={"relative"} bottom={[-5, -5, -10]} w={"100%"} />

      <Flex
        w={"100%"}
        height={"20vh"}
        justifyContent={"center"}
        alignItems={"center"}
        bg={"#F1EFE7"}
        p={4}>
        <Text color={"#121212"} fontSize={16}>
          © Copyright MetroSource. All Rights Reserved
        </Text>
      </Flex>
    </Flex>
  );
};

export default Footer;
