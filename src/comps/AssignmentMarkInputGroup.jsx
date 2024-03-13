import { useState } from "react"

function AssignmentMarkInputGroup({assignment_no, updateMarks}) {
  const [result, setResult] = useState('')
  const [total, setTotal] = useState(60)

  return (
    <div className="flex flex-col md:flex-row gap-2 md:gap-4 items-center justify-center bg-white py-3 px-4">
      <span className="text-gray-500">Assignment {assignment_no}:</span>
      <div className="flex items-center gap-4">
        <input 
          type="text" 
          value={result}
          onChange={e => {
            const newValue = +e.target.value 
            if (isNaN(newValue)) {
              alert('it must be a number')
              return
            } 
            if (newValue < 0 || newValue > total){
              alert('it must be between 0 and ' + total)
              return
            }
            setResult(newValue)
            updateMarks({assignment_no, result:newValue})
          }}
          placeholder="52" 
          className="min-w-0 w-16 px-1 border-b text-center" 
        />
        <span>out of</span>
        <input 
          type="text" 
          value={total}
          onChange={e => {
            const newValue = +e.target.value
            if (isNaN(newValue)) {
              alert('it must be a number')
              return
            } 
            if (newValue < 0 || newValue > 60){
              alert('it must be between 0 and 60')
              return
            }
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