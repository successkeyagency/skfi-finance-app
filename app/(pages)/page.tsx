import React from 'react'
import HeaderB from '@/components/HeaderB'
import TBBox from '@/components/TBBox'
import RSBar from '@/components/RSBar'

const Dashboard = () => {
  const loggedIn = { firstName: 'william' }

  return (
    <section className="no-scrollbar flex w-full flex-row max-xl:max-h-screen max-xl:overflow-y-scroll">
      <div className="no-scrollbar flex w-full flex-1 flex-col gap-8 px-5 sm:px-8 py-7 lg:py-12 xl:max-h-screen xl:overflow-y-scroll">
        <header className="flex flex-col justify-between gap-8">
          <HeaderB 
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || 'Guest'}
            subtext="Access and manage your account and transactions efficiently."
          />

          <div className="bg-gray-100 rounded-xl shadow-sm p-6">
            <TBBox 
              accounts={[]} 
              totalBanks={1} 
              totalCurrentBalance={1250.35}
            />
          </div>
        </header>

        recent transactions
      </div>

      <RSBar 
        user={loggedIn}
        transactions={[]}
        banks={[{currentBalance: 123.50}, { currentBalance: 500.40}]}
      />
    </section>
  )
}

export default Dashboard
