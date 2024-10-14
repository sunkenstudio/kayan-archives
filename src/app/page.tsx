'use client';
import {
  Box,
  Divider,
  HStack,
  Image,
  Link,
  Stack,
  useMediaQuery,
  useTheme,
} from '@chakra-ui/react';
import { H1, H3, H4, Paragraph } from './_components/Typography';
// import { DonationProgress } from './_components/DonationProgress';
import { Button } from './_components/Button';
import { ArrowUpRight, HandHeart } from '@phosphor-icons/react';
import { SubscribeForm } from './_components/SubscribeForm';

export default function Home() {
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
        src="img/group-1.jpg"
        objectFit={'cover'}
        w={{ base: '100vw', md: '50vw' }}
        h="100%"
        overflow={'hidden'}
      />
      <Box
        position="absolute"
        w="100%"
        h="100%"
        bgColor={colors.green2}
        opacity={{ base: 0.7, md: 0 }}
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
        pb={'7rem'}
      >
        <H1>THE KAYAN ARCHIVES</H1>
        <H3
          fontStyle={'italic'}
          color={colors.green1}
          textShadow={{ base: `1px 1px 4px ${colors.dark}`, md: 'none' }}
        >
          SARAWAK, MALAYSIA
        </H3>
        {isDesktop ? (
          <H4
            w={{ base: '100%', md: '85%' }}
            backgroundColor={{ base: 'rgba(0,0,0,.5)', md: 'inherit' }}
          >
            A multidisciplinary project in collaboration with the Kayan tribe of
            Borneo to document, study, and preserve Kayan culture
          </H4>
        ) : (
          <Paragraph w={{ base: '100%', md: '85%' }} p={'1rem'}>
            A multidisciplinary project in collaboration with the Kayan tribe of
            Borneo to document, study, and preserve Kayan culture
          </Paragraph>
        )}
        {/* {isDesktop && (
          <DonationProgress
            percentage={75}
            currentAmount={7500}
            targetAmount={10000}
          />
        )} */}
        <Stack direction={{ base: 'column', md: 'row' }} gap="1rem">
          <Link
            target="_blank"
            href="https://www.gofundme.com/f/help-fund-kayan-documentary"
            w={{ base: '100%', md: '40%' }}
          >
            <Button
              variant="primary"
              title="Support"
              leftIcon={<HandHeart color={colors.light} size={'2rem'} />}
              rightIcon={<ArrowUpRight color={colors.light} size={'2rem'} />}
              justifyContent={'space-between'}
              stretch
            />
          </Link>
          <Link href="/about" w={{ base: '100%', md: '40%' }}>
            <Button variant="secondary" title="Learn More" stretch />
          </Link>
        </Stack>
        {isDesktop && <Divider />}
        {isDesktop && (
          <>
            <H4>Sign up to receive news and updates...</H4>
            <SubscribeForm />
          </>
        )}
      </Stack>
    </HStack>
  );
}
