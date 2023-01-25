import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes, useNavigate } from "react-router-dom";

import { MainLayout } from "./layouts";
import { Login } from "./pages/Auth/Login/Login";
import { authActions } from "./store/actions/auth";
import { Spinner } from "./components/Spinner/Spinner";
import { Home } from "./pages/Home/Home";
import { Quiz } from "./pages/Quiz/Quiz";
import { Register } from "./pages/Auth/Register/Register";
import { Scores } from "./pages/Score/Scores";
import { Leaders } from "./pages/Leader/Leaders";

const App = () => {
  const isAuth = useSelector((state) => state.auth.isAuth);
  const loading = useSelector((state) => state.auth.loading);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authActions.checkAuthThunk(navigate));
  }, []);

  if (loading) return <Spinner />;

  return (
    <>
      <Routes>
        {isAuth ? (
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="quiz" element={<Quiz />} />
            <Route path="score" element={<Scores />} />
            <Route path="leader" element={<Leaders />} />
          </Route>
        ) : (
          <>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </>
        )}
      </Routes>
    </>
  );
};

export default App;
