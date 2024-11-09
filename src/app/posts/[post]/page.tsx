const Product = async ({ params }: { params: { post: string } }) => {
  const url = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.post}`,
    { cache: "no-store" },
  );
  const res = await url.json();
  console.log(res);

  return (
    <div>
      <h1 className="font-bold text-3xl mb-3">Post details</h1>
      <h3 className="font-semibold text-xl">
        {params.post + ". " + res.title}
      </h3>
      <p>{res.body}</p>
    </div>
  );
};

export default Product;
