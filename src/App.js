import './App.css';
import TopButtons from './components/TopButtons';
import Inputs from './components/Inputs';
import LocationAndTime from './components/LocationAndTime';
import TemperatureAndDetails from './components/TemperatureAndDetails';

function App() {
  return (<div className='mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br
   from-blue-600 to-emerald-600 h-fit shadow-xl shadow-grey-500'>

  <TopButtons/>
  <Inputs/>
  
  <LocationAndTime />
  <TemperatureAndDetails />
  </div>
  
  );
}
export default App;
