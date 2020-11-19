import './App.css';
import HeaderComponent from './components/HeaderComponent';
import SidebarComponent from './components/SidebarComponent';
// import LoginComponent from './components/LoginComponent';
import NoteUpsertComponent from './components/notes/NoteUpsertComponet';

function App() {
  return (
    <>
      <HeaderComponent/>
      <SidebarComponent/>
      {/* <LoginComponent/> */}
      <NoteUpsertComponent/>
    </>
  );
}

export default App;
