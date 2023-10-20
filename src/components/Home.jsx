import React from 'react'

function Home() {
  return (
    <section className='content-main'>
      <h1 className='my-8 sm:text-6xl text-5xl font-extrabold w-full text-center text-slate-800'>
        Welcome to a routed app!
      </h1>
      <p className='w-[70%] text-lg text-slate-800 text-center'>
        This react app is a routed react app. and made using react-router-dom. the Header and footer remains same throught.
        but the main content changes as the route change. Making this project, i learnt how to use react-router-dom as well 
        as the efficient use of react-components, props and similar concepts. 
      </p>

      <h1 className='my-8 text-4xl font-extrabold text-center text-slate-800'>
          So, what is the tech stack used?
      </h1>
      <p className='sm:w-[50%] w-[70%] text-md text-slate-800 text-center'>
        The project is made while learning React fundamentals. so, ofcourse, React, and Vite as the build tool.
        For styling, Tailwindcss is used, which provides a large set of utility classes. efficient use of react functional
        components is also required for making performant apps.
      </p>

      <h1 className='my-8 text-4xl font-extrabold text-center text-slate-800'>
          Is react router required?
      </h1>
      <p className='sm:w-[50%] w-[70%] text-md text-slate-800 text-center'>
        If we are using a modern full-stack framework like Next.js, it already has it's own router. but, if we want to
        stick to the legendary MERN stack, and we want a routed app, then, react-router-dom is the go-to option.
      </p>  
      <h1 className='my-8 text-4xl font-extrabold text-center text-slate-800'>
          But, why is react-router required at all?
      </h1>
      <p className='sm:w-[50%] w-[70%] text-md text-slate-800 text-center'>
        React router smartly updates the UI when the route is changed when user clicks a link button in the website.
        It only updates that part which changes, instead of updating/reloading the whole page.
      </p>    
    </section>
  )
}

export default Home