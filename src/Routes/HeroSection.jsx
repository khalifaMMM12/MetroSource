import Footer from "@/components/MetroGlobal/Footer";
import Navbar from "@/components/MetroGlobal/Navbar";
import ClientPage from "@/Pages/clientsPage";
import CoreValues from "@/Pages/CoreValue";
import Home from "@/Pages/Home";
import Mission from "@/Pages/Mission";
import RecentProjects from "@/Pages/RecentProjects";
import Services from "@/Pages/Services";
import { Flex } from "@chakra-ui/react";

const HeroSection = () => {
  return (
    <Flex flex={1} w={"full"} flexDirection={"column"} bg={"#f4f4f4"}>
      <Navbar />
      <Home />
      <Services />
      <ClientPage />
      <CoreValues />
      <Mission />
      <RecentProjects />
      <Footer />
    </Flex>
  );
};

export default HeroSection;
