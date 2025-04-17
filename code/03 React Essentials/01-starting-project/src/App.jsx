
import { useState } from 'react';
import { CORE_CONCEPTS } from './data';
import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcept.jsx';
import TabButton from './components/TabButton.jsx';

function App() {
const [selectedButton, setSelectedButton] = useState('components');

  function handleClick(selectedButton) {
    setSelectedButton(selectedButton);
    console.log(selectedButton);
};

console.log('APP COMPNENT EXECUTING');
  return (
    <div>
      <Header />
      <main>
        <section id = "core-concepts">
        <h2>Core Concepts</h2>
        <ul>
          <CoreConcept 
          title={CORE_CONCEPTS[0].title}
          description={CORE_CONCEPTS[0].description}
          image={CORE_CONCEPTS[0].image}
          />
          <CoreConcept {...CORE_CONCEPTS[1]} />
          <CoreConcept {...CORE_CONCEPTS[2]} />
          <CoreConcept {...CORE_CONCEPTS[3]} />
        </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onClick={()=> handleClick('components')}>Components</TabButton>
            <TabButton onClick={() => handleClick('jsx')}>JSX</TabButton>
            <TabButton onClick={() => handleClick('props')}>Props</TabButton>
            <TabButton onClick={() =>handleClick('state')}> State</TabButton>
          </menu>
          {selectedButton}
        </section>
      </main>
    </div>
  );
}

export default App;
