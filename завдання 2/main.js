const courses = [
    { id: 1, title: "Python Basics", category: "Programming", price: 1200, students: 150 },
    { id: 2, title: "UI/UX Design", category: "Design", price: 1800, students: 90 },
    { id: 3, title: "JavaScript", category: "Programming", price: 1500, students: 200 },
    { id: 4, title: "Photoshop", category: "Design", price: 900, students: 110 },
    { id: 5, title: "Data Science", category: "Programming", price: 2500, students: 75 }
  ];const programmingCourses = courses.filter((course) => course.category === "Programming");
  console.log(programmingCourses);const titlesWithPrice = courses.map((course) => course.title + " — " + course.price + " грн");
  console.log(titlesWithPrice);const courseFour = courses.find((course) => course.id === 4);
  console.log(courseFour);
  const sortedByStudents = [...courses].sort((a, b) => b.students - a.students);
  console.log(sortedByStudents);
  function getAveragePrice(courseList) {
    let sum = 0;
  
    for (const course of courseList) {
      sum = sum + course.price;
    }
  
    return sum / courseList.length;
  }
  
  console.log(getAveragePrice(courses));
  