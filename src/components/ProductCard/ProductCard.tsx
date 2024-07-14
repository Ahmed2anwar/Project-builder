import { FC } from "react";
import Image from "../Image/Image";
import Button from "../Ui/Button";
import { IProduct } from "../../interfaces/Index";

interface Iprops {
  product: IProduct;
}

const ProductCard: FC<Iprops> = ({product}) => {
  const {title ,description , imageURL , price ,category }= product
  return (
    <div className="border border-gray-400 rounded-md p-2 flex flex-col mx-auto md:mx-0">
      <Image
        imageUrl={imageURL}
        className="w-full h-60 object-cover  rounded-md"
        alt={"prodcut name"}
      />
      <h3 className="py-3 text-xl">{title} </h3>
      <p className="text-gray-600 text-sm">
        {description.slice(0,100)}
      </p>
      <div className="flex py-3 space-x-2">
        <span className="bg-indigo-500 h-6 w-6 pe-2 rounded-full" />
        <span className="bg-yellow-400 h-6 w-6 pe-2 rounded-full" />
        <span className="bg-red-600 h-6 w-6 pe-2 rounded-full" />
      </div>
      <div className="flex justify-between items-center ">
        <p className="text-red-700">${price}</p>
        <div className="flex items-center gap-2">
          <p className="m-0 p-o">{category.name}</p>
          <Image
            imageUrl={category.imageURL}
            className="w-10 h-10 rounded-full object-center"
            alt={"prodcut name"}
          />
        </div>
      </div>
      <div className="flex items-center justify-between space-x-3 pt-4 pb-2">
        <Button
          className="bg-indigo-500 "
          onClick={() => {
            alert("done");
          }}
        >
          Edit
        </Button>
        <Button
          className="bg-red-700"
          onClick={() => {
            alert("delete");
          }}
        >
          Delete
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
