import 'bootstrap/dist/js/bootstrap.bundle'
import './App.scss';
import Box from './component/Box1/Box';
import Box2 from './component/Box2/Box2';
import Box3 from './component/Box3/Box3';
import Box4 from './component/Box4/Box4';
import Box5 from './component/Box5/Box5'
function App() {
  return (
    <>
   <h1 className='text-center py-5'>Refresh to check
    </h1> 
    <Box/>
    <Box2/>
    <Box3/>
    <Box4/>
    <Box5/>
    </>
  );
}

export default App;
