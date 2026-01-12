import Card from './components/Card'

const App = () => {

  const jobOpenings = [
  {
    brandlogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWJpwUvZMFKp_kXyJA2yd8zulrzNfK4ZIOgQ&s",
    companyName: "Google",
    jobRole: "Frontend Developer",
    datePosted: "5 days ago",
    tag1: "Full Time",
    tag2: "Junior",
    pay: "$45/hr",
    location: "Bangalore"
  },
  {
    brandlogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZJcJGY68Yx_kV231-t7nz5vktYpcjaaVpcQ&s",
    companyName: "Amazon",
    jobRole: "Data Analyst",
    datePosted: "2 days ago",
    tag1: "Full Time",
    tag2: "Senior",
    pay: "$60/hr",
    location: "Hyderabad"
  },
  {  
    brandlogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFwMgyd_ebsS1fNjtfDDIXIhQO0WiUQ8effUQGgF8JhAGb74RqcZ1mORM&s",
    companyName: "Meta Reality Labs",
    jobRole: "Data Analyst",
    datePosted: "9 days ago",
    tag1: "Full Time",
    tag2: "Senior",
    pay: "$68/hr",
    location: "Remote"
  },
  {
    brandlogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFwMgyd_ebsS1fNjtfDDIXIhQO0WiUQ8effUQGgF8JhAGb74RqcZ1mORM&s",
    companyName: "Meta",
    jobRole: "Frontend Engineer",
    datePosted: "7 days ago",
    tag1: "Remote",
    tag2: "Mid Level",
    pay: "$55/hr",
    location: "Mumbai"
  },
  {
    brandlogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBbajbN3NNmF0eG7HfkMDVsLMINGdkj3AGKQ&s",
    companyName: "Apple",
    jobRole: "UI Engineer",
    datePosted: "1 day ago",
    tag1: "Full Time",
    tag2: "Senior",
    pay: "$65/hr",
    location: "Bangalore"
  },
  {
    brandlogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwTAqOYhdFiuJlNkLo16vC-9xCc2py91PSxg&s",
    companyName: "Netflix",
    jobRole: "Frontend Developer",
    datePosted: "3 days ago",
    tag1: "Contract",
    tag2: "Senior",
    pay: "$70/hr",
    location: "Remote"
  },
  {
    brandlogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnArCvdRc-pCa8rtqA2uBoOCcMWF1b8eYwjg&s",
    companyName: "Microsoft",
    jobRole: "Data Analyst",
    datePosted: "6 days ago",
    tag1: "Full Time",
    tag2: "Junior",
    pay: "$40/hr",
    location: "Noida"
  },
  {
    brandlogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWJpwUvZMFKp_kXyJA2yd8zulrzNfK4ZIOgQ&s",
    companyName: "Google DeepMind",
    jobRole: "Research Intern",
    datePosted: "4 days ago",
    tag1: "Part Time",
    tag2: "Intern",
    pay: "$35/hr",
    location: "Bangalore"
  }
];


  return (
    <div className='parent'>

      {jobOpenings.map(function(el,idx){

          return <div key={idx}><Card clogo={el.brandlogo} loc={el.location} time={el.tag1} date={el.datePosted} pay={el.pay} company={el.companyName} job={el.jobRole} post={el.tag2}/></div>
      })}

    </div>
  )
}

export default App