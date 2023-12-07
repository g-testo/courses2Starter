// Create an element for placing the course details
// Get the id from the query string (URLSearchParams)
// Fetch(GET) course details using the id "http://localhost:8081/api/courses/1"
// Show course on the page

// Create a button to delete this course
// Fetch(DELETE) course by id "http://localhost:8081/api/courses/1"

// Create a link go to updateCourse page "/updateCourse.html?id=1"

window.onload = () => {
    // Retrieve id(Query String i.e. >>> ?id=1 <<< ) from url
    let urlParams = new URLSearchParams(location.search);
    let currentCourseId = urlParams.get('id');
    let deleteBtnEl = document.getElementById("delete-btn");

    deleteBtnEl.onclick =()=>{
        fetch(`http://localhost:8081/api/courses/${currentCourseId}`, {
            method: "DELETE"
        }).then((res)=>{
            console.log("Course has been deleted successfully");
            location.href = "/getAllCourses.html";
        }).catch((err)=>{
            console.error("Course deletion has failed", err);
        })
    }



    fetch(`http://localhost:8081/api/courses/${currentCourseId}`)
        .then((res)=>res.json())
        .then((courseDetails)=>{
            // Get element from page
            let courseContainer = document.getElementById("course-container");

            // Replace content with interpolated class details
            courseContainer.innerHTML = `
                <h2>${courseDetails.courseName}</h2>
                <ul>
                    <li>Departments: ${courseDetails.dept}</li>
                    <li>Course Number: ${courseDetails.courseNum}</li>
                    <li>Instructor: ${courseDetails.instructor}</li>
                    <li>Start Date: ${courseDetails.startDate}</li>
                    <li>Number of days: ${courseDetails.numDays}</li>
                </ul>
                <a href="/updateCourse.html?id=${courseDetails.id}">Update Course</a>
            `;

        })

    console.log(currentCourseId);
    
};
