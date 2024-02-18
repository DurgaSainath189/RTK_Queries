import { useAddNewProductMutation } from "../app/service/dummyData";

const AddNewProduct = () => {
  const [addNewProduct, { data, isError, isLoading }] =
    useAddNewProductMutation();
  //   console.log(data); //this gives the array not the object
  if (isError) {
    return <h1>Oops Something went wrong!!</h1>;
  }
  if (isLoading) {
    return <h1>Loading....</h1>;
  }

  const handleAddProdcut = async () => {
    try {
      const newProductData = {
        id: 1,
        title: "Amazing T-Shirt",
        description: "This tshirt is amazing and it's very lightweight",
      };
      await addNewProduct(newProductData);
    } catch (err) {
      console.error("Error adding new prodcut: ", err);
    }
  };
  return (
      <div>
        <h1>{data?.id}</h1>
        <h1>{data?.title}</h1>
        <h1>{data?.description}</h1>
      <button onClick={handleAddProdcut} disabled={isLoading}>
        Add New Product
      </button>
    </div>
  );
};

export default AddNewProduct;
