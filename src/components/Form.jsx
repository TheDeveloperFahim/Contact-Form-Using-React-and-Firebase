import { useState } from "react";

export const Form = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    message: "",
  });

  // Get user data from input
  const getUserData = (event) => {
    const { name, value } = event.target;
    setUserData({ ...userData, [name]: value });
  };

  // Post data to firebase
  const postData = (event) => {
    event.preventDefault();

    const { name, email, phone, address, message } = userData;

    const respons = fetch(
      "https://contact-form-info-default-rtdb.firebaseio.com/userInfo.json",
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          phone,
          address,
          message,
        }),
      }
    );

    if (respons) {
      setUserData({
        name: "",
        email: "",
        phone: "",
        address: "",
        message: "",
      });
      alert("Form Submitted Successfully");
    }
  };

  return (
    <>
      <div className="contact-container">
        <div className="warp-contact">
          <h2 className="contact-form-title">contact us</h2>
          <div className="contact-fields">
            <form method="POST" onSubmit={postData}>
              <div className="two-side-input">
                <div className="input-div">
                  <span>Your Name</span>
                  <input
                    type="text"
                    name="name"
                    autoComplete="off"
                    value={userData.name}
                    onChange={getUserData}
                    required
                  />
                </div>
                <div className="input-div">
                  <span>Your Email</span>
                  <input
                    type="email"
                    name="email"
                    autoComplete="off"
                    value={userData.email}
                    onChange={getUserData}
                    required
                  />
                </div>
              </div>
              <div className="two-side-input">
                <div className="input-div">
                  <span>Your Phone</span>
                  <input
                    type="number"
                    name="phone"
                    autoComplete="off"
                    value={userData.phone}
                    onChange={getUserData}
                    required
                  />
                </div>
                <div className="input-div">
                  <span>Your Address</span>
                  <input
                    type="text"
                    name="address"
                    autoComplete="off"
                    value={userData.address}
                    onChange={getUserData}
                    required
                  />
                </div>
              </div>
              <div className="input-div">
                <span>Message</span>
                <textarea
                  name="message"
                  autoComplete="off"
                  value={userData.message}
                  onChange={getUserData}
                  required
                />
              </div>
              <div className="submit-btn">
                <button className="btn">submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

// Thanks for watching thid video and source code on my github and link in description. Developer Fahim