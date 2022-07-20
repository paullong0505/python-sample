import React from "react";
const PageFooter = () => {
  return (
    <footer>
      <div>
        <p
          style={{ textAlign: "center", fontSize: "18px", lineHeight: "80px" }}
        >
          CopyRight @{new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
};
export default PageFooter;
