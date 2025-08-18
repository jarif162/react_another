import { useState } from "react";
import "./App.css";

function App() {
  //contact form-name,email,phone,country,isAgree

  const init = {
    name: "",
    email: "",
    phone: "",
    country: "Bangladesh",
    isAgree: false,
  };

  const [formData, setFormData] = useState({ ...init });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value, //[name] is a dynamic key name
      //const key = "email";
      // const obj = { [key]: "jarif@example.com" };
      // console.log(obj);
      // { email: "jarif@example.com" }
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // const { errors, isValid } = checkValidity(formData);
    // if (!isValid) {
    //   console.log(errors);
    //   return;
    // }
    console.log(formData);
    // Reset form after submission
    setFormData(formData);
  };

  //create a function to check is input is blank or not
  const checkValidity = () => {
    const errors = {};
    const { name, email, phone, country, isAgree } = formData;

    if (!name) {
      errors.name = "Name is required";
    }

    if (!email) {
      errors.email = "Email is required";
    }

    if (!phone) {
      errors.phone = "Phone is required";
    }

    if (!country) {
      errors.country = "Country is required";
    }

    if (!isAgree) {
      errors.isAgree = "You must agree to the terms and conditions";
    }

    return {
      errors,
      isValid: Object.keys(errors).length === 0, // Check if there are any errors
      //object.keys(errors) returns an array of all the keys in the errors object
    };
  };

  checkValidity();

  return (
    <>
      <div>
        <form action="" onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            required
          />
          <br />
          <br />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
          />
          <br />
          <br />

          <label htmlFor="phone">Phone</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter your phone"
            required
          />
          <br />
          <br />

          <label htmlFor="country">Country</label>
          <select
            name="country"
            value={formData.country}
            onChange={handleChange}
            id="country"
          >
            <option value="BAngladesh">Bangladesh</option>
            <option value="India">India</option>
            <option value="Pakistan">Pakistan</option>
            <option value="Nepal">Nepal</option>
            <option value="Bhutan">Bhutan</option>
            <option value="SriLanka">Sri Lanka</option>
          </select>
          <br />
          <br />

          <label htmlFor="isAgree">Agree</label>
          <input
            type="checkbox"
            checked={formData.isAgree}
            onChange={handleChange}
            id="isAgree"
            name="isAgree"
            required
          />
          <br />
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}

export default App;

//react style component-yarn add styled-components-npm install styled-components
