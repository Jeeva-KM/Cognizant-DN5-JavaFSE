function Scorebelow70() {

  const players = [
    { name: "Virat Kohli", score: 95 },
    { name: "Rohit Sharma", score: 88 },
    { name: "Shubman Gill", score: 76 },
    { name: "KL Rahul", score: 82 },
    { name: "Hardik Pandya", score: 65 },
    { name: "Ravindra Jadeja", score: 58 },
    { name: "Ravichandran Ashwin", score: 44 },
    { name: "Jasprit Bumrah", score: 20 },
    { name: "Mohammed Shami", score: 15 },
    { name: "Mohammed Siraj", score: 12 },
    { name: "Kuldeep Yadav", score: 18 }
  ];

  const below70 = players.filter(player => player.score < 70);

  return (
    <div>
      <h2>Players with Score Below 70</h2>

      <ul>
        {below70.map((player, index) => (
          <li key={index}>
            {player.name} - {player.score}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Scorebelow70;