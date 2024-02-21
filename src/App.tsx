import { FaDog, FaGithubAlt } from "react-icons/fa";
import { AiOutlineLinkedin } from "react-icons/ai";
import './App.css';
import Card from './components/Card';
import yo from './statics/yo.png';

function App() {
  return (
    <>
      <div className='App'>
        <section className="card-container">
            <Card 
            body='My work:'
            title='Herik Cunha'
            image={yo}
            btn3={{
              text: "My linkedin",
              type: "primary",
              filled: false,
              referencia: "linkedin.com/in/herik-cunha/",
              icon: <AiOutlineLinkedin />
            }}
            btn2={{
              text: "My adoption website",
              type: "secundary",
              filled: false,
              referencia: "siteflask-110i.onrender.com/",
              icon: <FaDog/>
            }}
            btn={{
              text: "My github",
              type: "third",
              filled: false,
              referencia: "github.com/rherik",
              icon: <FaGithubAlt/>
            }}
            badge={{
              text: "My resume"
            }}
            />
        </section>
      </div>
    </>
  )
}

export default App
