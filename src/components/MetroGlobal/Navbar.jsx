import { Button, Flex, Image, List, useBreakpointValue, Text } from "@chakra-ui/react";
import Logo from "@/assets/logo.svg";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const Navbar = () => {
  const [active, setActive] = useState(false);
  const isMobile = useBreakpointValue({ base: true, lg: false });

  const toggleActive = () => {
    setActive(!active);
  };

  const menu = [
    { name: "Home", hrefLink: "/" },
    { name: "About Us", hrefLink: "/about" },
    { name: "Our Services", hrefLink: "/services" },
    { name: "Recent Projects", hrefLink: "/projects" },
  ];

  return (
    <Flex
      as="nav"
      w="100%"
      h="80px"
      position="fixed"
      top={0}
      left={0}
      alignItems="center"
      px={{ base: 3, md: 5, lg: 7 }}
      py={{ base: 3, md: 3 }}
      bg="#f8f8f8"
      fontFamily="'Poppins', sans-serif"
      boxShadow="0px 2px 10px rgba(0, 0, 0, 0.08)"
      zIndex={1000}
      className="text-lg"
    >
      {/* Left Side: Logo + Name */}
      <Flex flex="1" alignItems="center">
        <Link to="/" style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <Image src={Logo} h={{ base: "30px", md: "40px" }} />
          {/* <Text
            fontWeight="bold"
            fontSize={{ base: "md", md: "xl" }}
            color="#121212"
            display={{ base: "block", md: "block" }}
          >
            Metro Source
          </Text> */}
        </Link>
      </Flex>

      {/* Center: Nav Links */}
      <Flex
        as="ul"
        listStyleType="none"
        gap={8}
        alignItems="center"
        display={{ base: "none", lg: "flex" }}
        flex="2"
        justifyContent="center"
      >
        {menu.map((menuItem) => (
          <li key={menuItem.name} className="group">
            <NavLink
              to={menuItem.hrefLink}
              className="relative inline-block pb-1.5 group transition-colors duration-200 hover:text-[#EF7826]"
              style={({ isActive }) => ({
                color: isActive ? "#EF7826" : "#333333",
                fontWeight: isActive ? "bold" : "500",
                fontSize: "1.2rem",
              })}
            >
              {({ isActive }) => (
                <>
                  <span className="transition-colors duration-200 hover:text-[#EF7826]">
                    {menuItem.name}
                  </span>

                  <motion.div
                    layoutId="underline"
                    className={`h-0.5 mt-1 rounded-full ${
                      isActive ? "bg-[#EF7826]" : "bg-transparent group-hover:bg-[#EF7826]"
                    } transition-colors duration-200`}
                  />
                </>
              )}
            </NavLink>
          </li>
        ))}
      </Flex>

      {/* Right Side: Get in Touch button + Mobile Icon */}
      <Flex flex="1" justifyContent="flex-end" alignItems="center" gap={4}>
        <Button
          bg="#EF7826"
          color="#fff"
          display={{ base: "none", lg: "flex" }}
          rounded="full"
          px={7}
          py={2}
          _hover={{ bg: "#d66a1f" }}
          fontSize="1.2rem"
        >
          Get in Touch
        </Button>

        {/* Mobile Menu Toggle */}
        {isMobile && (
          <Button
            onClick={toggleActive}
            bg="transparent"
            color="#121212"
            p={0}
            minW="auto"
            _hover={{ bg: "transparent" }}
          >
            {active ? <HiX size={28} /> : <HiMenuAlt3 size={28} />}
          </Button>
        )}
      </Flex>

      {/* Mobile Menu Sliding Dropdown */}
      {isMobile && (
        <motion.div
          initial={false}
          animate={active ? "open" : "closed"}
          variants={{
            open: { x: 0 },
            closed: { x: "100%" },
          }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          style={{
            position: "fixed",
            top: "70px",
            right: 0,
            background: "#e0e0e0",
            width: "100%",
            padding: "2rem",
            display: "flex",
            flexDirection: "column",
            gap: "1.5rem",
            zIndex: 20,
            boxShadow: "0px 4px 10px rgba(0,0,0,0.15)",
          }}
        >
          {menu.map((menuItem) => (
            <NavLink
              key={menuItem.name}
              to={menuItem.hrefLink}
              onClick={() => setActive(false)}
              style={({ isActive }) => ({
                position: "relative",
                textDecoration: "none",
                color: isActive ? "#EF7826" : "#333333",
                fontWeight: isActive ? "bold" : "500",
                fontSize: "1.2rem",
                paddingBottom: "5px",
                textAlign: "center",
              })}
            >
              {({ isActive }) => (
                <>
                  {menuItem.name}
                  <motion.div
                    layoutId="underline"
                    style={{
                      height: "2px",
                      backgroundColor: isActive ? "#EF7826" : "#bbb",
                      borderRadius: "2px",
                      marginTop: "4px",
                    }}
                  />
                </>
              )}
            </NavLink>
          ))}
        </motion.div>
      )}
    </Flex>
  );
};

export default Navbar;
