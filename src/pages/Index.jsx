import React, { useState } from "react";
import { ChakraProvider, Box, VStack, Heading, Text, Input, Button, FormControl, FormLabel, useToast, Container, Image } from "@chakra-ui/react";
import { FaSignInAlt, FaUserPlus, FaStore } from "react-icons/fa";

const Index = () => {
  const toast = useToast();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    // Implement login logic using the '/login' endpoint
    // This is a placeholder since we can't perform actual API calls here
    setIsLoggedIn(true);
    toast({
      title: "Login Successful.",
      description: "You're logged in and can now create a restaurant.",
      status: "success",
      duration: 9000,
      isClosable: true,
    });
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    // Implement signup logic using the '/signup' endpoint
    // This is a placeholder since we can't perform actual API calls here
    toast({
      title: "Signup Successful.",
      description: "Your account has been created, please log in.",
      status: "success",
      duration: 9000,
      isClosable: true,
    });
  };

  const handleCreateRestaurant = async (e) => {
    e.preventDefault();
    // Implement create restaurant logic using the '/restaurants' endpoint
    // This is a placeholder since we can't perform actual API calls here
    toast({
      title: "Restaurant Created.",
      description: "Your restaurant has been added to the list.",
      status: "success",
      duration: 9000,
      isClosable: true,
    });
  };

  return (
    <ChakraProvider>
      <Container centerContent p={8}>
        <Image src="https://images.unsplash.com/photo-1572116469696-31de0f17cc34?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjb2NrdGFpbCUyMGJhcnxlbnwwfHx8fDE3MDk3OTEwODR8MA&ixlib=rb-4.0.3&q=80&w=1080" borderRadius="md" alt="Cocktail Bar" />
        <VStack spacing={8}>
          <Heading as="h1" size="2xl" textAlign="center">
            BarFlies-Drink Specials
          </Heading>
          <Text>{isLoggedIn ? "Create your drink specials below." : "Sign in to create your restaurant and post drink specials."}</Text>
          {!isLoggedIn && (
            <>
              <FormControl isRequired>
                <FormLabel>Email</FormLabel>
                <Input placeholder="Enter your email" onChange={(e) => setEmail(e.target.value)} />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Password</FormLabel>
                <Input placeholder="Enter your password" type="password" onChange={(e) => setPassword(e.target.value)} />
              </FormControl>
              <Button leftIcon={<FaSignInAlt />} onClick={handleLogin}>
                Login
              </Button>
              <Button leftIcon={<FaUserPlus />} onClick={handleSignUp}>
                Sign Up
              </Button>
            </>
          )}
          {isLoggedIn && (
            <Button leftIcon={<FaStore />} onClick={handleCreateRestaurant}>
              Create Restaurant
            </Button>
          )}
        </VStack>
      </Container>
    </ChakraProvider>
  );
};

export default Index;
