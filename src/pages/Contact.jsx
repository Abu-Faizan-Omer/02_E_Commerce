import { useRef } from "react";

function Contact() {
  const formRef = useRef();  
  const nameRef = useRef();  
  const emailRef = useRef();
  const phoneRef = useRef();

  const handleSubmit = async (event) => {
    event.preventDefault(); 

    // get detail
    const formData = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      phone: phoneRef.current.value
    };

    try {
      const response = await fetch(
        "https://crudcrud.com/api/5883046aeccb4e0292dee8d3bc02f6ae/contacts",
        {
          method: "POST",
          body: JSON.stringify(formData),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data=response.json()
      console.log("dataaa",data)

      if (response.ok) {
        alert("Data saved successfully!");
        formRef.current.reset(); //Form reset 
      } else {
        throw new Error("Failed to save");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error saving data. Please try again.");
    }
  };

  return (
    <div style={{ padding: "20px", maxWidth: "500px", margin: "0 auto" }}>
      <h1>Contact Us</h1>
      <form ref={formRef} onSubmit={handleSubmit}>
        <div style={{ marginBottom: "15px" }}>
          <label htmlFor="name">Name:</label>
          <input 
            ref={nameRef} type="text"  name="name" id="name" required 
            style={{ width: "100%", padding: "8px", marginTop: "5px" }}
          />
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label htmlFor="email">Email:</label>
          <input 
            ref={emailRef} type="email" name="email"  id="email" required 
            style={{ width: "100%", padding: "8px", marginTop: "5px" }}
          />
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label htmlFor="phone">Phone No:</label>
          <input 
            ref={phoneRef} type="tel" name="phone"  id="phone" required 
            style={{ width: "100%", padding: "8px", marginTop: "5px" }}
          />
        </div>

        <button 
          type="submit"
          style={{ 
            width: "100%", 
            padding: "12px", 
            backgroundColor: "#007bff", 
            color: "white", 
            border: "none", 
            borderRadius: "5px",
            fontSize: "16px"
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Contact;
