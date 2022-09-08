import { PageRouter } from "./PageRouter";
import { HeaderProvider } from "./contexts/headerContext";

function App() {
  return (
    <HeaderProvider>
      <PageRouter />
    </HeaderProvider>
  );
}

export default App;
