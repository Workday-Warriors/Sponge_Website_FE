import {
  About,
  Airdrop,
  Faq,
  GeneralOverview,
  Header,
  Hero,
  Presale,
  Roadmap,
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
    </div>
  );
};
