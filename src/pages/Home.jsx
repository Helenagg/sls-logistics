import ContactForm from "../components/ContactForm"
import Cover from "../components/Cover"
import About from "./About"
import Contact from "./Contact"

const Home = () => {
  return (
    <div>
        <Cover />
        <About isHomePage/>
        <div className="p-10 bg-black opacity-90">
        <ContactForm />
        </div>
    </div>
  )
}

export default Home