import Home from "./views/index";
import { ShapeProvider } from "./context";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <Header />
      <ShapeProvider>
        <Home />
      </ShapeProvider>
    </div>
  );
}

export default App;
