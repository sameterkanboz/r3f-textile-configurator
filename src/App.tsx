import { UiProvider } from "./context/UiContext";
import Scene from "./components/Scene";

function App() {
  return (
    <>
      <UiProvider>
        <Scene />
      </UiProvider>
    </>
  );
}

export default App;
