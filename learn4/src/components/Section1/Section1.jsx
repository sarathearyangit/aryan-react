import Navbar from './Navbar'
import Page1cont from './Page1cont'

const Section1 = (props) => {

  return (
    <div className='h-screen w-full'>
        <Navbar />
        <Page1cont users={props.users}/>
    </div>
  )
}

export default Section1