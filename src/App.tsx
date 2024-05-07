import { Footer } from "./components/footer";
import { Header } from "./components/header";

import { AppRoutes } from "./routes/config";

const App = () => {
  return (
    <>
      <Header />
      {AppRoutes}
      <Footer />
    </>
  );
};

export default App;
