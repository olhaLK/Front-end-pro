import { BrowserRouter } from 'react-router-dom'
import './App.css'
import Content from './components/Content/Content'
import Header from './components/Header/Header'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { restoreAuth } from './store/features/auth'

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(restoreAuth());
  }, [])

  return (
    <>
      <BrowserRouter>
        <Header />
        <Content />
      </BrowserRouter>
    </>
  )
}

export default App;
