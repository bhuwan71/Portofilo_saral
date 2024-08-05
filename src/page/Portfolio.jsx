import { IoMdArrowDropdown } from "react-icons/io";
const Portfolio = () => {
  return (
    <>
      <div>
        <h1>Create a new Portfolio</h1>
        <h2 className="font-bold">Write Portfolio Name</h2>
        <input type="text" className="border-2 border-black" />
        <h2>Add stocks to Portfolio</h2>
        <div>
          <div>
            <span className="">GBIME</span>
            <span className="">Global IME Bank Limited</span>
          </div>
          <div>
            <span>Rs. 500.8 </span>
            <span>
              <IoMdArrowDropdown />
              6.4 %
            </span>
          </div>
        </div>

        <div>
          <div>
            <label>Quantity</label>
            <input type="number" className="border-2 border-black" />
          </div>
          <div>
            <label>Purchase Date</label>
            <input type="date" className="border-2 border-black" />
          </div>
          <div>
            <label>Purchase Price</label>
            <input type="date" className="border-2 border-black" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
