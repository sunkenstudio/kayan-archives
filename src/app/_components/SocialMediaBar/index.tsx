'use client';
import { HStack, useMediaQuery, useTheme } from '@chakra-ui/react';
import { FacebookLogo, InstagramLogo, TiktokLogo } from '@phosphor-icons/react';
import React from 'react';
import { SocialButton } from './SocialButton';

export const SocialMediaBar = () => {
  const { colors } = useTheme();
  const [isDesktop] = useMediaQuery('(min-width: 800px)');

  return (
    <HStack
      position={'absolute'}
      bottom={'1rem'}
      w={{ base: '100%', md: '30%' }}
      justifyContent={{ base: 'center', md: 'flex-start' }}
      ml={{ base: 0, md: '3rem' }}
      gap={{ base: '1rem', md: '1.5rem' }}
    >
      <SocialButton href="https://facebook.com">
        <FacebookLogo
          size={isDesktop ? '2.5rem' : '2rem'}
          color={colors.light}
        />
      </SocialButton>
      <SocialButton href="https://instagram.com">
        <InstagramLogo
          size={isDesktop ? '2.5rem' : '2rem'}
          color={colors.light}
        />
      </SocialButton>
      <SocialButton href="https://tiktok.com">
        <TiktokLogo size={isDesktop ? '2.5rem' : '2rem'} color={colors.light} />
      </SocialButton>
    </HStack>
  );
};
