import Landing from "./Landing.jsx";
import Home from "./Home.jsx";

function App() {
  const isLoggedIn = true;

  return <div>{isLoggedIn ? <Home /> : <Landing />}</div>;
}

export default App;
