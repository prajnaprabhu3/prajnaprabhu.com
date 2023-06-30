function Garden() {
  return (
    <div className="md:w-1/2 mx-auto">
      <a href={process.env.NEXT_PUBLIC_GARDEN} target="_blank">
        <p
          className={`text-xs px-2 gap-x-2 bg-white dark:bg-[#1b1c1c] flex h-16 md:gap-x-4 md:text-base justify-center items-center md:px-10  dark:text-zinc-200 text-zinc-900 rounded-lg delay-75  hover:scale-95 transition-transform duration-100 ease-out garden`}
        >
          <span className="text-xl">🌻</span>Check out the collection of
          valuable stuff I found online!
        </p>
      </a>
    </div>
  );
}

export default Garden;
