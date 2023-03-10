/* Q2

*/
const show400Classes = () => {
  const courses = document.querySelectorAll('.iscourses [class="400level"]');
  courses.forEach(course => console.log(course.textContent));
}

show400Classes(); 
