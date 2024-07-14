import { ChangeEvent, FormEvent, useState } from "react";
import "./App.css";
import ProductCard from "./components/ProductCard/ProductCard";
import { formInputsList, productList } from "./data";
import Modal from "./components/Ui/Modal";
import Button from "./components/Ui/Button";
import Inputs from "./components/Ui/Inputs";
import { IProduct } from "./interfaces/Index";

function App() {
  const defualtProduct = {
    title: "",
    price: "",
    description: "",
    imageURL: "",
    colors: [],
    id: "",
    category: {
      name: "",
      imageURL: "",
    },
  };

  const [isOpen, setIsOpen] = useState(false);
  const [Product, setProduct] = useState<IProduct>(defualtProduct);
  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setProduct({
      ...defualtProduct,
      [name]: value,
    });
  };

  const renderProductList = productList.map((product) => (
    <ProductCard key={product.id} product={product} />
  ));

  const renderFormInputList = formInputsList.map((input) => (
    <div key={input.id} className="flex flex-col">
      <label htmlFor={input.name} className="pb-1">
        {input.label}
      </label>
      <Inputs
        type="text"
        name={input.name}
        id={input.id}
        onChange={onChangeHandler}
        value={Product[input.name]}
      />
    </div>
  ));

  const submitHandeler = (event: FormEvent<HTMLFormElement>) => {
    console.log(Product);
    event.preventDefault();
    
  };
  const onClose = () => {
    setProduct(defualtProduct)
    console.log(Product);
    
    close()
  };

  return (
    <main className="container my-20">
      
      <div className="flex justify-between my-10">
        <h1 className="font-bold text-4xl">
          Latest <span className="text-indigo-700">Products</span>
        </h1>

        <Button
          onClick={open}
          className="bg-indigo-600 px-6 text-xl"
          width="w-fit"
        >
          Add Product
        </Button>
        
      </div>
      <form onSubmit={submitHandeler}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
          {renderProductList}
        </div>
        <Modal title="Add product" isOpen={isOpen} closeModal={onClose}>
          <div className="flex flex-col space-y-2">{renderFormInputList}</div>
          <div className="flex items-center justify-between mt-5 space-x-3">
            <Button className="bg-indigo-600 hover:bg-indigo-700 focus:outline-none " >
              Submit
            </Button>
            <Button
              className="bg-gray-400 hover:bg-gray-600 focus:outline-none "
              onClick={onClose}
            >
              Cancel
            </Button>
          </div>
        </Modal>
      </form>
    </main>
  );
}

export default App;
