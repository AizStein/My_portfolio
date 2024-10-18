document
  .getElementById("contact-form")
  .addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = {
      fullName: document.getElementById("name").value,
      email: document.getElementById("email").value,
      contactNumber: document.getElementById("phone").value || undefined,
      subject: document.getElementById("subject").value,
      message: document.getElementById("message").value,
    };

    try {
      const res = await axios.post(
        "http://localhost:5000/portfolio/add-contact",
        formData
      );

      alert(res.data.message);
    } catch (error) {
      alert(
        "There was a problem submitting your form. Please try again later."
      );
    }
  });
