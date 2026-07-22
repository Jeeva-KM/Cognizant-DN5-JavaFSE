import ListofPlayers from "./Components/ListofPlayers";
import Scorebelow70 from "./Components/Scorebelow70";
import IndianPlayers from "./Components/IndianPlayers";

function App() {

  const flag = true;

  if (flag) {
    return (
      <div>
        <ListofPlayers />
        <hr />
        <Scorebelow70 />
      </div>
    );
  } else {
    return (
      <div>
        <IndianPlayers />
      </div>
    );
  }

}

export default App;