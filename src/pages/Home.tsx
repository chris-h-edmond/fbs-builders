import React from 'react';
import { Meta } from '@/components/common/Meta';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';

export const Home: React.FC = () => {
  return (
    <>
      <Meta
        title="Commercial General Contracting & Construction"
        description="Premium commercial construction, tenant buildouts, and design-build workflows by FBS Builders."
      />
      <Section padding="lg">
        <Container className="text-center min-h-[50vh] flex flex-col items-center justify-center">
          <h1 className="font-display text-4xl sm:text-5xl font-black mb-4">
            FBS Builders
          </h1>
          <p className="text-accent-500 max-w-md mx-auto">
            Starting from scratch. New premium architectural construction layout coming soon.
          </p>
        </Container>
      </Section>
    </>
  );
};

export default Home;
