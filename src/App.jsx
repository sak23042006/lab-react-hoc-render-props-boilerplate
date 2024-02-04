import './App.css';
import LikeImage from './components/Project-2/LikeImage';
import LikePost from './components/Project-2/LikePost';
import PropImage from './components/Project-2/PropImage';
import PropPost from './components/Project-2/PropPost';


function App() {
  return (
    <div >

      <div className='container1' > 
        <h1  style={{marginBottom:"70px"}} >Some Blogs using HOC</h1>
        <LikePost/>
        <LikeImage/>
      </div>
      <div className='container2' style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}} >
        <h1  style={{marginBottom:"70px"}} >Some Blogs using Render Props</h1>
        <PropPost/>
        <PropImage/>
      </div>
    </div>
  );
}

export default App;