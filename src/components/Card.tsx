import { CardInterface } from "../types";
import Badge from "./Badge";
import Button from "./Button";
import Toogle from './Toogle';

const Card = ({ body, btn, btn2, btn3, btn4, btn5, title, badge, image }: CardInterface) => {
  return (
    <article className='flex flex-col border-r border-b border-l border-gray-400 
    lg:border-gray-400 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 p-4 
    rounded-3xl shadow-xl pt-8'>
      <div>
        {badge && <Badge text={badge.text} filled={badge.filled} referencia={badge.referencia} />}
      </div>
      <div className="flex justify-start mb-8">
        <h3 className='text-gray-900 font-bold text-xl mb-2'>{title}</h3>
      </div>
      {image && <img src={image} alt="Herik svg" className='h-56 w-80 rounded-lg' />}
      <div className="pt-2">
        <p className='text-sm text-blue-400 font-semibold font-mono flex items-center'>{body}</p>
        <div className="grid grid-cols-3 pt-2">
          {btn && <Button text={btn.text} referencia={btn.referencia} icon={btn.icon} />}
          {btn2 && <Button text={btn2.text} referencia={btn2.referencia} icon={btn2.icon} />}
          {btn3 && <Button text={btn3.text} referencia={btn3.referencia} icon={btn3.icon} />}
          {btn4 && <Button text={btn4.text} referencia={btn4.referencia} icon={btn4.icon} />}
          {btn5 && <Button text={btn5.text} referencia={btn5.referencia} icon={btn5.icon} />}
          <Toogle />
        </div>
      </div>
    </article>
  );
};

export default Card;
