import ComponentA from './components/ComponentsA';
import ComponentB from './components/ComponentsB';

function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Redux Toolkit Implementation</h1>
      </header>
      <main className="dashboard">
        <ComponentA />
        <ComponentB />
      </main>
    </div>
  );
}

export default App;