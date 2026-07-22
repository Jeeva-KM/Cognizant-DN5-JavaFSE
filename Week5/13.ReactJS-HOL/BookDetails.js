const books = [
  {
    id: 1,
    name: "React Basics",
    author: "Facebook",
    price: 500
  },
  {
    id: 2,
    name: "Java Programming",
    author: "James Gosling",
    price: 700
  }
];

function BookDetails() {
  return (
    <div>
      <h2>Book Details</h2>

      {books.map((book) => (
        <div key={book.id}>
          <p>Book Name : {book.name}</p>
          <p>Author : {book.author}</p>
          <p>Price : ₹{book.price}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default BookDetails;