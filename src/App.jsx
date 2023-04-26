import { Route, Routes } from "react-router-dom";
import { Home, Categ, Detel, Login, Error } from "./Constants";
import { Layout } from "./Layout";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useContext } from "react";
import { TemaContext } from "./Contexts";

function App() {
  const { mode } = useContext(TemaContext);
  return (
    <div className="App">
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme={mode ? "dark" : "light"}
      />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categ/:id" element={<Categ />} />
          <Route path="/detel/:id" element={<Detel />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
