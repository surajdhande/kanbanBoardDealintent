import "./cards.scss";
import Delete from "../../images/delete.png";
import Image from "next/image";
import axios from "axios";

interface CardProps {
  name: string;
  description: string;
  id: any;
}
const Cards: React.FC<CardProps> = ({ name, description, id }) => {
    const handleDelete = async () => {
      try {
        const response = await axios.delete(`http://localhost:3005/api/boards/${id}`);
  
        // Handle a successful response here, if needed
        console.log('Data deleted successfully:', response.data);
      } catch (error) {
        // Handle errors, such as network issues or API errors
        console.error('Error deleting data:', error);
      }
    };  
  return (
    <div className="card">
      <Image
        src={Delete}
        alt="Delete Image"
        className="delete-img"
        onClick={handleDelete}
      />
      <div className="name">{name}</div>
      <div className="description">{description}</div>
    </div>
  );
};

export default Cards;
