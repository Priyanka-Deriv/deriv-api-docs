import React from 'react';
import { HeroHeader } from '../HeroHeader/HeroHeader';
import { Benefits } from '../Benefits/Benefits';

export default function HomepageFeatures(): JSX.Element {
  return (
    <section>
      <div className="container">
        <Benefits />
        <HeroHeader />
      </div>
    </section>
  );
}
