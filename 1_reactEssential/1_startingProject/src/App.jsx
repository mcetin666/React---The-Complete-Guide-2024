import CoreConcepts from "./components/CoreConsepts.jsx";
import Header from "./components/Header";
import Examples from "./components/Examples.jsx";

function App() {
  return (
    <>
      <Header />
      <main>
        <CoreConcepts />
        <Examples />
      </main>
    </>
  );
}

export default App;
