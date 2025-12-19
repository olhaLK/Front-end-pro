import { useEffect, useRef } from 'react';
import './NewProjectPage.css';
import { PRIORITIES } from '../../common/priorities';
import { useDispatch, useSelector } from 'react-redux';
import { getProjectsAsync, resetLoaded, saveProjectAsync } from '../../store/features/projects';
import { useNavigate } from 'react-router-dom';
import { urls } from '../../common/menu';


export default function NewProjectPage() {
  const titleRef = useRef();
  const descriptionRef = useRef();
  const priorityRef = useRef();
  const navigate = useNavigate()

  const dispatch = useDispatch();

  const handleSubmit = async (event) => {
    event.preventDefault();

    await dispatch(
      saveProjectAsync({
        title: titleRef.current.value,
        description: descriptionRef.current.value,
        priority: priorityRef.current.value,
      })
    ).unwrap();

    navigate(urls.PROJECTS_URL);
  }

  return (
    <div className="NewProjectPage">
      <div className="form-container">
        <h1>Add new Project</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input type="text" name="title" placeholder="Enter title" ref={titleRef} />
          </div>
          <div className="form-group">
            <textarea name="description" placeholder="Enter description" ref={descriptionRef}></textarea>
          </div>
          <div className="form-group">
            <select name="priority" ref={priorityRef}>
              {Object.entries(PRIORITIES).map(([key, value]) => (
                <option key={key} value={key}>{value}</option>
              ))}
            </select>
          </div>
          <div className="form-actions">
            <button type="submit">Save</button>
          </div>
        </form>
      </div>
    </div>
  )
}

{/* 
[
  [key, value],
  [key, value]
]
*/}