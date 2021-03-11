// ******************************* MAP

// const myAwesomeArray = [1, 2, 3, 4, 5, 6, 7, 8]

// const squaresArray = myAwesomeArray.map(
//   currentNumber => currentNumber * currentNumber
// )

// console.log(squaresArray)

const students = [
  { id: 123123, name: "Antoni", homeworkScore: 123 },
  { id: 13565, name: "Baxtiyor", homeworkScore: 100 },
  { id: 5, name: "Flynn", homeworkScore: 500 },
]

const studentIds = students.map(student => student.id)
const studentNames = students.map(student => student.name)

console.log(studentIds)
console.log(studentNames)

// const studentsIds = []

// students.forEach(student => studentsIds.push(student.id))

// ******************************* FILTER

const filteredStudents = students.filter(student => {
  // if (student.homeworkScore <= 100) {
  //   console.log("study hard")
  //   return false
  // } else return true
  student.homeworkScore <= 100 ? console.log("study hard") : "some"
})

students.forEach(student => {
  student.homeworkScore <= 100 ? console.log("study hard") : console.log("some")
})

// ******************************* REDUCE

const totalHWScore = students.reduce(
  (total, student) => total + student.homeworkScore,
  0 // initial value for the accumulator
)

// I iteration --> total = 0, student.name = "Antoni" returns 0 + 123
// II iteration --> total = 123, student.name = "Baxtiyor" returns 123 + 100
// III iteration --> total = 223, student.name = "Flynn" returns 223 + 500
// totalHWScore = 723

console.log(totalHWScore)

const result = students
  .map(student => student.homeworkScore)
  .filter(score => score > 100)
  .reduce((total, score) => total + score, 0)

console.log(result)
