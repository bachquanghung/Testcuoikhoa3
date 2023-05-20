import "./styles.css";
import TodoList from "./TodoList";
import Footer from "./Footer";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

const Home = () => {
  return (
    <div className="App">
      <div className="container">
        <TodoList />
      </div>
      <Footer />
    </div>
  );
};
