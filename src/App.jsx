import { BiMenuAltLeft } from "react-icons/bi";
import { TfiAngleDown, TfiAngleUp } from "react-icons/tfi";
import { useState } from "react";
function App() {
  const [categories, setcategories] = useState(false);

  const handleToggle = () => {
    setcategories(!categories);
  };
  return (
    <>
      <div className="w-full py-2 px-8 bg-yellow-500 h-16 relative flex items-center justify-between ">
        <div className="bg-white rounded-t-md shadow-md   w-[320px]">
          <div className="flex items-center border-b border-gray-200  justify-between w-full h-fit p-3">
            <h1 className="text-md flex items-center font-semibold ">
              <BiMenuAltLeft size={20} />
              <span className="mx-3">All Categories</span>
            </h1>
            <div onClick={handleToggle}>
              {!categories ? (
                <TfiAngleDown size={15} />
              ) : (
                <TfiAngleUp size={15} />
              )}
            </div>
          </div>
          {categories ? (
            <div className="m-3 duration-[2s] ease-in-out">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
              culpa explicabo magni facere nulla, veritatis nam doloremque unde
              inventore distinctio ratione minus minima ullam, nisi laborum
              architecto labore perspiciatis animi.
            </div>
          ) : null}
        </div>
        <div>
          <ul className="flex items-center text-black-300">
            <li className="p-4 font-semibold">Home</li>
            <li className="p-4 font-semibold">About</li>
            <li className="p-4 font-semibold">Contact</li>
            <li className="p-4 font-semibold">Blog</li>
          </ul>
        </div>

        <div>
           <button className="bg-gray-800 text-gray-200 py-2 px-5 rounded-md hover:bg-slate-900 hover:text-gray-300 ">Become a seller</button>
        </div>
      </div>
    </>
  );
}

export default App;
