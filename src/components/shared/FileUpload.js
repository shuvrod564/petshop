import React from 'react'
import { RxUpload } from 'react-icons/rx' 


export function FileUpload() {
 



  return (
    <>
      <div>
        <div>

           

          <input
            type="file"
            id="file"
            name="file"
            accept="image/png, image/svg+xml"
            className="hidden" 
          />
          <label htmlFor="file" className="cursor-pointer">
            <div
              className="border border-dashed border-gray rounded-lg p-6 sm:py-6 text-center bg-[#F5F5F5] text-dark-light"
            >
              <RxUpload className="mx-auto text-xl mb-2" />
              <span>Drag & Drop or <span className="text-primary font-medium">Choose file</span> to upload</span>
              <span className="block text-sm text-gray">Png, Jpeg or Mp4</span>
            </div>
          </label>
            


          </div>

        </div>
 
    </>
  )
}
