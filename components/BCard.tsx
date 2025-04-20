import { formatAmount } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


const BCard = ({ account, userName, showBalance = true }: CreditCardProps) => {
  return (
    <div className="flex flex-col">
      <Link
        href={`/transaction-history/?id=${account.appwriteItemId}`}
        className="relative flex h-[190px] w-full max-w-[320px] justify-between rounded-[20px] border border-blue-700 bg-blue-600 shadow-creditCard backdrop-blur-[6px] overflow-hidden"
      >
        <div className="relative z-10 flex size-full max-w-[228px] flex-col justify-between rounded-l-[20px] bg-bank-gradient px-5 pb-4 pt-5">
          <div className="space-y-1">
            <h1 className="text-[16px] font-semibold text-white leading-[24px]">
              {account.name || userName}
            </h1>
            <p className="text-white font-ibm-plex-serif text-[18px] font-black">
              {formatAmount(account.currentBalance)}
            </p>
          </div>

          <article className="flex flex-col gap-2">
            <div className="flex justify-between items-center">
              <h1 className="text-[12px] font-semibold text-white leading-[16px]">
                {userName}
              </h1>
              <h2 className="text-[12px] font-semibold text-white leading-[16px]">
                ●● / ●●
              </h2>
            </div>
            <p className="text-[14px] font-semibold tracking-widest text-white leading-[20px]">
              ●●●● ●●●● ●●●● <span className="text-[16px]">{account?.mask}</span>
            </p>
          </article>
        </div>

        <div className="flex size-full flex-1 flex-col items-end justify-between rounded-r-[20px] bg-bank-gradient py-5 pr-5 bg-cover bg-center bg-no-repeat">
          <Image
            src="/icons/Paypass.svg"
            width={20}
            height={24}
            alt="pay"
          />
          <Image
            src="/icons/mastercard.svg"
            width={45}
            height={32}
            alt="mastercard"
            className="ml-5"
          />
        </div>

        <Image
          src="/icons/lines.png"
          width={316}
          height={190}
          alt="lines"
          className="absolute top-0 left-0 z-0"
        />
      </Link>

      {showBalance && (
        <div className="mt-2">
          {/* <Copy title={account?.sharaebleId} /> */}
        </div>
      )}
    </div>
  )
}

export default BCard
