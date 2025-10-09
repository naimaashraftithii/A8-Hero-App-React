import React from "react";

const ProductCard = ({ product }) => {
  const { title, image, downloads, ratingAvg } = product;

  return (
    <div className="bg-gray-50 border-r-orange-300 rounded-lg p-3 hover:shadow-lg transition-all duration-300">
      <div className="overflow-hidden rounded-lg h-40 w-full mb-3">
        <img
          src={image}
          alt={title}
          className="w-full h-full bg-amber-100 object-cover rounded-md"
        />
      </div>

      <h2 className="text-base font-semibold mb-3 line-clamp-1">{title}</h2>

      <div className="flex justify-between items-center">
        <div className="flex items-center gap-1 px-2 py-1 rounded bg-[#E7F9F0]">
          <img src="/icon-downloads.png" alt="Downloads" className="w-4 h-4" />
          <span className="text-[#00D390] text-sm font-medium">{downloads}</span>
        </div>

        <div className="flex items-center gap-1 px-2 py-1 rounded bg-[#FFF0E1]">
          <img src="/icon-ratings.png" alt="Rating" className="w-4 h-4" />
          <span className="text-[#FF8811] text-sm font-medium">{ratingAvg}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
