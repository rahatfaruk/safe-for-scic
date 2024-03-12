import { useEffect, useState } from "react";

function ResultCard({marks}) {
  const [result, setResult] = useState(null)
  // function checkCriterias() {}

  useEffect(() => {
    function checkCriterias() {
      // ### check criteria 1: submit all task
      for (const mark of marks) {
        if (mark.result === 0) {
          setResult({isSafe: false, feedback: 'Criteria 1 has failed. User must submit all assignment and must secure a positive result (> 0)'})
          return
        }
      }

      // ### check criteria 2: result >= 50% in 1st 9 tasks & result >= 70% is last 3 tasks
      for (const mark of marks) {
        // 1st 9 assignment mark should be at least 50%
        const okFirst9Assignment = (mark.assignment_no <= 9) && (mark.result / mark.total * 100) >= 50 
        // last 3 should be at least 70%
        const okLast3Assignment = mark.assignment_no > 9 && (mark.result / mark.total * 100) >= 70
  
        // enters if any of 1st 9 or last 3 task doesn't passes
        if ( !(okFirst9Assignment || okLast3Assignment) ) {
          setResult( {isSafe: false, feedback: `Criteria 2 has failed. First 9 assignment's (individual) mark should be at least 50% & last 3 assignment's individual mark should be at least 70%.`} )
          return
        } 
      }

      // ### Check criteria 3: if Your total average is below 50
      const grandTotalMark = marks.reduce((total, current) => total + current.result, 0)

      if (grandTotalMark < marks.length * 50) {
        setResult( {isSafe: false, feedback: 'Criteria 3 has failed. Your total average is below 50. Try to get more than 50 in next assignments (if possible) to fill this gap.'} )
        return
      }
  
      // ### all criteria passed
      setResult({isSafe: true, feedback: 'Congrats for your dedication & hard work!'})
    }

    checkCriterias()
  }, [marks])

  return (
    <div className="border px-4 py-6 mb-6 max-w-md mx-auto text-center shadow-md">
      <h2 className="text-3xl mb-4">Result & Feedback</h2>

      {result && 
        <div>
          <p className={`font-bold text-xl mb-1 ${result.isSafe ? 'text-green-700' : 'text-red-700'}`}>{result.isSafe ? 'You are safe for SCIC!' : 'You are in danger for SCIC!'}</p>
          <p className="text-gray-500 text-sm">Feedback: {result.feedback}</p>
        </div>
      }
    </div>
  )
}

export default ResultCard