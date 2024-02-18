import { useGetAllProductsQuery } from "../app/service/dummyData";

const AllProducts = () => {
  const { data, isError, isLoading } = useGetAllProductsQuery();
  if (isLoading) {
    return <h1>Loading....</h1>;
  }
  if (isError) {
    return <h1>Oops got an error</h1>;
  }

  return (
    <div>
      {data?.products.map((p) => (
        <h1 key={p.id}>{p.title}</h1>
      ))}
    </div>
  );
};

export default AllProducts;
