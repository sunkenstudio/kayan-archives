'use client';
import {
  Box,
  HStack,
  Image,
  Input,
  Stack,
  Textarea,
  useMediaQuery,
  useTheme,
} from '@chakra-ui/react';
import { H3, H4 } from '../_components/Typography';
import { Button } from '../_components/Button';

export default function Contact() {
  const [isDesktop] = useMediaQuery('(min-width: 800px)');
  const { colors } = useTheme();

  return (
    <HStack
      w="100%"
      h="100%"
      alignItems={'flex-start'}
      bgColor={colors.light}
      color={colors.dark}
    >
      <Image
        src="img/group-2.png"
        objectFit={'cover'}
        w={{ base: '100vw', md: '50vw' }}
        h="105%"
        overflow={'hidden'}
      />
      {!isDesktop && (
        <Box
          position="absolute"
          w="100%"
          h="100%"
          bgColor={colors.green2}
          opacity={0.7}
        />
      )}
      <Stack
        position={{ base: 'absolute', md: 'relative' }}
        gap={{ base: '2rem', md: '2rem' }}
        w={{ base: '100vw', md: '50vw' }}
        color={{ base: colors.light, md: 'inherit' }}
        h="90%"
        mt={{ base: '6rem', md: '5rem' }}
        textShadow={{ base: `1px 1px 4px ${colors.dark}`, md: 'none' }}
        p={{ base: '1rem', md: '2.5rem' }}
        overflowY={'scroll'}
        pb={'5rem'}
      >
        <H3>Contact Us</H3>
        <Stack>
          <Input
            bgColor={colors.gray}
            border="none"
            placeholder="Jane"
            color={colors.dark}
          />
          <Input
            bgColor={colors.gray}
            border="none"
            placeholder="Doe"
            color={colors.dark}
          />
          <Input
            bgColor={colors.gray}
            border="none"
            placeholder="janedoe@gmail.com"
            color={colors.dark}
          />
          <Textarea
            bgColor={colors.gray}
            border="none"
            placeholder="Message..."
            color={colors.dark}
          />
          <Button variant="primary" title="Submit" stretch />
        </Stack>
      </Stack>
    </HStack>
  );
}
