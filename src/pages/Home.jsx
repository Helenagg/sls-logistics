import Cover from "../components/Cover"
import About from "./About"

const Home = () => {
  return (
    <div>
        <Cover />
        <About isHomePage/>
    </div>
  )
}

export default Home