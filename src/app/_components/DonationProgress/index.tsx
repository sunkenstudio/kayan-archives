'use client';
import React from 'react';
import { Box, Progress, HStack, useTheme } from '@chakra-ui/react';
import { H4 } from '../Typography';

interface DonationProgressProps {
  percentage: number;
  currentAmount: number;
  targetAmount: number;
}

export const DonationProgress = ({
  percentage,
  currentAmount,
  targetAmount,
}: DonationProgressProps) => {
  const { colors } = useTheme();

  return (
    <Box
      zIndex={999}
      w="100%"
      p={4}
      borderRadius="lg"
      bgColor={colors.light}
      color={colors.dark}
      border={`4px solid ${colors.green2}`}
    >
      <H4 mb={2}>Fundraiser Progress: {percentage}%</H4>
      <Progress
        value={percentage}
        size="lg"
        borderRadius="md"
        colorScheme="green"
        hasStripe
        isAnimated
      />
      <HStack justifyContent="space-between" mt={2}>
        <H4 fontWeight="bold">${currentAmount.toLocaleString()}</H4>
        <H4 fontWeight="bold">${targetAmount.toLocaleString()}</H4>
      </HStack>
    </Box>
  );
};
