import { AiOutlineLinkedin } from "react-icons/ai";
import { FaDog, FaGithubAlt } from "react-icons/fa";
import { FaCode } from "react-icons/fa6";
import { GrUserFemale } from "react-icons/gr";
import Card from './components/Card';
import yo from './statics/yo.png';

function App() {
  return (
    <>
      <div className='h-screen font-sans bg-blue-300 dark:bg-blue-950 flex justify-center items-center'>
        <section className="w-80 md:w-[348px] md:h-[280px] lg:w-[680px] lg:h-[520px]">
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
              text: "Estética Dalva Campos",
              referencia: "https://dalv-web.vercel.app/",
              icon: <GrUserFemale />
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
