/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { Spin, Modal } from "antd";
import debounce from "lodash/debounce";
import { useNavigate } from "react-router-dom";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { ExclamationCircleFilled } from "@ant-design/icons";
// import apiInstance from '../api/api';
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

const { confirm } = Modal;

const dummyData = [
  {
    id: 1,
    icon: "https://via.placeholder.com/40",
    name: { en: "Apple" },
    price: "$150",
    quantity: 10,
    totalInvestment: "$1500",
    date: "2024-01-01",
    multiTransaction: "Yes",
  },
  {
    id: 2,
    icon: "https://via.placeholder.com/40",
    name: { en: "Microsoft" },
    price: "$250",
    quantity: 5,
    totalInvestment: "$1250",
    date: "2024-02-01",
    multiTransaction: "No",
  },
  {
    id: 3,
    icon: "https://via.placeholder.com/40",
    name: { en: "Google" },
    price: "$100",
    quantity: 8,
    totalInvestment: "$800",
    date: "2024-03-01",
    multiTransaction: "Yes",
  },
];

const PortfolioTable = ({
  heading,
  tableData = dummyData,
  loading,
  fetchData,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredData, setFilteredData] = useState(tableData);
  const [searchTerm, setSearchTerm] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImageUrl, setModalImageUrl] = useState("");
  const navigate = useNavigate();

  const debouncedSearch = debounce((term) => {
    setSearchTerm(term);
  }, 300);

  const handleSearch = (e) => {
    debouncedSearch(e.target.value);
  };

  const handleDelete = async (rowData) => {
    // try {
    //   const response = await apiInstance.delete(`/job-category/${rowData.id}`);
    //   if (response) {
    //     fetchData(currentPage);
    //     toast.success('Category Deleted Successfully', {
    //       position: 'top-right',
    //       autoClose: 5000,
    //       hideProgressBar: false,
    //       closeOnClick: true,
    //       pauseOnHover: true,
    //       draggable: true,
    //       progress: undefined,
    //       theme: 'light',
    //     });
    //   }
    // } catch (error) {
    //   toast.error('Something went wrong', {
    //     position: 'top-right',
    //     autoClose: 5000,
    //     hideProgressBar: false,
    //     closeOnClick: true,
    //     pauseOnHover: true,
    //     draggable: true,
    //     progress: undefined,
    //     theme: 'light',
    //   });
    // }
  };

  const showDeleteConfirm = (rowData) => {
    confirm({
      title: "Are you sure delete this Category?",
      icon: <ExclamationCircleFilled />,
      content: `${rowData.title}`,
      okText: "Yes",
      okType: "danger",
      cancelText: "No",
      onOk() {
        handleDelete(rowData);
      },
      onCancel() {
        console.log("Cancel");
      },
    });
  };

  const handleImageClick = (url) => {
    setModalImageUrl(url);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleEdit = (rowData) => {
    navigate(`/category/${rowData.id}`);
  };

  useEffect(() => {
    const filtered = tableData?.filter((rowData) =>
      rowData.name.en?.toLowerCase()?.includes(searchTerm.toLowerCase())
    );
    setFilteredData(filtered);
  }, [searchTerm, tableData]);

  return (
    <>
      <div className="relative bg-white p-5 shadow-lg sm:rounded-lg rounded-xl border-gray-200 border dark:bg-boxdark">
        <div className="flex flex-col lg:flex-row gap-5 items-center justify-between px-6 py-4 rounded-xl">
          <div>
            <h2 className="text-2xl font-bold text-black dark:text-white">
              {heading}
            </h2>
          </div>
          <div className="flex lg:flex-row flex-col  w-full justify-between items-center">
            <div>
              <h1 className="font-medium text-xl">Assets</h1>
            </div>
            <div className="flex flex-col lg:flex-row items-center gap-4">
              <div>
                <label htmlFor="table-search" className="sr-only">
                  Search
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg
                      className="w-4 h-4 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 20"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                      />
                    </svg>
                  </div>
                  <input
                    type="text"
                    id="table-search-users"
                    className="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-full max-w-xs bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Search for Stocks"
                    onChange={handleSearch}
                  />
                </div>
              </div>
              <div>
                <button className="bg-black py-1 px-2 rounded-lg text-white">
                  Add Stocks
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="overflow-x-auto">
          {loading ? (
            <div className="flex justify-center py-10 items-center h-full">
              <Spin size="large" />
            </div>
          ) : (
            <table className="w-full shadow-xl text-sm text-left text-gray-500 dark:text-gray-dark">
              <thead className="text-xs  text-black border-b  border-gray-700">
                <tr>
                  <th className="px-6 pb-5">Company Name</th>
                  <th className="px-6 pb-5">Price</th>
                  <th className="px-6 pb-5">Quantity</th>
                  <th className="px-6 pb-5">Total Investment</th>
                  <th className="px-6 pb-5">Date</th>
                  <th className="px-6 pb-5">Multi Transaction</th>
                  <th className="px-6 pb-5">Actions</th>
                </tr>
              </thead>
              {filteredData && filteredData.length > 0 ? (
                <tbody>
                  {filteredData?.map((rowData, index) => (
                    <tr
                      key={index}
                      className="bg-white cursor-pointer dark:text-white border-b border-[#DFDFDF]"
                    >
                      <td className="px-6 py-2 whitespace-nowrap">
                        <img
                          className="w-10 h-10 rounded-full object-cover"
                          src={rowData.icon}
                          alt={rowData.icon}
                          onClick={() => handleImageClick(rowData.url)}
                        />
                      </td>
                      <td className="px-6 py-4">{rowData?.price?.en}</td>
                      <td className="flex py-5 gap-2">
                        <button
                          onClick={() => handleEdit(rowData)}
                          className="bg-meta-4 hover:bg-meta-5 text-white font-bold py-1 px-4 mx-2 rounded-md transition duration-300"
                        >
                          <AiOutlineEdit size={16} />
                        </button>
                        <button
                          onClick={() => showDeleteConfirm(rowData)}
                          className="bg-meta-1 hover:bg-meta-1 text-white font-bold py-1 px-4 mx-2 rounded-md transition duration-300"
                        >
                          <AiOutlineDelete size={16} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              ) : (
                <tbody>
                  <tr>
                    <td colSpan={4} className="text-center py-20">
                      <p className="text-lg dark:text-white text-gray-500">
                        No Stock found.
                      </p>
                    </td>
                  </tr>
                </tbody>
              )}
            </table>
          )}
        </div>
      </div>

      <Modal
        open={isModalOpen}
        footer={null}
        onCancel={handleModalClose}
        centered
      >
        <img
          src={modalImageUrl}
          alt="Category Image"
          className="w-full h-auto max-w-xs mx-auto"
        />
      </Modal>
    </>
  );
};

export default PortfolioTable;
