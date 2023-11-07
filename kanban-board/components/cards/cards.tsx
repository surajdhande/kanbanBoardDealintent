import './cards.scss';
interface CardProps {
    name: string;
    description: string;
    date: string;
  }
const Cards : React.FC<CardProps> = ({name,description,date}) => {
  return (
    <div className='card'>
      <div className='name'>{name}</div>
      <div className='description'>
        {description}
      </div>
      <div className='due-date'>Due date :- {date}</div>
    </div>
  );
};

export default Cards;
