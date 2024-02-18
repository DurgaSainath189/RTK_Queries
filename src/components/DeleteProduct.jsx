import { useDeleteProductMutation } from "../app/service/dummyData";

// eslint-disable-next-line react/prop-types
const DeleteProduct = ({ productId }) => {
  const [deleteProduct, { data, isError, isLoading }] =
    useDeleteProductMutation();
  if (isError) {
    return <h1>Oops something went Wrong!!</h1>;
  }
  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  const handleDelte = async () => {
    try {
      await deleteProduct(productId);
    } catch (err) {
      console.error("Error deleting the product:", err);
    }
  };
  return (
    <div>
      <h1>{data?.title ? `${data.title} succesfully deleted` : ""}</h1>
      <button onClick={handleDelte} disabled={isLoading}>
        Delete Product
      </button>
    </div>
  );
};

export default DeleteProduct;
