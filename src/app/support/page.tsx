'use client';
import { Box, HStack, Image, Link, Stack, useTheme } from '@chakra-ui/react';
import { H3, H4 } from '../_components/Typography';
import { Button } from '../_components/Button';
import {
  ArrowUpRight,
  FacebookLogo,
  HandHeart,
  InstagramLogo,
  TiktokLogo,
} from '@phosphor-icons/react';
import { SubscribeForm } from '../_components/SubscribeForm';

export default function Support() {
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
        src="img/waterfall-1.jpg"
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
        <H3>How You Can Help</H3>
        <H4>Consider becoming a donor on our crowdfunding page.</H4>
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
        <H4>Follow us on Instagram, Facebook, and TikTok @kayanarchives</H4>
        <Box display={'inline-block'}>
          <Link
            target="_blank"
            href="https://www.gofundme.com/f/help-fund-kayan-documentary"
            w={{ base: '100%', md: '40%' }}
          >
            <Button
              mr="1rem"
              mb="1rem"
              backgroundColor={'#1877F2'}
              variant="primary"
              title="Facebook"
              leftIcon={<FacebookLogo color={colors.light} size={'2rem'} />}
              rightIcon={<ArrowUpRight color={colors.light} size={'2rem'} />}
              justifyContent={'space-between'}
              w="40%"
              h="4rem"
            />
          </Link>
          <Link
            target="_blank"
            href="https://www.gofundme.com/f/help-fund-kayan-documentary"
            w={{ base: '100%', md: '40%' }}
          >
            <Button
              mr="1rem"
              mb="1rem"
              background={
                'radial-gradient(circle farthest-corner at 35% 90%, #fec564, transparent 50%), radial-gradient(circle farthest-corner at 0 140%, #fec564, transparent 50%), radial-gradient(ellipse farthest-corner at 0 -25%, #5258cf, transparent 50%), radial-gradient(ellipse farthest-corner at 20% -50%, #5258cf, transparent 50%), radial-gradient(ellipse farthest-corner at 100% 0, #893dc2, transparent 50%), radial-gradient(ellipse farthest-corner at 60% -20%, #893dc2, transparent 50%), radial-gradient(ellipse farthest-corner at 100% 100%, #d9317a, transparent), linear-gradient(#6559ca, #bc318f 30%, #e33f5f 70%, #f77638 90%, #fec66d 100%);'
              }
              variant="primary"
              title="Instagram"
              leftIcon={<InstagramLogo color={colors.light} size={'2rem'} />}
              rightIcon={<ArrowUpRight color={colors.light} size={'2rem'} />}
              justifyContent={'space-between'}
              w="40%"
              h="4rem"
            />
          </Link>
          <Link
            target="_blank"
            href="https://www.gofundme.com/f/help-fund-kayan-documentary"
            w={{ base: '100%', md: '40%' }}
          >
            <Button
              mr="1rem"
              mb="1rem"
              backgroundColor={'#000'}
              variant="primary"
              title="Tiktok"
              leftIcon={<TiktokLogo color={colors.light} size={'2rem'} />}
              rightIcon={<ArrowUpRight color={colors.light} size={'2rem'} />}
              justifyContent={'space-between'}
              w="40%"
              h="4rem"
            />
          </Link>
        </Box>
        <H4>
          To find out about in-person fundraiser events like benefit concerts
          and art sales, subscribe to our email list here.
        </H4>
        <SubscribeForm />
        <H4>
          We will also soon be releasing a line of fundraising merchandise
          ranging from stickers and postcards to limited-run original artworks.
        </H4>
      </Stack>
    </HStack>
  );
}
