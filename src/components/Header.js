import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack, Heading } from "@chakra-ui/react";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: hello@example.com",
    id: "mail01"
  },
  {
    icon: faGithub,
    url: "https://github.com",
    id: "github01"
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com",
    id: "linkedin01"
  },
  {
    icon: faMedium,
    url: "https://medium.com",
    id: "medium01"
  },
  {
    icon: faStackOverflow,
    url: "https://stackoverflow.com",
    id: "stackoverflow01"
  },
];

const navLinks = [
  {
    display: "Contact Me",
    url: "contactme"
  },
  {
    display: "Projects",
    url: "projects"
  }
]
const Header = () => {
  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  const internalLinks = navLinks.map((nav) => {
    return (
      <a href={`#${nav.url}`} onClick={handleClick(nav.url)} key={nav.display}>
          {nav.display}
      </a>
    )
  })
  const displaySocials = socials.map((socials) => {
    return (
      <a href={socials.url} key={socials.id} target="_blank" >
          <FontAwesomeIcon icon={socials.icon} size="2x" />
      </a>
    )
  })
  const useScrollPosition = () => {
    const [scrollPosition, setScrollPosition] = useState(0)

    useEffect(() => {
      const handleScroll = (e) => {
        setScrollPosition(window.scrollY)
      }
      window.addEventListener('scroll', handleScroll)
      return () => {
        window.removeEventListener('scroll', handleScroll)
      }
    }, [])
    return scrollPosition
  }
  const translateScroll = () => {
    const [topBar, setTopBar] = useState(0)
    const scrollY = useScrollPosition()
    useEffect(() => {
      if (scrollY < 800) {
        setTopBar(0)
      } else {
        setTopBar(200)
      }
    }, [scrollY])
    return `translateY(-${topBar}px)`
  }
  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      transform={translateScroll}
      transitionProperty="transform"
      transitionDuration=".5s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
    >
      <Box color="white" maxWidth="1280px" margin="0 auto" >
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav key={"socials_nav"}>
            <HStack>
              {displaySocials}
            </HStack>
          </nav>
          <nav key={"internal_nav"}>
            <HStack spacing={8}>
              {internalLinks}
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
