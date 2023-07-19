import React, { useState } from "react";
import Pagination from "../components/Pagination";

const imageUrls = [
  "https://picsum.photos/213",
  "https://picsum.photos/208",
  "https://picsum.photos/209",
  "https://picsum.photos/211",
  "https://picsum.photos/210",
  "https://picsum.photos/212",
];

const PaginationRunner = () => {
  return <Pagination imageUrls={imageUrls} itemsPerPage={3} />;
};

export default PaginationRunner;
