import React from 'react'
import 'xtendui/src/textareaautosize'

export default function component() {
  return (
    <div>
      <form className="text-sm">
        <div className="xt-row xt-row-x-6 xt-row-y-4">
          <div className="w-full">
            <label className="xt-label mb-3 text-black text-opacity-75 font-semibold"> Textarea autosize </label>
            <textarea
              className="xt-input xt-textarea rounded-md py-2.5 px-4 text-black placeholder-black placeholder-opacity-50 border border-gray-200 bg-gray-200 focus:bg-gray-300 transition overflow-hidden resize-none"
              aria-label="Textarea autosize"
              data-xt-textareaautosize></textarea>
          </div>
        </div>
      </form>
    </div>
  )
}
