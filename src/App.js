import "./App.css";
import Form from "./Form";
import Update from "./Update";
import Weather from "./Weather";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <div className="css-container">
        <Form />
        <Update />
        <Weather />
      </div>
      <Footer />
    </div>
  );
}
