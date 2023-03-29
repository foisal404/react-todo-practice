import logo from './logo.svg';
import './App.css';
import Blog from './components/Blog/Blog';
import Mobile from './components/Mobile/Mobile';
import Todo from './components/Todo/Todo';

let headingTwo={
  backgroundColor:"lightcyan",
  color:"tomato",
  padding:"20px",
  margin:"20px"
}
function App() {
  return (
    <div className="App">
      <article className='blog'> Hello there i am writing a Blog. Blog is about deepration</article>
      <Mobile></Mobile>
      <h2 style={headingTwo}>hello this is heading about style</h2>
      <p style={{backgroundColor: "#457b9d",color:"#f4a261",borderRadius:"#e5e5e5",padding:"20px",margin:"20px"}}>hello here is a pragraph</p>
      <Blog name="Foisal" right="reserved"></Blog>
      <Todo></Todo>
      
    </div>
  );
}

export default App;
