import { Heading, HStack, Image, Text, VStack, Box, Link } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc, link = "" }) => {
  return (
    <HStack key={title}>
      <Box bg="white" borderRadius='lg' shadow="2xl" rounded="lg">
        <Image src={imageSrc} alt={description} rounded="lg"/>
        <Box p="6" color="black">
          <Heading mb="3" size="md">{title}</Heading>
          <Text mb="4">{description}</Text>
          <Link href={link}>
            See More <FontAwesomeIcon icon={faArrowRight} size="1x" />
          </Link>
        </Box>
      </Box>
    </HStack>
  )
};

export default Card;
