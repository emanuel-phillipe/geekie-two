import React from 'react'

export default function RecentActivity({subjectAbreviation, activityName}:IRecentActivity) {
  return (
    <div className="flex items-end gap-2 bg-zinc-100 hover:bg-zinc-200 cursor-pointer transition-all p-2 px-4 rounded-md">
      <p className="px-1 w-8 font-bold text-center">{subjectAbreviation}</p>
      <p className="text-zinc-500 text-[0.9rem]">{activityName}</p>
    </div>
  )
}

