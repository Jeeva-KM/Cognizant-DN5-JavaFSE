function App() {

 const offices = [
  {
    Name: "DBS",
    Rent: 50000,
    Address: "Chennai"
  },
  {
    Name: "Regus",
    Rent: 65000,
    Address: "Bangalore"
  },
  {
    Name: "WeWork",
    Rent: 55000,
    Address: "Hyderabad"
  }
];

  return (
    <div style={{ marginLeft: "50px" }}>
      <h1>Office Space , at Affordable Range</h1>
      {offices.map((office, index) => (

        <div key={index}>

          <img
            src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=500"
            alt="Office Space"
            width="300"
          />

          <h2>Name: {office.Name}</h2>

          <h3
            style={{
              color: office.Rent < 60000 ? "red" : "green"
            }}
          >
            Rent: Rs. {office.Rent}
          </h3>

          <h3>Address: {office.Address}</h3>

          <hr />

        </div>

      ))}
    </div>
  );
}

export default App;