import { useState } from "react";
import { CORE_CONCEPTS } from "./data.js";
import Header from "./components/Header";
import CoreConcept from "./components/CoreConsept";
import TabButton from "./components/TabButton";
import { EXAMPLES } from "./data.js"


function App() {
  const [selectedTopic, setSelectedTopic] = useState("components");
  function handleSelect(selectedButton) {
    // selectedButton => "components", "jsx", "props", "state";
    setSelectedTopic(selectedButton.toLowerCase());
    setSelectedTopic(selectedButton);

  }
  console.log("APP COMPONENT EXECUTING");
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>CoreConcepts</h2>
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
            <TabButton onSelect={() => handleSelect("components")}>
              Components
            </TabButton>
            <TabButton onSelect={() => handleSelect("jsx")}>JSX</TabButton>
            <TabButton onSelect={() => handleSelect("props")}>Props</TabButton>
            <TabButton onSelect={() => handleSelect("state")}>State</TabButton>
          </menu>
          <div id="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>
                {EXAMPLES[selectedTopic].code}
              </code>
            </pre>
          </div>
        </section>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
