document.addEventListener("DOMContentLoaded", function () {
  const Mainctformsdesc = document.getElementById("Maincrctfrts");

  // Clear form fields on reload
  if (Mainctformsdesc) {
    Mainctformsdesc.reset();

    Mainctformsdesc.addEventListener("submit", function (e) {
      e.preventDefault();

      let MainCtNs = document.getElementById("MainctName").value.trim();
      let MainCtEs = document.getElementById("MainctEmail").value.trim();
      let MainCtMs = document.getElementById("MainctMessage").value.trim();

      if (MainCtNs === "" || MainCtEs === "" || MainCtMs === "") {
        alert("All fields are required!");
        return;
      }

      if (!/^[^ ]+@[^ ]+\.[a-z]{2,3}$/.test(MainCtEs)) {
        alert("Please enter a valid email address.");
        return;
      }

      alert("Form submitted successfully!");
      this.reset();
    });
  }
});
