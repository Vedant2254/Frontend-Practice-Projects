import React from "react";

function Detail({ title, content }) {
  return (
    <div className="detail-container">
      <div className="d-title">{title}</div>
      <div id="ip-address" className="d-content">
        {content}
      </div>
    </div>
  );
}

export default Detail;
