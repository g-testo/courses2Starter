// Create an element for placing the course details
// Get the id from the query string (URLSearchParams)
// Fetch course details using the id "http://localhost:8081/api/courses/1"

window.onload = () => {
    // Retrieve id(Query String i.e. >>> ?id=1 <<< ) from url
    const urlParams = new URLSearchParams(location.search);
    const currentCourseId = urlParams.get('id');
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
            `;

        })

    console.log(currentCourseId);
    
};
