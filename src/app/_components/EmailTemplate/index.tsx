import { Html, Heading, Text } from '@react-email/components';
import { snakeCase } from 'lodash';

export const SubscriberEmailTemplate = (formData: Record<string, string>) => {
  return (
    <Html lang="en">
      <Heading as="h1">New Subscriber</Heading>
      <Text>
        A visitor to your site KayanArchives.org wants to subscribe for future
        updates
      </Text>
      <hr />
      {Object.entries(formData).map(([key, val]) => (
        <Text key={snakeCase(key)}>
          {key}: {val}
        </Text>
      ))}
    </Html>
  );
};

export const ContactEmailTemplate = (formData: Record<string, string>) => {
  return (
    <Html lang="en">
      <Heading as="h1">New Message</Heading>
      <Text>A visitor to your site KayanArchives.org wants to reach out</Text>
      <hr />
      {Object.entries(formData).map(([key, val]) => (
        <Text key={snakeCase(key)}>
          {key}: {val}
        </Text>
      ))}
    </Html>
  );
};
