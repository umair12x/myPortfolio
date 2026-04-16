'use client';

import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Journey from '@/components/sections/Journey';
import Projects from '@/components/sections/Projects';
import Skills from '@/components/sections/Skills';
import Contact from '@/components/sections/Contact';
import MarqueeStrip from '@/components/MarqueeStrip';

export default function Home() {
  return (
    <>
      <Hero />
      <MarqueeStrip />
      <About />
      <Journey />
      <Projects />
      <Skills />
      <Contact />
    </>
  );
}