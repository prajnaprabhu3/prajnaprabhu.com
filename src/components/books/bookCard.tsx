import { Book } from "@/types/Book";
import Image from "next/image";

interface BookProp {
  book: Book;
}

const BookCard: React.FC<BookProp> = ({ book }) => {
  return (
    <div className="flex mx-auto w-72 gap-4 md:gap-6 px-4 pb-2 md:pb-4 md:w-full 2xl:mx-auto  dark:bg-[#1b1c1d] bg-[#ebe8e8] border dark:border-2 border-zinc-300 dark:border-zinc-800 rounded-lg hover:-translate-y-1 duration-200 ease-out cursor-pointer">
      {/* image -left     */}
      <Image
        alt={book.title}
        src={book.url}
        height="80"
        width="80"
        className=" rounded-lg  -mt-4 drop-shadow-lg"
      />

      {/* content -right  */}
      <section className="flex flex-col justify-around">
        <div className="flex flex-col gap-0.5 md:gap-2">
          <h2 className="font-bold text-sm">{book.title}</h2>
          <p className="text-xs text-zinc-500">{book.author}</p>
        </div>

        <p
          className="flex justify-center text-xs w-16 py-0.5 rounded dark:text-gray-900"
          style={{
            backgroundColor: book.css,
          }}
        >
          {book.status}
        </p>
      </section>
    </div>
  );
};

export default BookCard;
