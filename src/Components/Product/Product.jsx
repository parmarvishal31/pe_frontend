import { useEffect, useState } from "react";
import PE from "../../assets/pe.jpg";
import { getAllProducts } from "../../Api/product";
function Product() {
  const [product, setProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  async function fetchproduct(page) {
    try {
      setIsLoading(true);
      const res = await getAllProducts({ page });
      setProduct((pre) => res.data.data);
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
    fetchproduct();
  }, [currentPage]);
  return (
    <div className="mt-4">
      <div className="flex gap-2 flex-wrap justify-center items-center">
        {/* card */}
        {isLoading && "Loading..."}
        {!isLoading &&
          product.map((product, idx) => {
            return (
              <div key={idx} className="shadow-xl p-2 rounded-md w-[170px]">
                <div className="mt-2 flex justify-center">
                  <img
                    className="p-2 shadow-inner w-[150px] h-[150px]"
                    src={product?.img?.secure_url || PE}
                    alt=""
                  />
                </div>
                <div className="mt-2 flex flex-col gap-2">
                  <span className="font-semibold">
                    {product["name"].charAt(0).toUpperCase() +
                      product["name"].slice(1)}
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

export default Product;
