import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes, useNavigate } from "react-router-dom";

import { Home, Leaders, Login, Quiz, Register, Scores } from "pages";
import { Spinner } from "components";
import { MainLayout } from "layouts";
import { authActions } from "store/actions";


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
