import Calendar from './Components/Calendar/indes.jsx';
require('./assets/style.css');
function App() {
  return <Calendar date={new Date()} />;
}

export default App;
