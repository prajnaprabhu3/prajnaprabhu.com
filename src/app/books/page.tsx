"use client";

// import { useEffect, useState } from "react";
import Garden from "../components/garden";

// interface booksProps {
//   title: string;
// }

function Books() {
  // const [books, setBooks] = useState([]);
  // const title = [
  //   "The Silent Patient",
  //   "Tuesdays With Morrie",
  //   "The Almanack Of Naval Ravikant",
  //   "The Psychology of Money",
  //   "Let's Build a Company",
  //   "The Minimalist Entrepreneur",
  //   "The Lean Startup",
  //   "Hooked",
  // ];

  // const getBooks = async (...title: Array<string>) => {
  //   const response = await fetch(
  //     `https://www.googleapis.com/books/v1/volumes?q=${title}&key=${process.env.NEXT_PUBLIC_GOOGLE_BOOKS_API_KEY}`
  //      `https://www.googleapis.com/books/v1/volumes?q=${process.env.NEXT_PUBLIC_GOOGLE_BOOKS_API_KEY}`
  //   );
  //   const data = await response.json();
  //   setBooks(data);
  //   console.log(data);
  //    return data;
  // };

  // useEffect(() => {
  //   getBooks(...title);
  // }, []);

  return (
    <div className="flex flex-col mx-auto mt-30 text-white">
      <Garden />

      {/* need to create book interface etc  */}
      {/* <div>
        {books.map((book: object, id: string) => (
          <div key={book.id}></div>
        ))}
      </div> */}
    </div>
  );
}

export default Books;
