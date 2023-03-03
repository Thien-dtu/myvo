import { Link } from "react-router-dom";
import "../custom.css";

const products = [
  {
    id: 1,
    title: "Product 1 Lorem dolor",
    description: "Lorem ipsum dolor sit amet consectetur fugiat",
    submitterAvatar: "../images/avatars/ava1.png",
    productImage: "/images/products/product-ima1.png",
  },
  {
    id: 2,
    title: "Product 2 Lorem dolor",
    description: "Lorem ipsum dolor sit amet consectetur fugiat",
    submitterAvatar: "../images/avatars/ava2.png",
    productImage: "/images/products/product-ima1.png",
  },
  {
    id: 3,
    title: "Product 3 Lorem dolor",
    description: "Lorem ipsum dolor sit amet consectetur fugiat",
    submitterAvatar: "../images/avatars/ava1.png",
    productImage: "/images/products/product-ima1.png",
  },
  {
    id: 4,
    title: "Product 4 Lorem dolor",
    description: "Lorem ipsum dolor sit amet consectetur fugiat",
    submitterAvatar: "../images/avatars/ava2.png",
    productImage: "/images/products/product-ima1.png",
  },
];

const productList = products.map((product) => (
  <div className="row no-gutters mb-3">
    <div className="col-md-4">
      <img
        src={product.productImage}
        style={{ borderRadius: "8px" }}
        alt="anh"
      />
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title text-start text-pading">{product.title}</h5>
        <p className="card-text text-start text-pading">
          {product.description}
        </p>
        <p className="card-text text-start text-pading">
          Submitted by:{" "}
          <img
            style={{ height: "25px", width: "25px", borderRadius: "14px" }}
            src={product.submitterAvatar}
            alt="anh avatar"
          />
        </p>
      </div>
    </div>
  </div>
));
function DisplayProduct() {
  return (
    <div className="App">
      <div className="">
        <div className="card mb-3 mx-auto" style={{ maxWidth: "540px" }}>
          <div className="card-header text-start">
            <h3>Lorem Products List</h3>
          </div>
          {productList}
        </div>
      </div>
      <Link to="/">
        <button type="button mt-20" class="btn btn-primary">
          table-app
        </button>
      </Link>
    </div>
  );
}

export default DisplayProduct;
