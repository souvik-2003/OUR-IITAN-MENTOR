// Function to submit form data to Google Sheet
function submitForm() {
    var sheetId = "1uLm1PqtJ1gqP0k9wINUrDEEZzHZbQeIjTL8BdN7AE7o"; // Replace with your Google Sheet ID
    var sheetName = "Sheet1"; // Replace with your sheet name
    var form = document.getElementById("contactForm"); // Replace "contactForm" with the ID of your form
  
    // Collect form data
    var name = form.elements["name"].value;
    var email = form.elements["email"].value;
    var message = form.elements["message"].value;
  
    // Create an object with form data
    var formData = {
      "Name": name,
      "Email": email,
      "Message": message
    };
  
    // Send form data to Google Sheet using Google Sheets API
    fetch(`https://docs.google.com/spreadsheets/d/1uLm1PqtJ1gqP0k9wINUrDEEZzHZbQeIjTL8BdN7AE7o/edit#gid=0${sheetId}&sheet=${database}`, {
      method: "POST",
      mode: "no-cors",
      body: JSON.stringify(formData)
    })
    .then(response => {
      // Reset form after successful submission
      form.reset();
      alert("Form submitted successfully!");
    })
    .catch(error => {
      console.error("Error submitting form:", error);
      alert("Form submission failed. Please try again later.");
    });
  }
  