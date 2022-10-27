import "./main.css"
import data from "../../assest/data"



 const Main = () => {
console.log(data)
  return (
    <div className="main">
    {data.map((item)=>{
        return(
            <div className="card">
            <img src={item.image} alt={item.title} />
            </div>
        )
    })}
    </div>
  )
}
export default Main;