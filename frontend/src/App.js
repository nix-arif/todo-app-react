import "./App.css";
import Form from "./components/Form";
import ListItem from "./components/ListItem";

function App() {
  return (
    <div className="container">
      <h1 className="display-4 text-center py-1">To-Do App</h1>
      <Form />
      <ListItem />
    </div>
  );
}

export default App;
