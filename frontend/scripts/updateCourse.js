// Create a form that accepts all the fields of the course
// Get the id from the query string (URLSearchParams)
// Use the id to fetch course details to prepopulate the form "http://localhost:8081/api/courses/1"
// Add an event handler for the update button in the form
// Fetch(PUT) to update this course "http://localhost:8081/api/courses/1"
// Redirect to getOneCourse page "/getOneCourse.html?id=1"

window.onload = () => {
    let updateForm = document.getElementById("update-form");

    updateForm.onsubmit = (event) => {
        // Prevent a page refresh that naturally
        event.preventDefault();

        // HW: Get all of the field values and console log them
        console.log("Update submitted");
    };
};
