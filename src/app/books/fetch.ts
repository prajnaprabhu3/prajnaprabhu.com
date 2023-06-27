export async function Fetch(isbn: string) {
  const response = await fetch(
    "https://www.googleapis.com/books/v1/volumes?q=isbn:" + isbn
  );
  const data = await response.json();

  return data.items[0].volumeInfo;
}
