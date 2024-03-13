import { useState } from "react";
import AssignmentMarkInputGroup from "./AssignmentMarkInputGroup";

function AssignmentMarksForm({assignmentAmount, updateAllMarks}) {
  const [marks, setMarks] = useState(
    Array(assignmentAmount).fill(null).map((_, index) => ( {assignment_no: index+1, total: 60, result: 0} ))
  )

  // udpate marks when user updates mark in input
  const updateMarks = (mark) => {
    setMarks(oldMarks => {
      return oldMarks.map(oldMark => {
        if (oldMark.assignment_no === mark.assignment_no) {
          return {...oldMark, ...mark}
        } else {
          return oldMark
        }
      })
    })
  }

  const handleSubmit = e => {
    e.preventDefault()
    updateAllMarks(marks)
  }

  return (
    <form className="max-w-md px-4 py-8 mx-auto mb-8 space-y-4 bg-gray-200 shadow-md" onSubmit={handleSubmit}>
      <h2 className="text-center text-lg">Enter your assignment marks:</h2>

      {Array(assignmentAmount).fill(null).map((_, index) => 
        <AssignmentMarkInputGroup key={index} assignment_no={index+1} updateMarks={updateMarks} />
      )}

      <button type="submit" className="w-full px-2 py-1 border border-green-400 bg-green-400 hover:opacity-75">Submit</button>
    </form>
  )
}
export default AssignmentMarksForm
