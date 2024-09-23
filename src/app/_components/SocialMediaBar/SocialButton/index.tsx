'use client';

import { Box, Link, useTheme } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface SocialButtonProps {
  href: string;
  children: ReactNode;
}

export const SocialButton = ({ href, children }: SocialButtonProps) => {
  const { colors } = useTheme();
  return (
    <Link href={href}>
      <Box
        backgroundColor={{ base: colors.dark, md: colors.green2 }}
        padding={'.5rem'}
        borderRadius={'5rem'}
        boxShadow={'1px 1px 5px 0px rgba(0,0,0,0.75)'}
        transition="all .25s ease"
        _hover={{ transform: 'scale(1.15)' }}
      >
        {children}
      </Box>
    </Link>
  );
};
