import React from "react";

export default function Output({ photo, name, mbti, enne }) {
  return (
    <div className="output">
      <div className="column">
        <img src={photo ?? ""} alt="profile photo" />
      </div>

      <div className="column">
        <h1 style={{ marginBottom: "-15px", marginTop: "2px" }}>
          {name ?? "error"}
        </h1>
        <p>
          <b>
            <i>{mbti ?? "error"}</i>
          </b>
        </p>
        <p>
          <b>Enneagram:</b>
          <br /> {enne ?? "error"}
        </p>
      </div>
    </div>
  );
}
