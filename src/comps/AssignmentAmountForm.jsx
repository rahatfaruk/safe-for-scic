import { useState } from "react"

function AssignmentAmountForm({updateAssignmentAmount}) {
  const [assignmentAmount, setAssignmentAmount] = useState(2)
  const handleSubmit = e => {
    e.preventDefault()
    // validate amount
    if (assignmentAmount < 1 || assignmentAmount > 12) {
      alert('assignment amount should be between 1 to 12')
      return
    }

    // update amount in App.jsx
    updateAssignmentAmount(assignmentAmount);
  }

  return (
    <form className="max-w-md px-4 py-6 mx-auto mb-8 shadow-md border text-center" onSubmit={handleSubmit}>
      <label className="block text-sm text-gray-600 mb-3">How many assignments have been completed?</label>
      <div className="flex.">
        <input 
          type="number" 
          value={assignmentAmount}
          onChange={e => setAssignmentAmount(+e.target.value)}
          className="border px-2 py-1 min-w-0"
          placeholder="e.g. 4"
        />
        <button type="submit" className="px-2 py-1 border border-green-400 bg-green-400 hover:opacity-75">Submit</button>
      </div>
    </form>
  )
}

export default AssignmentAmountForm