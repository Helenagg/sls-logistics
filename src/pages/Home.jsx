import ContactForm from "../components/ContactForm"
import Cover from "../components/Cover"
import HorizontalCard from "../components/HorizontalCard"
import About from "./About"

const Home = () => {
  return (
    <div>
        <Cover />
        <About isHomePage/>
        <div className="p-10 bg-gray-900">
        <ContactForm />
        </div>
        <div className="p-10 bg-gray-900">
        <HorizontalCard />
        </div>
        
    </div>
  )
}

export default Home