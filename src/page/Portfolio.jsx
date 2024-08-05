import { IoMdArrowDropdown } from "react-icons/io";
import { FaCirclePlus } from "react-icons/fa6";
import { ImCross } from "react-icons/im";
import Select from "react-select";
const Portfolio = () => {
  const companies = [
    { name: "Company 1", logo: "https://picsum.photos/seed/company1/100" },
    { name: "Company 2", logo: "https://picsum.photos/seed/company2/100" },
    { name: "Company 3", logo: "https://picsum.photos/seed/company3/100" },
    { name: "Company 4", logo: "https://picsum.photos/seed/company4/100" },
    { name: "Company 7", logo: "https://picsum.photos/seed/company7/100" },
    { name: "Company 8", logo: "https://picsum.photos/seed/company8/100" },
    { name: "Company 9", logo: "https://picsum.photos/seed/company9/100" },
    { name: "Company 10", logo: "https://picsum.photos/seed/company10/100" },
    // Add more companies as needed
  ];

  const companiesList = [
    { value: "gbime", label: "Global IME Bank Limited" },
    { value: "nabil", label: "Nabil Bank Limited" },
    { value: "sanima", label: "Sanima Bank Limited" },
    { value: "nic", label: "NIC Asia Bank Limited" },
    { value: "scb", label: "Standard Chartered Bank" },
    { value: "nrb", label: "Nepal Rastra Bank" },
    { value: "kbl", label: "Kumari Bank Limited" },
    { value: "ebl", label: "Everest Bank Limited" },
    { value: "prabhu", label: "Prabhu Bank Limited" },
    { value: "megha", label: "Mega Bank Nepal Limited" },
    // Add more companies as needed
  ];
  const customStyles = {
    control: (base) => ({
      ...base,
      backgroundColor: "white",
      border: "none",
      boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
      padding: "0.5rem",
      borderRadius: "0.375rem",
      cursor: "pointer",
      ":hover": {
        boxShadow: "0 2px 10px rgba(0, 0, 0, 0.15)",
      },
    }),
    option: (base) => ({
      ...base,
      backgroundColor: "white",
      ":hover": {
        backgroundColor: "#f3f4f6", // Tailwind gray-100
      },
    }),
    menu: (base) => ({
      ...base,
      borderRadius: "0.375rem",
      marginTop: "0.5rem",
    }),
    singleValue: (base) => ({
      ...base,
      fontSize: "1rem",
      fontWeight: "bold",
    }),
  };
  return (
    <>
      <div className="py-10 px-20 mx-auto">
        <div className="flex gap-5 w-full flex-col lg:flex-row">
          <div className="lg:w-[50%] w-[100%]">
            <h1 className="font-bold py-2 text-xl">Create a new Portfolio</h1>
            <h2 className="font-medium py-2 text-lg">Write Portfolio Name</h2>
            <input
              type="text"
              placeholder="Type a Portfolio name"
              className="w-full p-2 bg-white  text-black rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <h2 className="font-medium pb-2 pt-6 text-lg">
              Add stocks to Portfolio
            </h2>
            <div>
              <Select
                options={companiesList}
                styles={customStyles}
                components={{ DropdownIndicator: () => <IoMdArrowDropdown /> }}
                placeholder="Select a company..."
              />
            </div>
            <div className="py-6 flex gap-4">
              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-700 mb-1">
                  Quantity
                </label>
                <input
                  type="number"
                  className="p-2 bg-white rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter quantity"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-700 mb-1">
                  Purchase Date
                </label>
                <input
                  type="date"
                  className="p-2 bg-white rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-700 mb-1">
                  Purchase Price
                </label>
                <input
                  type="number"
                  className="p-2 bg-white rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter price"
                />
              </div>
            </div>
            <div>
              <h2 className="font-medium py-2 text-lg">
                Select Transaction Type
              </h2>
              <select className="w-full p-2 bg-white rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option value="ipo" className="text-gray-900">
                  IPO
                </option>
                <option value="fpo" className="text-gray-900">
                  FPO
                </option>
                <option value="auction" className="text-gray-900">
                  Auction
                </option>
                <option value="secondary-buy" className="text-gray-900">
                  Secondary Buy
                </option>
              </select>
            </div>
            <button className="bg-[#3081ed] my-10 rounded-xl text-sm px-2 py-1 text-white">
              Add Stock
            </button>
          </div>
          {/* Vertical line */}
          <div className="w-[2px]  bg-gray-200 mx-4"></div>
          <div className="lg:w-[50%] w-[100%]">
            <h1 className="font-medium text-xl pb-5">Popular Stocks</h1>
            <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
              {companies.map((company, index) => (
                <div
                  key={index}
                  className=" rounded-md border border-blue-700 flex items-center justify-between p-1 hover:bg-blue-200 transition-all duration-300 cursor-pointer relative"
                  data-tip={company.name}
                >
                  <img
                    src={company.logo}
                    alt={company.name}
                    className="w-8 h-8 rounded-full"
                  />
                  <span className="text-[#3081ed] flex items-center gap-2">
                    API <FaCirclePlus />
                  </span>
                </div>
              ))}
            </div>

            <h1 className="font-medium text-xl pt-5 pb-5">Your Picks</h1>
            <div className="grid lg:grid-cols-5 gap-4">
              {companies.map((company, index) => (
                <div
                  key={index}
                  className=" rounded-md border border-blue-700 flex items-center justify-between p-1 hover:bg-blue-200 transition-all duration-300 cursor-pointer relative"
                  data-tip={company.name}
                >
                  <img
                    src={company.logo}
                    alt={company.name}
                    className="w-8 h-8 rounded-full"
                  />
                  <span className="text-[#3081ed] flex items-center gap-2">
                    API{" "}
                    <ImCross className="text-white bg-red-600 p-1 rounded-full" />
                  </span>
                </div>
              ))}
            </div>
            <div className="pt-10 flex gap-10">
              <button className="bg-[#3081ed] rounded-xl w-[150px] text-sm px-2 py-1 text-white">
                Reset All
              </button>
              <button className="bg-[#3081ed] w-[150px] rounded-xl text-sm px-2 py-1 text-white">
                Save
              </button>
            </div>
          </div>
        </div>

        <div className="flex items-center my-10 justify-center w-full">
          <label
            htmlFor="dropzone-file"
            className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer b dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500"
          >
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <svg
                className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 16"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                />
              </svg>
              <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                <span className="font-semibold">Click to upload</span> or drag
                and drop you CSV from Meroshare
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                We only acceppt CSV
              </p>
            </div>
            <input id="dropzone-file" type="file" className="hidden" />
          </label>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
