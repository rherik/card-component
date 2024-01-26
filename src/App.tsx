import { FaDog, FaGithubAlt } from "react-icons/fa";
import './App.css';
import Card from './components/Card';
import yo from './images/yo.png';


function App() {
  return (
    <>
      <div className='App'>
        <section className="card-container">
            <Card 
            body='My work:'
            title='Herik Cunha'
            image={yo}
            btn2={{
              text: "My website",
              type: "secundary",
              filled: false,
              referencia: "siteflask-110i.onrender.com/",
              icon: <FaDog/>
            }}
            btn={{
              text: "My github",
              type: "primary",
              filled: false,
              referencia: "github.com/rherik",
              icon: <FaGithubAlt/>
            }}
            badge={{
              text: "My linkedIn",
              referencia: "linkedin.com/in/herik-cunha/"
            }}
            />
        </section>
      </div>
    </>
  )
}

export default App
