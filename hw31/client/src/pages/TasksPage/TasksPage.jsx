import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import './TasksPage.css';
import TaskCard from '../../components/TaskCard/TaskCard';
import { useEffect, useState } from 'react';
import { getTasksAsync, saveTaskAsync } from '../../store/features/tasks';

export default function TasksPage() {
  const { data: tasks } = useSelector(state => state.tasks);
  const { projectId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTasksAsync(projectId));
  }, [dispatch, projectId]);

  const [showForm, setShowForm] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('low');

  const handleAddClick = () => setShowForm(true);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!projectId) return;
    await dispatch(saveTaskAsync({ title, description, priority, projectId }));
    setTitle(''); setDescription(''); setPriority('low'); setShowForm(false);
    dispatch(getTasksAsync(projectId));
  }


  return (
    <div className='TasksPage'>
      {projectId && !showForm && (
        <div className="add-task-wrapper">
          <button type="button" onClick={handleAddClick}>Add Task</button>
        </div>
      )}

      {showForm && (
        <form className="task-form" onSubmit={handleSubmit}>
          <input value={title} onChange={event => setTitle(event.target.value)} placeholder="Title" />
          <textarea value={description} onChange={event => setDescription(event.target.value)} placeholder="Description" />
          <select value={priority} onChange={event => setPriority(event.target.value)}>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
          <button type="submit">Save Task</button>
          <button type="button" onClick={() => setShowForm(false)}>Cancel</button>
        </form>
      )}

      {tasks.length === 0 && <span>No tasks available</span>}
      {tasks.map(task => (
        <TaskCard key={task.id} {...task} />
      ))}
    </div>
  )
}