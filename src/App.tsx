import {
  About,
  Airdrop,
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
    </div>
  );
};
