import { useParams } from "react-router-dom"

const Courdetail = () => {

    const ab = useParams()

  return (
    <div>
        <h1>{ab.ad} Course details</h1>
    </div>
  )
}

export default Courdetail