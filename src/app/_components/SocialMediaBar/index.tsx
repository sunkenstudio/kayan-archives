'use client';
import { Box, HStack, Link, useTheme } from '@chakra-ui/react';
import { FacebookLogo, InstagramLogo, TiktokLogo } from '@phosphor-icons/react';
import React from 'react';

export const SocialMediaBar = () => {
  const { colors } = useTheme();
  return (
    <HStack
      position={'absolute'}
      bottom={'1rem'}
      w="100%"
      justifyContent={'center'}
    >
      <Link href="https://facebook.com">
        <Box
          backgroundColor={colors.light}
          padding={'.25rem'}
          borderRadius={'5rem'}
          boxShadow={'1px 1px 5px 0px rgba(0,0,0,0.75)'}
          transition="all .25s ease"
          _hover={{ transform: 'scale(1.15)' }}
        >
          <FacebookLogo size={'2rem'} />
        </Box>
      </Link>
      <Link href="https://instagram.com">
        <Box
          backgroundColor={colors.light}
          padding={'.25rem'}
          borderRadius={'5rem'}
          boxShadow={'1px 1px 5px 0px rgba(0,0,0,0.75)'}
          transition="all .25s ease"
          _hover={{ transform: 'scale(1.15)' }}
        >
          <InstagramLogo size={'2rem'} />
        </Box>
      </Link>
      <Link href="https://tiktok.com">
        <Box
          backgroundColor={colors.light}
          padding={'.25rem'}
          borderRadius={'5rem'}
          boxShadow={'1px 1px 5px 0px rgba(0,0,0,0.75)'}
          transition="all .25s ease"
          _hover={{ transform: 'scale(1.15)' }}
        >
          <TiktokLogo size={'2rem'} />
        </Box>
      </Link>
    </HStack>
  );
};
