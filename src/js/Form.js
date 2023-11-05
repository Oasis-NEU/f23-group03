import React from "react";

export default function Form({
  photo,
  setPhoto,
  name,
  setName,
  mbti,
  setMBTI,
  enne,
  setEnne,
  showOutput,
  setShowOutput
}) {
  return (
    <div className="input">
      <form
        onSubmit={(e) => {
          e.preventDefault(); // stop submit from reloading the page
          setShowOutput(true);
        }}
      >
        <label htmlFor="form-photo">Photo: </label>
        <input
          id="form-photo"
          type="file"
          // no `value` because value is a path, but we want to store a photo
          onChange={(event) => {
            setPhoto(URL.createObjectURL(event.target.files[0]));
            setShowOutput(false);
          }}
          required
        />
        <br />

        <label htmlFor="form-name">Name: </label>
        <input
          id="form-name"
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
            setShowOutput(false);
          }}
          required
        />
        <br />

        <label htmlFor="form-mbti">MBTI: </label>
        <input
          id="form-mbti"
          type="text"
          value={mbti}
          onChange={(e) => {
            setMBTI(e.target.value);
            setShowOutput(false);
          }}
          required
        />
        <br />

        <label htmlFor="form-enne" style={{ verticalAlign: "top" }}>
          Enneagram:{" "}
        </label>
        {/* <br /> */}
        <textarea
          id="form-enne"
          name="w3review"
          value={enne}
          onChange={(e) => {
            setEnne(e.target.value);
            setShowOutput(false);
          }}
        ></textarea>
        <br />

        <input type="submit" value="Save" />
      </form>
    </div>
  );
}
