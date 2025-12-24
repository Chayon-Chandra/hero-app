import React from "react";

const PageLoader = () => {
  return (
    <div className="fixed inset-0 bg-white flex items-center justify-center z-50">
      <span className="loading loading-spinner loading-lg text-success"></span>
    </div>
  );
};

export default PageLoader;
