import React from "react";
import Breadcrumbs from "../components/Breadcrumbs";

const BreadcrumbsRunner = () => {
  const paths = [
    { label: "Home", url: "/" },
    { label: "Products", url: "/products" },
    { label: "Category", url: "/products/category" },
    { label: "Product", url: "/products/category/product" },
  ];

  return (
    <div className="container mx-auto mt-4">
      <Breadcrumbs paths={paths} />
      <hr className="mt-10 mb-10" />
    </div>
  );
};

export default BreadcrumbsRunner;
