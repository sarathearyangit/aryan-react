import { Link, Outlet } from "react-router-dom"

const Contact = () => {
  return (
    <div>
        <div className='flex justify-center gap-8 py-4'>
            <Link to='/contact/office'>Office</Link>
            <Link to='/contact/personal'>Personal</Link>
        </div>

        <Outlet />
    </div>
  )
}

export default Contact