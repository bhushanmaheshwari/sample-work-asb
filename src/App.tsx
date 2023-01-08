import { BrowserRouter as Router } from "react-router-dom";
import MainLayoutComponent from "./layout/MainLayout";
import AuthContextProvider from "./store/auth-context";

function App() {
  return (
    <Router>
      <AuthContextProvider>
        <MainLayoutComponent />
      </AuthContextProvider>
    </Router>
  );
}

export default App;
