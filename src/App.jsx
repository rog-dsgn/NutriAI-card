import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthProvider";
import UserAuth from "./pages/admin/UserAuth";

// pages
import Home from "./pages/Home";

const App = () => {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/admin" element={<UserAuth />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </>
  );
};

export default App;
