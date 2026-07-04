import React from 'react';
import { Meta } from '@/components/common/Meta';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';

export const Contact: React.FC = () => {
  return (
    <>
      <Meta
        title="Contact Us - Request Estimating Quote"
        description="Get in touch with FBS Builders estimating team. Call us, send an email, or submit our commercial contracting inquiry form."
      />
      <Section padding="lg">
        <Container className="text-center min-h-[50vh] flex flex-col items-center justify-center">
          <h1 className="font-display text-4xl sm:text-5xl font-black mb-4">
            Contact Us
          </h1>
          <p className="text-accent-500 max-w-md mx-auto">
            Starting from scratch. Custom estimating form and offices information coming soon.
          </p>
        </Container>
      </Section>
    </>
  );
};

export default Contact;
