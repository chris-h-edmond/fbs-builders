import React from 'react';
import { Meta } from '@/components/common/Meta';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';

export const About: React.FC = () => {
  return (
    <>
      <Meta
        title="About Our Construction Agency"
        description="Learn about the history, executive team, design values, and safety-first construction policies at FBS Builders."
      />
      <Section padding="lg">
        <Container className="text-center min-h-[50vh] flex flex-col items-center justify-center">
          <h1 className="font-display text-4xl sm:text-5xl font-black mb-4">
            About Us
          </h1>
          <p className="text-accent-500 max-w-md mx-auto">
            Starting from scratch. About page details and crew bios coming soon.
          </p>
        </Container>
      </Section>
    </>
  );
};

export default About;
