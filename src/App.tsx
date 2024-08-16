import { AiOutlineLinkedin } from "react-icons/ai";
import { FaDog, FaGithubAlt, FaHeartbeat } from "react-icons/fa";
import { FaCode } from "react-icons/fa6";
import Card from './components/Card';
import yo from './statics/yo.png';

function App() {
  return (
    <>
      <div className='h-screen font-sans bg-blue-300 dark:bg-blue-950 flex justify-center items-center'>
        <section className="">
            <Card 
            body='My work:'
            title='Herik Cunha'
            image={yo}
            btn5={{
              text: "Favs Rest api",
              referencia: "https://favs-api.onrender.com/albuns",
              icon: <FaCode />
            }}
            btn4={{
              text: "My love",
              referencia: "https://rherik.github.io/web-laurository/",
              icon: <FaHeartbeat />
            }}
            btn3={{
              text: "My linkedin",
              referencia: "linkedin.com/in/herik-cunha/",
              icon: <AiOutlineLinkedin />
            }}
            btn2={{
              text: 'My adoption website',
              referencia: "siteflask-110i.onrender.com/",
              icon: <FaDog/>
            }}
            btn={{
              text: "My github",
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
