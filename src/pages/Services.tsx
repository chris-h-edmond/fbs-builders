import React from 'react';
import { Meta } from '@/components/common/Meta';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';

export const Services: React.FC = () => {
  return (
    <>
      <Meta
        title="Our General Contracting & Design Services"
        description="Explore our capabilities including commercial general contracting, pre-construction budgeting, design-build services, and high-end tenant fit-outs."
      />
      <Section padding="lg">
        <Container className="text-center min-h-[50vh] flex flex-col items-center justify-center">
          <h1 className="font-display text-4xl sm:text-5xl font-black mb-4">
            Our Services
          </h1>
          <p className="text-accent-500 max-w-md mx-auto">
            Starting from scratch. Detailed service descriptions and capabilities coming soon.
          </p>
        </Container>
      </Section>
    </>
  );
};

export default Services;
