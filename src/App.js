import Navbar from "./components/Navbar";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <a
        className="button"
        href="mailto:sagardeep1811@hotmail.com?subject=Reaching%20out%20you%20via%20your%20portfolio."
        style={{ "margin-top": "500px", "margin-left": "128.5px" }}
      >
        Get In Touch
      </a>
    </div>
  );
}

export default App;
