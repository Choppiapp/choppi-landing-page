import { Hero } from './components/hero';
import { WhatIsChoppi } from './components/what-is-choppi';
import { HowItWorks } from './components/how-it-works';
import { WhyNow } from './components/why-now';
import { Traction } from './components/traction';
import { Team } from './components/team';
import { InvestorCTA } from './components/investor-cta';
import { Footer } from './components/footer';
import { Navbar } from './components/navbar';
import { Problem } from './components/problem';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main>
        <Hero />
        <Problem />
        <WhatIsChoppi />
        <HowItWorks />
        <WhyNow />
        <Traction />
        <Team />
        <InvestorCTA />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;