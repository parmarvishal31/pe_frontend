import { useEffect, useState } from "react";
import PE from "../../assets/pe.jpg";
import { getAllCategories } from "../../Api/categories";
function Category() {
  const [category, setCategory] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  async function fetchCategory(page) {
    try {
      setIsLoading(true);
      const res = await getAllCategories({ page });
      setCategory((pre) => res.data.data);
      setCurrentPage(res.data.data.currentPage);
      setTotalItems(res.data.data.totalItems);
      setTotalPages(res.data.data.totalPages);
    } catch (error) {
      console.log("error: ", error);
    } finally {
      setIsLoading(false);
    }
  }
  useEffect(() => {
    fetchCategory();
  }, [currentPage]);
  return (
    <div className="mt-4">
      <div className="flex gap-2 flex-wrap justify-center items-center">
        {/* card */}
        {isLoading && "Loading..."}
        {!isLoading &&
          category.map((category, idx) => {
            return (
              <div key={idx} className="shadow-xl p-2 rounded-md w-[170px]">
                <div className="mt-2 flex justify-center">
                  <img
                    className="p-2 shadow-inner w-[150px] h-[150px]"
                    src={category?.img?.secure_url || PE}
                    alt=""
                  />
                </div>
                <div className="mt-2 flex flex-col gap-2">
                  <span className="font-semibold">
                    {category["name"].charAt(0).toUpperCase() +
                      category["name"].slice(1)}
                  </span>
                  <span className="text-blue-500 cursor-pointer">
                    See more...
                  </span>
                </div>
              </div>
            );
          })}
      </div>
      {/* <div className="flex justify-center mt-8">
        <button
          onClick={() => setCurrentPage((pre) => +pre + 1)}
          className="btn"
        >
          Load More...
        </button>
      </div> */}
    </div>
  );
}

export default Category;
