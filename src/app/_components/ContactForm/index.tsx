'use client';

import { FormikProvider, useFormik } from 'formik';
import { useState } from 'react';
import { sendContactEmail } from '../../actions';
import {
  FormControl,
  FormLabel,
  Input,
  Stack,
  useTheme,
} from '@chakra-ui/react';
import { Button } from '../Button';

export const ContactForm = () => {
  const [isFiring, setIsFiring] = useState(false);
  const { colors } = useTheme();

  const formik = useFormik({
    initialValues: {} as Record<string, string>,
    onSubmit: () => {
      setIsFiring(true);
      sendContactEmail(formik.values).then((res) => {
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
            <FormLabel htmlFor={'input-first'}>FIRST NAME</FormLabel>
            <Input
              id="input-first"
              type="text"
              bgColor={colors.gray}
              border="none"
              py="2rem"
              placeholder="Jane"
              value={formik?.values?.firstName}
              onChange={formik.handleChange}
              color={colors.dark}
              borderRadius={'.5rem'}
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel htmlFor={'input-last'}>LAST NAME</FormLabel>
            <Input
              id="input-last"
              type="text"
              bgColor={colors.gray}
              border="none"
              py="2rem"
              placeholder="Doe"
              value={formik?.values?.lastName}
              onChange={formik.handleChange}
              color={colors.dark}
              borderRadius={'.5rem'}
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel htmlFor={'input-email'}>EMAIL</FormLabel>
            <Input
              id="input-email"
              type="text"
              bgColor={colors.gray}
              border="none"
              py="2rem"
              placeholder="janedoe@gmail.com"
              value={formik?.values?.email}
              onChange={formik.handleChange}
              color={colors.dark}
              borderRadius={'.5rem'}
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel htmlFor={'input-comment'}>COMMENT</FormLabel>
            <Input
              id="input-comment"
              type="textarea"
              bgColor={colors.gray}
              border="none"
              py="2rem"
              placeholder="Message..."
              value={formik?.values?.comment}
              onChange={formik.handleChange}
              color={colors.dark}
              borderRadius={'.5rem'}
            />
          </FormControl>
          <Button
            type="submit"
            variant="primary"
            title="Submit"
            stretch
            isLoading={isFiring}
          />
        </Stack>
      </form>
    </FormikProvider>
  );
};
