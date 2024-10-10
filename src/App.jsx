import Footer from "./components/layout/footer/Footer";
import { Navbar } from "./components/layout/navbar/Navbar";
import { Home } from "./components/pages/Home";
import { ItemListContainer } from "./components/pages/ItemListContainer/ItemListContainer";

function App() {
  return (
    <>
      <Navbar />
      <ItemListContainer title="En construccion, desvio hacia la izquierda xD" />
      {/* <Footer/> */}
    </>
  );
}

export default App;
