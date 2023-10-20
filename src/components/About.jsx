import React from 'react'

function About() {
  return (
    <section className='content-main'>
      <h1 className='my-8 text-6xl font-extrabold w-full text-center text-purple-900'>
        About this routed app 
      </h1>
      <p className='w-[60%] text-lg text-slate-800 text-center'>
        Routing is required in full-stack apps because it gives you acessable links, so that we cna navigate to the link
        directly, instead of clicking the buttons.
      </p>

      <h1 className='my-8 text-5xl font-extrabold w-full text-center text-green-600'>
        When was this app built?
      </h1>
      <p className='w-[60%] text-md text-slate-800 text-center'>
        this app was built after learning the basic concepts of React. in the month of Otober, 2023. date: 19-10-2023.
      </p>
      <h1 className='my-8 text-5xl font-extrabold w-full text-center text-lime-500'>
        where did you learn all this?
      </h1>
      <p className='w-[60%] text-md text-slate-800 text-center'>
        This app is built during the completion of the course "Chai aur React" by Hitesh Chaudhary sir, who made his course
        on his YouTube channel, "Chai Aur Code"
      </p>
      <h1 className='my-8 text-5xl font-extrabold w-full text-center text-yellow-500'>
        How can I learn all this? 
      </h1>
      <p className='w-[60%] text-md text-slate-800 text-center'>
        To learn React, you need to be femiliar with fundamentals of JavaScript. and ofcourse, for UI, CSS and HTML are a must.
        dont't worry, there are ample of resources available online to learn and practice these skkills. dedication and curiosity
        is the only key.
      </p>

    </section>
  )
}

export default About