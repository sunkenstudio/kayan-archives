'use client';
import {
  Box,
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
import { Button } from './_components/Button';

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
        <H3 fontStyle={'italic'} color={colors.green1}>
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
          <Paragraph w={{ base: '100%', md: '85%' }} p={'1rem'} mt={'8rem'}>
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
        <Stack direction={{ base: 'column', md: 'row' }}>
          <Button type="primary" title="Support" />
          <Button type="secondary" title="Learn More" />
        </Stack>
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
            <Button type="primary" title="Subscribe" />
          </Stack>
        )}
      </Stack>
    </HStack>
  );
}
