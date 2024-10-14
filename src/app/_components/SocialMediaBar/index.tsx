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
      <SocialButton
        href="#"
        backgroundColor={'#1877F2'}
        opacity={0.6}
        cursor={'not-allowed'}
      >
        <FacebookLogo size={'2rem'} color={colors.light} />
      </SocialButton>
      <SocialButton
        href="https://www.instagram.com/kayanarchives/"
        background={
          'radial-gradient(circle farthest-corner at 35% 90%, #fec564, transparent 50%), radial-gradient(circle farthest-corner at 0 140%, #fec564, transparent 50%), radial-gradient(ellipse farthest-corner at 0 -25%, #5258cf, transparent 50%), radial-gradient(ellipse farthest-corner at 20% -50%, #5258cf, transparent 50%), radial-gradient(ellipse farthest-corner at 100% 0, #893dc2, transparent 50%), radial-gradient(ellipse farthest-corner at 60% -20%, #893dc2, transparent 50%), radial-gradient(ellipse farthest-corner at 100% 100%, #d9317a, transparent), linear-gradient(#6559ca, #bc318f 30%, #e33f5f 70%, #f77638 90%, #fec66d 100%);'
        }
      >
        <InstagramLogo size={'2rem'} color={colors.light} />
      </SocialButton>
      <SocialButton
        href="#"
        backgroundColor={'#000'}
        opacity={0.6}
        cursor={'not-allowed'}
      >
        <TiktokLogo size={'2rem'} color={colors.light} />
      </SocialButton>
    </HStack>
  );
};
