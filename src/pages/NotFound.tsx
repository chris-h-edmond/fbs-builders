import React from 'react';
import { Link } from 'react-router-dom';
import { Meta } from '@/components/common/Meta';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { Button } from '@/components/ui/Button';

export const NotFound: React.FC = () => {
  return (
    <>
      <Meta title="Page Not Found - 404" noIndex={true} />
      <Section padding="lg">
        <Container className="text-center min-h-[50vh] flex flex-col items-center justify-center">
          <h1 className="font-display text-4xl sm:text-5xl font-black mb-4">
            404
          </h1>
          <p className="text-accent-500 max-w-md mx-auto mb-6">
            The page you are looking for does not exist.
          </p>
          <Link to="/">
            <Button variant="primary">Return Home</Button>
          </Link>
        </Container>
      </Section>
    </>
  );
};

export default NotFound;
