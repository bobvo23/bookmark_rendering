import "./styles.css";
import Ramen from "./components/Ramen";
import Sushi from "./components/Sushi";

export default function App() {
  return (
    <div className="App">
      <div className="header">
        <h1>Vancouver Bookmarks</h1>
        <h2>2022 Vancouver City Guide</h2>
      </div>
      <h1>Ramen</h1>
      <Ramen />
      <h1>Sushi</h1>
      <Sushi />
      <footer>
        <p>Developed by bobvo23</p>
      </footer>
    </div>
  );
}
