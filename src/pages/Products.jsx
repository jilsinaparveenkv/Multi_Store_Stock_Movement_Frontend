import { useEffect, useState } from "react";
// import Navbar from "../../components/Navbar";
import API from "../api/axios";

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const res = await API.get("/products");
    setProducts(res.data);
  };

  return (
    <>
      {/* <Navbar /> */}

      <div style={{ padding: "20px" }}>
        <h2>Products</h2>

        <table border="1" cellPadding="10">
          <thead>
            <tr>
              <th>Name</th>
              <th>SKU</th>
            </tr>
          </thead>

          <tbody>
            {products.map((product) => (
              <tr key={product._id}>
                <td>{product.name}</td>
                <td>{product.sku}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
