import { useState } from "react"

function AssignmentMarkInputGroup({assignment_no, updateMarks}) {
  const [result, setResult] = useState(0)
  const [total, setTotal] = useState(60)

  return (
    <div className="flex gap-4 items-center justify-center bg-white py-3 px-4">
      <span className="">Assignment {assignment_no}:</span>
      <div className="flex items-center gap-4">
        <input 
          type="number" 
          value={result}
          onChange={e => {
            const newValue = +e.target.value
            setResult(newValue)
            updateMarks({assignment_no, result:newValue})
          }}
          placeholder="52" 
          className="min-w-0 w-16 px-1 border-b text-center" 
        />
        <span>out of</span>
        <input 
          type="number" 
          value={total}
          onChange={e => {
            const newValue = +e.target.value
            setTotal(newValue)
            updateMarks({assignment_no, total:newValue})
          }}
          className="min-w-0 w-16 px-1 border-b text-center" 
          placeholder="60" 
        />
      </div>
    </div>
  )
}

export default AssignmentMarkInputGroup