// packages
import { Routes, Route } from "react-router-dom"

// styles
import "./App.scss"

// pages
import MainPage from "./pages/Main.page/Main.page"
import LoginPage from "./pages/Login.page/Login.page"
import RegisterPage from "./pages/Register.page/Register.page"
import LessonListPage from "./pages/LessonList.page/LessonList.page"
import PlayPage from "./pages/Play.page/Play.page"
import SandboxPage from "./pages/Sandbox.page/Sandbox.page"
import PageNotFoundPage from "./pages/PageNotFound.page/PageNotFound.page"

// components
import Header from "./components/Header/Header"

const App = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route
          path="/"
          element={<MainPage />}
        />
        <Route
          path="/login"
          element={<LoginPage />}
        />
        <Route
          path="/register"
          element={<RegisterPage />}
        />
        <Route
          path="/learn"
          element={<LessonListPage />}
        />
        <Route
          path="/play"
          element={<PlayPage />}
        />
        <Route
          path="/sandbox"
          element={<SandboxPage />}
        />
        <Route
          path="/*"
          element={<PageNotFoundPage />}
        />
      </Routes>
    </div>
  )
}

export default App
