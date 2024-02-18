import { useUpdateProductMutation } from "../app/service/dummyData";

// eslint-disable-next-line react/prop-types
const UpdateProduct = ({ productId }) => {
  const [updateProduct, { data, error, isLoading }] =
    useUpdateProductMutation();
  //   console.log(data); //this gives the array not the object
  if (error) {
    return <h1>Oops Something went wrong!!!</h1>;
  }
  if (isLoading) {
    return <h1>Loading....</h1>;
  }
  const handleUpdate = async () => {
    try {
      const updatedProductData = {
        title: "Title Updated",
      };

      await updateProduct({
        id: productId,
        updatedProduct: updatedProductData,
      });
    } catch (err) {
      console.error("Error updating prodcut:", err);
    }
  };
  return (
    <div>
      <h1>{data?.title}</h1>
      <button onClick={handleUpdate} disabled={isLoading}>
        Update Product
      </button>
    </div>
  );
};

export default UpdateProduct;
