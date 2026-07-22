function ListofPlayers() {

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

  return (
  <div>
    <h2>List of Players</h2>

    <ul>
      {players.map((player, index) => (
        <li key={index}>
          {player.name} - {player.score}
        </li>
      ))}
    </ul>
  </div>
);
}

export default ListofPlayers;