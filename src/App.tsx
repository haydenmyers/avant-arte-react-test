import Footer from "./components/Footer";
import Header from "./components/Header";
import Layout from "./components/Layout";
import Lists from "./components/Lists";

function App() {
  return (
    <Layout>
      <Header />
      <main>
        <Lists />
      </main>
      <Footer />
    </Layout>
  );
}

export default App;
