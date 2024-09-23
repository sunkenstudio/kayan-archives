'use client';
import {
  Box,
  Drawer,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  HStack,
  IconButton,
  Image,
  Link,
  Stack,
  useDisclosure,
  useMediaQuery,
  useTheme,
} from '@chakra-ui/react';
import React from 'react';
import { H4, H5 } from '../Typography';
import { List } from '@phosphor-icons/react';
import { usePathname } from 'next/navigation';

export const NavBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isDesktop] = useMediaQuery('(min-width: 800px)');
  const currentPath = usePathname();
  const { colors } = useTheme();

  const links = [
    { label: 'HOME', path: '/' },
    { label: 'ABOUT', path: '/about' },
    { label: 'SUPPORT', path: '/support' },
    { label: 'CONTACT', path: '/contact' },
  ];

  return (
    <Box
      w="100%"
      display={'flex'}
      alignItems={'center'}
      justifyContent={'space-between'}
      h={'5rem'}
      pl={'3rem'}
      backgroundColor={{ base: 'transparent', md: colors.gray }}
      position={'absolute'}
      top={0}
      color={colors.dark}
    >
      {isDesktop ? (
        <HStack gap={'1rem'}>
          <Image
            src="img/io-detroit.png"
            objectFit={'contain'}
            w="4rem"
            h="auto"
            bgColor={colors.dark}
          />
          <H4>THE KAYAN ARCHIVES</H4>
        </HStack>
      ) : (
        <span></span>
      )}
      {isDesktop ? (
        <HStack h="100%" gap={1}>
          {links.map((i) => {
            const isCurrent = i.path === currentPath;
            return (
              <Link
                key={i.label}
                href={isCurrent ? undefined : i.path}
                backgroundColor={isCurrent ? colors.green1 : 'inherit'}
                color={isCurrent ? colors.light : 'inherit'}
                h="100%"
                display="flex"
                alignItems="center"
                justifyContent="center"
                flex="1"
                px="3rem"
                minWidth="100px"
                cursor={isCurrent ? 'not-allowed' : 'pointer'}
                border={'none'}
              >
                <H5>{i.label}</H5>
              </Link>
            );
          })}
        </HStack>
      ) : (
        <IconButton
          aria-label="Navigation"
          icon={<List size={'1.5rem'} />}
          onClick={onOpen}
          backgroundColor={colors.light}
          padding={'.25rem'}
          borderRadius={'5rem'}
          boxShadow={'1px 1px 5px 0px rgba(0,0,0,0.75)'}
          transition="all .25s ease"
          mr="1rem"
          zIndex={999}
        />
      )}
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent bgColor={colors.dark}>
          <DrawerCloseButton color={colors.light} />
          <Stack
            mt={'3rem'}
            alignItems={'center'}
            p={3}
            gap={'2rem'}
            color={colors.light}
          >
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/support">Support</Link>
            <Link href="/contact">Contact</Link>
          </Stack>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};
