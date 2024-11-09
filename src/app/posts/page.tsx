import Link from "next/link";

const Priduct = async () => {
  const url = await fetch("https://jsonplaceholder.typicode.com/posts", {
    next: { revalidate: 2000 },
  });
  const res = await url.json();
  console.log(res);

  return (
    <div>
      <h1 className="font-black text-lg">Post List</h1>
      <ol>
        {res.map((item: any, i: number) => {
          return (
            <li className="hover:underline">
              <Link href={`/posts/${item.id}`}>
                {i + 1 + ". " + item.title}
              </Link>
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default Priduct;
