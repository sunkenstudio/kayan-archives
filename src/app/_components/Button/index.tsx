'use client';
import { Button as ChakraButton, Link, useTheme } from '@chakra-ui/react';
import { ArrowUpRight } from '@phosphor-icons/react';

interface ButtonProps {
  type: 'primary' | 'secondary';
  title: string;
}
export const Button = ({ type, title, ...rest }: ButtonProps) => {
  const { colors } = useTheme();

  if (type === 'primary') {
    return (
      <ChakraButton
        p={'1.5rem'}
        borderRadius={0}
        transition="all .25s ease"
        _hover={{ transform: 'scale(1.05)', cursor: 'pointer' }}
        backgroundColor={{ base: colors.dark, md: colors.green2 }}
        color={colors.light}
        minWidth={{ base: '100%', md: '150px' }}
        {...rest}
      >
        {title.toUpperCase()}
      </ChakraButton>
    );
  }
  if (type === 'secondary') {
    return (
      <ChakraButton
        p={'calc(1.5rem - 4px)'}
        borderRadius={0}
        transition="all .25s ease"
        _hover={{ transform: 'scale(1.05)' }}
        border={{
          base: `4px solid ${colors.light}`,
          md: `4px solid ${colors.green2}`,
        }}
        textShadow={{
          base: `1px 1px 2px ${colors.green2}`,
          md: 'none',
        }}
        minWidth={{ base: '100%', md: '150px' }}
        color={{ base: colors.light, md: colors.green2 }}
        {...rest}
      >
        {title.toUpperCase()}
      </ChakraButton>
    );
  }

  return <>Missing Button Type</>;
};
