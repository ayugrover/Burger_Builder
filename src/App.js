import Layout from './components/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder'

function App() {
  return (
    <div className="App">
      <Layout><h2>Burger Builder</h2></Layout>
      <BurgerBuilder/>
    </div>
  );
}

export default App;
