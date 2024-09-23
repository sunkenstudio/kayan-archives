'use client';

import { FormikProvider, useFormik } from 'formik';
import { useState } from 'react';
import { sendSubscriberEmail } from '../../actions';
import {
  FormControl,
  FormLabel,
  Input,
  Stack,
  useTheme,
} from '@chakra-ui/react';
import { Button } from '../Button';

export const SubscribeForm = () => {
  const [isFiring, setIsFiring] = useState(false);
  const { colors } = useTheme();

  const formik = useFormik({
    initialValues: {} as Record<string, string>,
    onSubmit: () => {
      console.log('fire', formik.values);
      setIsFiring(true);
      sendSubscriberEmail(formik.values).then((res) => {
        if (res.success) {
          alert('Email sent!');
          setIsFiring(false);
        }
        if (res.error) {
          alert('Error sending email!');
          setIsFiring(false);
        }
      });
    },
  });
  return (
    <FormikProvider value={formik}>
      <form
        onSubmit={formik.handleSubmit}
        style={{ display: 'flex', width: '100%', justifyContent: 'center' }}
      >
        <Stack gap="1rem" w="100%">
          <FormControl isRequired>
            <FormLabel htmlFor={'input-email'}>EMAIL</FormLabel>
            <Input
              id="input-email"
              type="email"
              bgColor={colors.gray}
              border="none"
              py="2rem"
              placeholder="janedoe@gmail.com"
              value={formik?.values?.email}
              onChange={formik.handleChange}
            />
          </FormControl>
          <Button
            type="submit"
            variant="primary"
            title="Subscribe"
            stretch
            isLoading={isFiring}
          />
        </Stack>
      </form>
    </FormikProvider>
  );
};
