import PriorityLabel from '../PriorityLabel/PriorityLabel';
import './ProjectCard.css';

export default function ProjectCard({ id, title, description, priority, onClick }) {
  const handleClick = () => {
    onClick && onClick(id);
  }
  return (
    <div className='ProjectCard' onClick={handleClick}>
      <h3>{title}</h3>
      <PriorityLabel priority={priority} />
      <p>
        {description}
      </p>
    </div>
  )
}