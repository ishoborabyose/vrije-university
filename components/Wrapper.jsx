import React from "react";

function wrapper({ children, styles }) {
  return (
    <section className="bg-[#EFECEA] sm:bg-white relative">
      <div className={`max-w-7xl px-3 mx-auto  ${styles}`}>{children}</div>
    </section>
  );
}

export default wrapper;
