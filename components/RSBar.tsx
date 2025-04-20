import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { countTransactionCategories } from '@/lib/utils'
import BCard from './BCard'


const RSBar = ({ user, transactions, banks }: RightSidebarProps) => {
  const categories: CategoryCount[] = countTransactionCategories(transactions);

  return (
    <aside className="no-scrollbar hidden h-screen max-h-screen w-[355px] flex-col border-l border-gray-200 bg-white xl:flex xl:overflow-y-scroll">
      <section className="flex flex-col pb-8">
        <div className="h-[120px] w-full bg-blue-400 bg-cover bg-no-repeat" />
        <div className="relative flex px-6 max-xl:justify-center">
          <div className="absolute -top-8 flex size-24 items-center justify-center rounded-full border-8 border-white bg-gray-100 p-2 shadow-profile">
            <span className="text-5xl font-bold text-blue-500">
              {user.firstName[0]}
            </span>
          </div>

          <div className="flex flex-col pt-24">
            <h1 className="text-[24px] font-semibold text-gray-900">
              {user.firstName} {user.lastName}
            </h1>
            <p className="text-[16px] font-normal text-gray-600">
              {user.email}
            </p>
          </div>
        </div>
      </section>

      <section className="flex flex-col justify-between gap-8 px-6 py-8">
        <div className="flex w-full items-center justify-between">
          <h2 className="text-[18px] font-semibold text-gray-900">My Banks</h2>
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition">
            <Image
              src="/icons/plus.svg"
              width={20}
              height={20}
              alt="plus"
            />
            <span className="text-[14px] font-semibold text-gray-600">
              Add Bank
            </span>
          </Link>
        </div>

        {banks?.length > 0 && (
          <div className="relative flex flex-1 flex-col items-center justify-center gap-5">
            <div className="relative z-10">
              <BCard
                key={banks[0].$id}
                account={banks[0]}
                userName={`${user.firstName} ${user.lastName}`}
                showBalance={false}
              />
            </div>
            {banks[1] && (
              <div className="absolute right-0 top-8 z-0 w-[90%] opacity-80">
                <BCard
                  key={banks[1].$id}
                  account={banks[1]}
                  userName={`${user.firstName} ${user.lastName}`}
                  showBalance={false}
                />
              </div>
            )}
          </div>
        )}

        <div className="mt-10 flex flex-1 flex-col gap-6">
          <h2 className="text-[18px] font-semibold text-gray-900">Top Categories</h2>
          <div className="space-y-5">
            {categories.map((category) => (
              <Category key={category.name} category={category} />
            ))}
          </div>
        </div>
      </section>
    </aside>
  )
}

export default RSBar
