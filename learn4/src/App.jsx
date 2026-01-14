import Section1 from './components/Section1/Section1'
import Section2 from './components/Section2/Section2'

const App = () => {

  const users = [
    {
      img:'https://images.unsplash.com/photo-1541560052-5e137f229371?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHdvcmtpbmclMjBwcm9mZXNzaW9uYWx8ZW58MHx8MHx8fDA%3D',
      intro:'',
      color:'orange',
      tag:'Satisfied'
    },
    {
      img:'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHdvcmtpbmd8ZW58MHx8MHx8fDA%3D',
      intro:'',
      color:'red',
      tag:'Underserved'
    },
    {
      img:'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHdvcmtpbmd8ZW58MHx8MHx8fDA%3D',
      intro:'',
      color:'blue',
      tag:'Underbanked'
    },
    {
      img:'https://media.istockphoto.com/id/1070271624/photo/smiling-middle-aged-ceo-handshaking-successful-male-worker-showing-respect.webp?a=1&b=1&s=612x612&w=0&k=20&c=nrYpdaBbo3T7wkZ9IICZBPBLLapTSuqE-4Qbc3lAy78=',
      intro:'',
      color:'yellow',
      tag:'Under'
    },
    {
      img:'https://images.unsplash.com/photo-1498758536662-35b82cd15e29?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHdvcmtpbmd8ZW58MHx8MHx8fDA%3D',
      intro:'',
      color:'green',
      tag:'Underdeserved'
    }
  ]

  return (
    <div>
      <Section1 users={users}/>
      <Section2 />
    </div>
  )
}

export default App