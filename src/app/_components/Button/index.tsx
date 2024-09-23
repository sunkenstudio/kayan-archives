'use client';
import {
  ButtonProps as ChakraButtonProps,
  Button as ChakraButton,
  useTheme,
} from '@chakra-ui/react';

interface ButtonProps extends ChakraButtonProps {
  variant: 'primary' | 'secondary';
  title: string;
  stretch?: boolean;
}

export const Button = ({ variant, title, stretch, ...rest }: ButtonProps) => {
  const { colors } = useTheme();

  if (variant === 'primary') {
    return (
      <ChakraButton
        p={'1.5rem'}
        borderRadius={0}
        transition="all .25s ease"
        _hover={{ transform: 'scale(1.05)', cursor: 'pointer' }}
        backgroundColor={{ base: colors.dark, md: colors.green2 }}
        color={colors.light}
        minWidth={{ base: '100%', md: '150px' }}
        w={stretch ? '100%' : '40%'}
        fontSize={'1.25rem'}
        {...rest}
      >
        {title.toUpperCase()}
      </ChakraButton>
    );
  }
  if (variant === 'secondary') {
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
        w={stretch ? '100%' : '40%'}
        fontSize={'1.25rem'}
        {...rest}
      >
        {title.toUpperCase()}
      </ChakraButton>
    );
  }

  return <>Missing Button Type</>;
};
