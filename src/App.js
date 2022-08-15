import './App.css';
import Header from './components/Header';
import AppointmentForm from './components/AppointmentForm';
import Search from './components/Search';
import AptListContextProvider from './contexts/AptListContext';
import AppointmentList from './components/AppointmentList';

function App() {
  return (
    <div className="max-w-5xl min-w-sm my-4 px-4 mx-auto flex flex-col space-y-4">
      <Header />
      <AptListContextProvider>
        <AppointmentForm />
        <Search />
        <AppointmentList />
      </AptListContextProvider>
    </div>
  );
}

export default App;
