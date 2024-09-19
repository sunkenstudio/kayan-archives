'use client';
import {
  Button,
  Divider,
  HStack,
  Image,
  Input,
  Stack,
  useMediaQuery,
  useTheme,
} from '@chakra-ui/react';
import { H1, H3, H4, Paragraph } from './_components/Typography';
import { DonationProgress } from './_components/DonationProgress';

export default function Home() {
  const [isDesktop] = useMediaQuery('(min-width: 800px)');
  const { colors } = useTheme();

  return (
    <HStack w="100%" h="100%" alignItems={'flex-start'}>
      <Image
        src="img/group-1.jpg"
        objectFit={'cover'}
        w={{ base: '100vw', md: '50vw' }}
        h="100%"
        overflow={'hidden'}
      />
      <Stack
        position={{ base: 'absolute', md: 'relative' }}
        gap={{ base: '2rem', md: '3rem' }}
        w={{ base: '100vw', md: '50vw' }}
        color={{ base: colors.light, md: 'inherit' }}
        h="90%"
        mt={{ base: '6rem', md: '5rem' }}
        textShadow={{ base: `1px 1px 4px ${colors.dark}`, md: 'none' }}
        p={{ base: '1rem', md: '2.5rem' }}
        overflowY={'scroll'}
      >
        <H1>THE KAYAN ARCHIVES</H1>
        <H3 fontStyle={'italic'}>SARAWAK, MALAYSIA</H3>
        {isDesktop ? (
          <H4
            w={{ base: '100%', md: '85%' }}
            backgroundColor={{ base: 'rgba(0,0,0,.5)', md: 'inherit' }}
          >
            A multidisciplinary project in collaboration with the Kayan tribe of
            Borneo to document, study, and preserve Kayan culture
          </H4>
        ) : (
          <Paragraph
            w={{ base: '100%', md: '85%' }}
            backgroundColor={{ base: 'rgba(0,0,0,.5)', md: 'inherit' }}
            p={'1rem'}
            mt={'8rem'}
          >
            A multidisciplinary project in collaboration with the Kayan tribe of
            Borneo to document, study, and preserve Kayan culture
          </Paragraph>
        )}
        {isDesktop && (
          <DonationProgress
            percentage={75}
            currentAmount={7500}
            targetAmount={10000}
          />
        )}
        <HStack>
          <Button
            p={'1.5rem'}
            borderRadius={0}
            transition="all .25s ease"
            _hover={{ transform: 'scale(1.05)' }}
            backgroundColor={colors.dark}
            color={colors.light}
          >
            SUPPORT
          </Button>
          <Button
            p={'1.5rem'}
            borderRadius={0}
            transition="all .25s ease"
            _hover={{ transform: 'scale(1.05)' }}
          >
            LEARN MORE
          </Button>
        </HStack>
        {isDesktop && <Divider />}
        {isDesktop && (
          <Stack gap="1rem">
            <H4>Sign up to receive news and updates...</H4>
            <Input
              bgColor={colors.gray}
              border="none"
              py="2rem"
              placeholder="EMAIL"
            />
            <Button
              p={'1.5rem'}
              borderRadius={0}
              transition="all .25s ease"
              _hover={{ transform: 'scale(1.05)' }}
              backgroundColor={colors.dark}
              color={colors.light}
            >
              SUBSCRIBE
            </Button>
          </Stack>
        )}
      </Stack>
    </HStack>
  );
}
