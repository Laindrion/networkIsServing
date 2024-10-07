'use client'
import CountUp from 'react-countup';

const AnimataedCounter = ({ amount }: { amount: number }) => {
  return (
    <div className="total-balance-amount flex-center gap-2">
      $<CountUp end={amount} />
    </div>
  )
}

export default AnimataedCounter