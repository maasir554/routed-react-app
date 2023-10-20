import { useLoaderData } from "react-router-dom"

function Github() {
  const ghData = useLoaderData();
  return (
    
    <section className='content-main'>
      <img src={ghData.avatar_url} alt="GH profile picture" className="sm:w-96 sm:h-96 w-64 h-64 rounded-full mb-10"/>
      <p className="text-xl text-yellow-600 ">
        {ghData.login} has {ghData.followers} followers on GitHub.
      </p>
      <h1 className='my-8 text-6xl font-extrabold w-full text-center text-yellow-500'>
        What is GitHub?
      </h1>
      <p className='w-[70%] text-lg text-yellow-800 text-center'>
        GitHub is a platform primarily for hosting our git repositories remotely. it makes it easier to collaborate, even when the contributors
        are far from each other. it also provides free hosting for our static sites. the service is called github-pages.
      </p>
      <h1 className='my-8 text-6xl font-extrabold w-full text-center text-yellow-500'>
        Is GitHub shady?
      </h1>
      <p className='w-[70%] text-lg text-yellow-800 text-center'>
        Yes, it is. some time ago, github made it free to own private repositories on it. and we all were wondering why so?
        turns out that the statement "If everything is free, then you are the product" is applicable here also. 
        Github trained it's copilot on the enormous ammount of code available on its servers. and now it is making money using
        that copilot, by making us subscribe to it. 
      </p>
      


    </section>
  )
}

export default Github