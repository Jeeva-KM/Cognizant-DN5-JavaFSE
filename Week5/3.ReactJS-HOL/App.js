import CalculateScore from "./Components/CalculateScore";

function App() {
  return (
    <div>
      <CalculateScore
        name="JeevaKM"
        school="St. Joseph's College of Engineering"
        total={450}
        goal={5}
      />
    </div>
  );
}

export default App;