'use client';

import {
  Box,
  HStack,
  Image,
  Stack,
  useMediaQuery,
  useTheme,
} from '@chakra-ui/react';
import { H3, H4 } from '../_components/Typography';
import { GoFundMe } from '../_components/GoFundMe';
import Script from 'next/script';

export default function Support() {
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
      <Script async src="//iframely.net/embed.js"></Script>

      <Image
        src="img/waterfall-1.jpg"
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
        <H3>How You Can Help</H3>
        <H4>Consider becoming a donor on our crowdfunding page.</H4>
        <Box className="iframely-embed" style={{ backgroundColor: '#e6f2ee' }}>
          <Box
            className="iframely-responsive"
            style={{
              height: '500px',
            }}
          >
            <a
              href="https://www.gofundme.com/f/help-fund-kayan-documentary"
              data-iframely-url="//iframely.net/QdSi3JA"
            ></a>
          </Box>
        </Box>
        <H4>
          We will also soon be releasing a line of fundraising merchandise
          ranging from stickers and postcards to limited-run original artworks.
        </H4>
        <H4>
          To find out about in-person fundraiser events like benefit concerts
          and art sales, subscribe to our email list here.
        </H4>
        <H4>Follow us on Instagram, Facebook, and TikTok @kayanarchives</H4>
      </Stack>
    </HStack>
  );
}
