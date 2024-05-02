'use client'

import React from "react";
import { Meteors } from "@/components/ui/meteors";


function page() {
  return (
    <div className="bg-black overflow-x-hidden slidebar-hide" >
         <div className="flex flex-col justify-center items-center mt-36 gap-5">
            <h1 className="text-5xl font-semibold">Contact Us</h1>
            <p className="max-w-[50%] text-xl text-center text-gray-500">We're here to help with any questions about our courses, programs, or events.Reach out and let us know how we can assist you in your musical journey.</p>
            <form action="" className="flex flex-col gap-5 w-[80%] sm:w-[60%] lg:w-[50%]">
                <input type="text" className="bg-slate-800 text-slate-400 w-[100%] py-2 rounded px-3" placeholder="Your email address" />
                <textarea name="" className="bg-slate-800 text-slate-400 w-[100%] py-2 px-3 rounded" id="" placeholder="Your message"></textarea>
                <div className="flex justify-center sm:justify-start lg:justify-start">
                <button className="text-white  bg-emerald-400  py-2 px-4 rounded-lg text-xl">Send Message</button>
                </div>
            </form>
         </div>
         <Meteors number={40} />
    </div>
  )
}

export default page