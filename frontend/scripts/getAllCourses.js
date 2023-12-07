// Create a container for putting our courses
// Fetch all courses and show them on the page

window.onload = () => {
    fetch("http://localhost:8081/api/courses")
        .then((res)=>res.json())
        .then((courses)=>{
            let coursesContainerEl = document.getElementById("courses-container");

            courses.forEach((course)=>{
                let courseCard = document.createElement("div");
                courseCard.classList.add("card");
                // <div class="card"></div>

                courseCard.innerHTML = `
                    <p>${course.courseName}</p>
                `;
                // <div class="card">HTML5 and CSS3</div>

                coursesContainerEl.appendChild(courseCard);
                // <div id="courses-container">
                //      ...
                //      <div class="card">HTML5 and CSS3</div>
                // </div>
            })
        })
};
