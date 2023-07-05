import React from 'react'
import LoadingColor from '../../../components/LoadingColor'

export default function SkeletonColor() {
  return (
    <>
      <div class="w-full mx-auto">
        <div class="animate-pulse flex space-x-4">
          <div className="flex flex-col w-full gap-6 overflow-auto flex-1">
            <div className="flex flex-col gap-6">
              <div className="rounded-lg flex flex-col w-full overflow-hidden bg-white">
                <LoadingColor />
                <LoadingColor />
                <LoadingColor />
                <LoadingColor />
                <LoadingColor />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
