import React from 'react'
import AnimatedCounter from './AnimatedCounter'
import DoughnutChart from './DoughnutChart'

type TotalBalanceBoxProps = {
  accounts: any[],
  totalBanks: number,
  totalCurrentBalance: number
}

const TBBox = ({
  accounts = [], 
  totalBanks, 
  totalCurrentBalance
}: TotalBalanceBoxProps) => {
  return (
    <section className="flex w-full items-center gap-6 rounded-2xl border border-gray-200 bg-white p-6 shadow-md sm:gap-8 sm:p-8">

      <div className="flex items-center justify-center size-full max-w-[100px] sm:max-w-[120px]">
        <DoughnutChart accounts={accounts} />
      </div>
      
      <div className="flex flex-col gap-6">
        <h2 className="text-lg sm:text-xl font-semibold text-gray-900">
          Bank Accounts: {totalBanks}
        </h2>

        <div className="flex flex-col gap-2">
          <p className="text-sm sm:text-base font-medium text-gray-600">
            Total Current Balance
          </p>
          <div className="flex items-center gap-2 text-xl sm:text-2xl font-bold text-gray-900">
            <AnimatedCounter amount={totalCurrentBalance} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default TBBox
