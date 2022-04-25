import NewArray from "./NewArray";
import Navbar from "./Navbar";

function BaseLayout(props) {
  return (
    <div>
      <Navbar />
      
      {props.children}
      <NewArray />
    </div>
  )
}


export default BaseLayout