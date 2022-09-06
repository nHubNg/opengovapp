import {Visit} from "../../data"
import "./visit.css"
const VisitOur = () => {
    return ( 
        <div className="h-screen bg-primary ">
            <p className="font-sans text-center text-3xl text-white font-bold">Our ----------</p>
        <ul className="honeycomb">
            {
                Visit.map((item =>{
                    return(
                        <a href={item.link}>
                            <li className=" honeycomb-cell">
                        <img src={item.logo} alt="Org Logo" className="honeycomb-cell_img " />
                        <div className="honeycomb-cell_title">{item.title}</div>
                            </li>
                        </a>
                    )
                }))
            }
            <li className="honeycomb-cell honeycomb_Hidden">

            </li>
        </ul>
        </div >
     );
}
 
export default VisitOur;