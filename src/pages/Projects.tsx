import React from 'react';
import { Meta } from '@/components/common/Meta';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';

export const Projects: React.FC = () => {
  return (
    <>
      <Meta
        title="Commercial Project Portfolio & Gallery"
        description="Browse our commercial office buildings, industrial warehousing complexes, and retail dining spaces built by FBS Builders."
      />
      <Section padding="lg">
        <Container className="text-center min-h-[50vh] flex flex-col items-center justify-center">
          <h1 className="font-display text-4xl sm:text-5xl font-black mb-4">
            Our Projects
          </h1>
          <p className="text-accent-500 max-w-md mx-auto">
            Starting from scratch. Construction gallery and completed builds coming soon.
          </p>
        </Container>
      </Section>
    </>
  );
};

export default Projects;
