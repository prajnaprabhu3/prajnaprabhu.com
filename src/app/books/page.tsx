"use client";

// import { useEffect, useState } from "react";
// import Garden from "../components/garden";
// import { Fetch } from "./fetch";
import { books } from "../../../data/books";
import BookCard from "../components/bookCard";

// export async function Fetch(isbn: string) {
//   const response = await fetch(
//     "https://www.googleapis.com/books/v1/volumes?q=isbn:" + isbn
//   );
//   const data = await response.json();

//   return data.items[0].volumeInfo;
// }

const Books: React.FC = () => {
  // const isbns = [
  //   "9781451648546",
  //   "9781409181644",
  //   "9789353057831",
  //   "9780349431390",
  // ];

  // const books = [];

  // useEffect(() => {
  //   isbns.forEach((isbn: string) => {
  //     Fetch(isbn).then((result) => {
  //       // Do something with this array here
  //       books.push(result);
  //     });
  //     // const result = Fetch(isbn);
  //   });
  //   // runFunction();
  // }, [books]);

  // console.log(books);

  return (
    <div className="flex w-full flex-col justify-center mx-auto md:w-1/2 2xl:w-1/3 mt-20">
      {/* <Garden /> */}

      <h2 className="mx-auto text-4xl">Books</h2>

      <div className="grid grid-cols-1 justify-items-center md:grid-cols-2 gap-x-8 gap-y-12  my-12">
        {books.map((item, id) => (
          <BookCard book={item} key={id} />
        ))}
      </div>
    </div>
  );
};

export default Books;

// length is zero within return, but we see data when console logging outside
