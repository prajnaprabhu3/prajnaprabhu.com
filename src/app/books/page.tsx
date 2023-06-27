"use client";

// import { useEffect, useState } from "react";
// import Image from "next/image";
import Garden from "../components/garden";
// import { Fetch } from "./fetch";
// import { books } from "../../../data/books";

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
    <div className=" flex flex-col gap-10 mt-16  w-5/6 mx-auto mt-30 text-white">
      <Garden />

      <div className="grid grid-cols-5 gap-24 my-12">
        {/* {books.map((item, id) => (
          <div key={id}>
            <Image
              alt={item.title}
              src={item.imageLinks}
              height="200"
              width="200"
              className="rounded"
            />
            <p>{item.title}</p>
          </div>
          <p key={id}>hello</p>
        ))} */}

        {/* {books.length} */}
      </div>
    </div>
  );
};

export default Books;

// length is zero within return, but we see data when console logging outside
