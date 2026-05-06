import { Nav } from "../components/Nav";
import { Hero } from "../components/Hero";
import { Identity } from "../components/Identity";
import { WhatIBuild } from "../components/WhatIBuild";
import { SignatureWork } from "../components/SignatureWork";
import { HowIOperate } from "../components/HowIOperate";
import { TheLife } from "../components/TheLife";
import { Ventures } from "../components/Ventures";
import { Contact } from "../components/Contact";

export default function HomePage() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Identity />
        <WhatIBuild />
        <SignatureWork />
        <HowIOperate />
        <TheLife />
        <Ventures />
        <Contact />
      </main>
    </>
  );
}
