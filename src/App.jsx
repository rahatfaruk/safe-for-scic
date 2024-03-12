import { useState } from "react"
// components
import Hero from "./comps/Hero"
import Footer from "./comps/Footer"
import AssignmentAmountForm from "./comps/AssignmentAmountForm"
import AssignmentMarksForm from "./comps/AssignmentMarksForm"
import ResultCard from "./comps/ResultCard"

function App() {
  const [assignmentAmount, setAssignmentAmount] = useState(0)
  const [marks, setMarks] = useState(null)

  return (
    <div className="App">
      <Hero />

      <div className="px-4">
        {assignmentAmount === 0 && 
          <AssignmentAmountForm updateAssignmentAmount={amount => setAssignmentAmount(amount)} />
        }

        {assignmentAmount > 0 && !marks &&
          <AssignmentMarksForm assignmentAmount={assignmentAmount} updateAllMarks={marksArr => setMarks(marksArr)} />
        }

        {marks && 
          <ResultCard marks={marks} />
        }
      </div>

      <Footer />
    </div>
  )
}
export default App
