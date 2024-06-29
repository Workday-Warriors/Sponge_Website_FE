import {
  About,
  Airdrop,
  Contact,
  Faq,
  GeneralOverview,
  Header,
  Hero,
  Presale,
  Roadmap,
  Security,
  Team,
  Tokenomics,
} from "./components";

export const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Tokenomics />
      <Airdrop />
      <Presale />
      <Roadmap />
      <Team />
      <GeneralOverview />
      <Faq />
      <Security />
      <Contact />
      {/*  */}
      {/* <Contact /> */}
    </div>
  );
};
