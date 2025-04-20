import React from 'react'

const HeaderB = ({ type = "title", title, subtext, user }: HeaderBoxProps) => {
  return (
    <div className="flex flex-col gap-1 lg:gap-2">
      <h1 className="text-[24px] lg:text-[30px] font-semibold text-gray-900">
        {title}
        {type === 'greeting' && (
          <span className="ml-2 text-blue-600 capitalize">
            {user}
          </span>
        )}
      </h1>
      {subtext && (
        <p className="text-[14px] lg:text-[16px] font-normal text-gray-600">
          {subtext}
        </p>
      )}
    </div>
  )
}

export default HeaderB
