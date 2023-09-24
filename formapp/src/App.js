
import { Suspense, lazy } from "react";
import { ToastContainer } from "react-toastify";
import { Navigate, Route, Routes } from "react-router-dom";


function App() {
   const Home = lazy(() => import("./Pages/FormList/Home"));
const AddInfo =  lazy(() => import("./Pages/AddInfo/AddInfo"));
  return (
    <>
    <Suspense fallback={<h1>Loading....</h1>}>
          <Routes>
            <Route path="/" element={<Navigate to="/create" replace />} />
            <Route path="/create/home" element={<Home />} />
            <Route path="/create" element={<AddInfo/>} />
          </Routes>
        </Suspense>
        <ToastContainer  />
        </>
  );
}

export default App;
