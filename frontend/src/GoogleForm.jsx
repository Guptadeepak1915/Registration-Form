import React, { useState } from "react";
import "./GoogleForm.css";

function GoogleForm() {
  const [formData, setFormData] = useState({
    name: "",
    registration: "",
    year: "",
    sem: "",
    mobile: "",
    section: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:4552/submit-form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        alert("Form submitted successfully!");
      } else {
        alert("Failed to submit form");
      }
    } 
    catch (error) {
      console.error(error);
      alert("Error submitting form");
    }
  };

  return (
    <form method="POST" onSubmit={handleSubmit} className="form-container">
      <div className="heading">
        <h1>API and Front Containerization Workflow,2025</h1>
        <h3>Team Name :- Binary Brain </h3>
        <p>5th Sem (CSE/AIML/DS)</p>
        <hr />
        <span> &#9993; Deepakkumar346688@gmail.com</span>{" "}
        <a href="#">Switch account</a>
        <p>&#9993; not shared</p>
        <hr />
        <p style={{ color: "red" }}>* indicates required question</p>
      </div>

      <div className="content">
        <label htmlFor="Name">
          Name of Student <span style={{ color: "red" }}>*</span>
        </label>
        <br />
        <br />
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Your Answer"
          value={formData.name}
          onChange={handleChange}
        />
      </div>

      <div className="content">
        <label htmlFor="registration">
          Registration No <span style={{ color: "red" }}>*</span>
        </label>
        <br />
        <br />
        <input
          type="text"
          name="registration"
          id="registration"
          placeholder="Your Answer"
          value={formData.registration}
          onChange={handleChange}
        />
      </div>

      <div className="content">
        <label htmlFor="year">
          Year <span style={{ color: "red" }}>*</span>
        </label>
        <br />
        <br />
        <input
          type="radio"
          name="year"
          id="1year"
          value="first"
          checked={formData.year === "first"}
          onChange={handleChange}
        />{" "}
        1st Year <br />
        <input
          type="radio"
          name="year"
          id="2year"
          value="second"
          checked={formData.year === "second"}
          onChange={handleChange}
        />{" "}
        2nd Year <br />
        <input
          type="radio"
          name="year"
          id="3year"
          value="third"
          checked={formData.year === "third"}
          onChange={handleChange}
        />{" "}
        3rd Year <br />
        <input
          type="radio"
          name="year"
          id="4year"
          value="fourth"
          checked={formData.year === "fourth"}
          onChange={handleChange}
        />{" "}
        4th Year
      </div>

      <div className="content">
        <label htmlFor="sem">
          Semester <span className="star">*</span>
        </label>
        <br />
        <input
          type="radio"
          name="sem"
          id="sem1"
          value="1st"
          checked={formData.sem === "1st"}
          onChange={handleChange}
        />{" "}
        1st Sem <br />
        <input
          type="radio"
          name="sem"
          id="sem3"
          value="3rd"
          checked={formData.sem === "3rd"}
          onChange={handleChange}
        />{" "}
        3rd Sem <br />
        <input
          type="radio"
          name="sem"
          id="sem5"
          value="5th"
          checked={formData.sem === "5th"}
          onChange={handleChange}
        />{" "}
        5th Sem <br />
      </div>

      <div className="content">
        <label htmlFor="mobile">
          Mobile No <span className="star">*</span>
        </label>
        <br />
        <br />
        <input
          type="number"
          name="mobile"
          id="mobile"
          placeholder="Mobile No"
          pattern="\d{10}"
          value={formData.mobile}
          onChange={handleChange}
        />
      </div>

      <div className="content">
        <label htmlFor="sec">
          Section <span className="star">*</span>
        </label>
        <br />
        <br />
        {["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"].map((sec) => (
          <React.Fragment key={sec}>
            <input
              type="radio"
              name="section"
              id={`sec${sec.toLowerCase()}`}
              value={sec}
              checked={formData.section === sec}
              onChange={handleChange}
            />{" "}
            {sec}
            <br />
          </React.Fragment>
        ))}
      </div>

      <div className="content">
        <label htmlFor="mail">
          E-mail-ID <span className="star">*</span>
        </label>
        <br />
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>

      <div className="content">
        <button type="submit" className="submit-btn">
          Submit
        </button>
      </div>
    </form>
  );
}

export default GoogleForm;
