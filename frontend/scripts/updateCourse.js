// Create a form that accepts all the fields of the course
// Get the id from the query string (URLSearchParams)
// Use the id to fetch course details to prepopulate the form "http://localhost:8081/api/courses/1"
// Add an event handler for the update button in the form
// Fetch(PUT) to update this course "http://localhost:8081/api/courses/1"
// Redirect to getOneCourse page "/getOneCourse.html?id=1"

window.onload = () => {
    let updateForm = document.getElementById("update-form");
    // Get all fields from form
    let deptInputEl = document.getElementById("dept");
    let courseNumInputEl = document.getElementById("courseNum");
    let courseNameInputEl = document.getElementById("courseName");
    let instructorInputEl = document.getElementById("instructor");
    let startDateInputEl = document.getElementById("startDate");
    let numDaysInputEl = document.getElementById("numDays");

    // Get the current course ID from query param
    let urlParams = new URLSearchParams(location.search);
    let currentCourseId = urlParams.get("id");

    // Fetch to get current course details
    fetch(`http://localhost:8081/api/courses/${currentCourseId}`)
        .then((res) => res.json())
        .then((courseDetails) => {
            // Set the form values to the retrieved current course (Prepopulate our form)
            deptInputEl.value = courseDetails.dept;
            courseNumInputEl.value = courseDetails.courseNum;
            courseNameInputEl.value = courseDetails.courseName;
            instructorInputEl.value = courseDetails.instructor;
            startDateInputEl.value = courseDetails.startDate;
            numDaysInputEl.value = courseDetails.numDays;
        });

    updateForm.onsubmit = (event) => {
        // Prevent a page refresh that naturally
        event.preventDefault();
        // Creating the data to update from the current value of our form fields
        let currentFormData = {
            dept: deptInputEl.value,
            courseNum: courseNumInputEl.value,
            courseName: courseNameInputEl.value,
            instructor: instructorInputEl.value,
            startDate: startDateInputEl.value,
            numDays: numDaysInputEl.value,
        };

        // Send the data to the API using Fetch
        fetch(`http://localhost:8081/api/courses/${currentCourseId}`, {
            method: "PUT",
            headers:{
                "content-type": "application/json"
            },
            body: JSON.stringify(currentFormData),
        })
            .then(() => {
                console.log("Course updated successfully");
                location.href = `/getOneCourse.html?id=${currentCourseId}`;
            })
            .catch((err) => {
                console.log(err);
            });
    };
};
