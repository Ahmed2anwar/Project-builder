import { FC, InputHTMLAttributes } from "react";

interface Iprops extends InputHTMLAttributes<HTMLInputElement> {}
const Inputs: FC<Iprops> = ({ ...rest }) => {
  return (
    <input
      {...rest}
      className="border shadow-md text-md border-gray-300 rounded-md focus:border-indigo-600 focus:outline-none foucs:ring-2 focus:ring-indigo-600 p-2"
    />
  );
};

export default Inputs;
