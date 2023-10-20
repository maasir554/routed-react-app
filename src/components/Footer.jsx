import { NavLink } from "react-router-dom"

const FooterLink = ( {to, text} ) => {
  return(
    <li>
      <NavLink to={to} className={'hover:underline '} >
        {text}
      </NavLink>
    </li>
  )
}

function Footer() {
  return (
    <div className='bg-slate-100 p-5 text-slate-500 text-sm flex flex-row justify-center items-start gap-32 ' >      
      <ul className='flex flex-col justify-center items-start gap-1'>
        <li className='font-semibold'>Routed App</li>
        <li> Made using React Router Dom</li>
        <li className='mt-2'> by Mohammad Maasir</li>
      </ul>

      <ul className='flex flex-col justify-center items-start gap-1'>
        <li className='font-semibold flex flex-nowrap'>Navigate to </li>
        <FooterLink to="/routed-react-app" text="Home" />
        <FooterLink to="/routed-react-app/about" text="About" />
        <FooterLink to="/routed-react-app/contact" text="Contact" />
        <FooterLink to="/routed-react-app/github" text="GitHub" />
      </ul>
      
      <ul className='flex flex-col justify-center items-start gap-1'>
        <li className='font-semibold'>Legal</li>
        <li>cookie policy</li>
        <li>privacy policy</li>
        <li>user agreement license</li>
        <li>don't sell my data</li>
      </ul>
      
      <ul className='flex flex-col justify-center items-start gap-1'>
        <li className='font-semibold'>Social media</li>
        <li>facebook</li>
        <li>twitter</li>
        <li>instagram</li>
        <li>github</li>
        <li>linkedin</li>
        <li>Hashnode</li>
      </ul>

    </div>
  )
}

export default Footer
