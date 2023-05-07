import "./styles.css";
import TodoList from "./TodoList";
import TodoListHeader from "./TodoListHeader";
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
        <TodoListHeader />
        <TodoList />
      </div>
      <Footer />
    </div>
  );
};
