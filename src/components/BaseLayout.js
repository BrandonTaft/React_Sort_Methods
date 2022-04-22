import NewArray from "./NewArray";
import Navbar from "./Navbar";

function BaseLayout(props) {
  return (
    <div>
      <Navbar />
      <NewArray />
      {props.children}
    </div>
  )
}


export default BaseLayout