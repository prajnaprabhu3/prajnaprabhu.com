"use client";

import React from "react";
import Main from "@/app/components/Main";
import { Section } from "@/layouts/section";
import { Container } from "@/layouts/container";

export default function Home() {
  return (
    // <Section className="py-2 md:py-10 md:mt-20">
    <Container data-aos="fade-up">
      <div className="py-2 md:py-10 md:mt-20">
        <Main />
      </div>
    </Container>
    // </Section>
  );
}
