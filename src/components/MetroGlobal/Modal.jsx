import {
    Box,
    Button,
    CloseButton,
    Dialog,
    DialogTrigger,
    DialogContent,
    DialogCloseTrigger,
    Text,
    useDisclosure,
    Flex,
    Portal,
  } from "@chakra-ui/react";
  import { motion, AnimatePresence } from "framer-motion";
    
  const dialogVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 300,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      y: 20,
      transition: { duration: 0.2 },
    },
  };
  
  const Modal = ({ title, triggerLabel = "Open", children }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
  
    return (
      <Dialog open={isOpen} onOpenChange={(open) => (open ? onOpen() : onClose())}>
        <DialogTrigger asChild>
          {/* <Button
            onClick={onOpen}
            bg="orange.500"
            color="white"
            rounded="full"
            px={6}
            py={2}
            _hover={{ bg: "orange.600" }}
          >
            {triggerLabel}
          </Button> */}
        </DialogTrigger>
  
        <Portal>
          <AnimatePresence>
            {isOpen && (
              <DialogContent maxW={{ base: "90%", md: "lg" }} w="full" bg="white" p={6} rounded="2xl" shadow="xl">
              <motion.div
                variants={dialogVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                style={{ transformOrigin: "center" }}
              >
                <Flex justify="space-between" align="center" mb={4}>
                  <Text fontSize="xl" fontWeight="bold" color="orange.500">
                    {title}
                  </Text>
                  <DialogCloseTrigger asChild>
                    <CloseButton />
                  </DialogCloseTrigger>
                </Flex>
                <Box>{children}</Box>
              </motion.div>
            </DialogContent>
            )}
          </AnimatePresence>
        </Portal>
      </Dialog>
    );
  };
  
  export default Modal;
  