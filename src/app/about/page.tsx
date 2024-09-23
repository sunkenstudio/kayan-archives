'use client';
import {
  Box,
  Divider,
  HStack,
  Image,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  useMediaQuery,
  useTheme,
} from '@chakra-ui/react';
import { H3, Paragraph } from '../_components/Typography';

export default function About() {
  const [isDesktop] = useMediaQuery('(min-width: 800px)');
  const { colors } = useTheme();

  return (
    <HStack
      w="100%"
      h="100%"
      alignItems={'flex-start'}
      bgColor={colors.light}
      color={colors.green2}
    >
      <Image
        src="img/natural-1.jpg"
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
        <Tabs
          isFitted
          variant="unstyled"
          color={{ base: colors.light, md: colors.dark }}
          textShadow={{ base: `1px 1px 4px ${colors.dark}`, md: 'none' }}
        >
          <TabList mb="1em">
            <Tab
              _selected={{
                borderBottom: `4px solid ${colors.green2}`,
                fontWeight: 'bold',
              }}
            >
              Who We Are
            </Tab>
            <Tab
              _selected={{
                borderBottom: `4px solid ${colors.green2}`,
                fontWeight: 'bold',
              }}
            >
              The Story
            </Tab>
            <Tab
              _selected={{
                borderBottom: `4px solid ${colors.green2}`,
                fontWeight: 'bold',
              }}
            >
              The Plan
            </Tab>
          </TabList>
          <TabPanels color={{ base: colors.light, md: colors.dark }}>
            <TabPanel pb={'5rem'}>
              <H3 mb="1rem">Who We Are</H3>
              <Divider
                color={{ base: colors.light, md: colors.dark }}
                mb="2rem"
              />
              <Paragraph lineHeight={'2rem'}>
                I/O Studio Detroit is an American recording and film studio
                founded in Detroit, Michigan. A grassroots creative collective
                built by the Sheufelt family, I/O members have worked for the
                past decade in professional sound recording, commercial
                television and independent film projects, professional
                photography, and multimedia visual arts.
              </Paragraph>
            </TabPanel>
            <TabPanel pb={'5rem'}>
              <H3 mb="1rem">The Story</H3>
              <Divider
                color={{ base: colors.light, md: colors.dark }}
                mb="2rem"
              />
              <Paragraph mb="1rem" lineHeight={'2rem'}>
                How did a handful of artists from the Midwest end up with plans
                to film a documentary about a little-known culture on the other
                side of the planet?
              </Paragraph>
              <Paragraph mb="1rem" lineHeight={'2rem'}>
                It started with a romance. We were invited by a Kayan family
                from the village of Long Pilah, Sarawak, to attend the winter
                celebrations and traditional wedding ceremony of our cousin,
                Cameron Sheufelt, and his wife Rebecca, who left Long Pilah to
                go to school in Kuala Lumpur, Malaysia's capital and largest
                city. The two met in 2022 when Cameron followed an adventurous
                whim to go backpacking alone throughout Southeast Asia, and have
                since begun to build a life together in Kuala Lumpur.
              </Paragraph>
              <Paragraph mb="1rem" lineHeight={'2rem'}>
                The idea of the documentary was conceived as a way of recording
                Kayan wedding traditions for posterity. Prior to the rapid
                modernization of their lifeways in recent history, fueled by the
                creation of logging roads through the jungle and the expansion
                of palm oil plantations, the Kayan had little contact with other
                cultures, and maintained primarily oral histories. As more
                modern lifestyles become increasingly available to Kayan youth,
                fewer are learning the older traditions, and tribal elders fear
                that these parts of their culture will die off if not archived.
              </Paragraph>
            </TabPanel>
            <TabPanel pb={'5rem'}>
              <H3 mb="1rem">The Plan</H3>
              <Divider
                color={{ base: colors.light, md: colors.dark }}
                mb="2rem"
              />
              <Paragraph mb="1rem" lineHeight={'2rem'}>
                We are working to secure grant funding, donations, and
                sponsorships, both towards the development of a more in-depth
                cultural archive and to deliver necessities to the Kayan
                community in Long Pilah, which is situated in a fairly remote
                region of Sarawak along the Baram River.
              </Paragraph>
              <Paragraph mb="1rem" lineHeight={'2rem'}>
                To participate in and film the holiday celebration, our team
                will travel to Long Pilah this December, living in the village
                for ten days before returning to Detroit. In the following
                months, we will edit the footage into a short vignette
                documentary to be used as proof of concept to procure more
                extensive grant funding and return the following summer to film
                a feature-length documentary.
              </Paragraph>
              <Paragraph mb="1rem" lineHeight={'2rem'}>
                These plans having formed outside of the immediate support of an
                academic or creative institution, the documentary film and
                research, including travel and equipment expenses, will be
                primarily self-funded by the I/O Studio group and Sheufelt
                family. While this presents a substantial challenge, we are
                working hard to raise the necessary funds. If you are interested
                in making a donation, check out our crowdfunding campaign on the
                SUPPORT THE PROJECT page.
              </Paragraph>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Stack>
    </HStack>
  );
}
