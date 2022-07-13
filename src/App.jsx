import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import InitPage from './pages/InitPage';
import SkillsPage from './pages/SkillsPage';
import ProjectsPage from './pages/ProjectsPage';
import ContactMe from './pages/ContactMe';
import AboutPage from './components/AboutPage';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <InitPage/>
      <SkillsPage/>
      <ProjectsPage/>
      <ContactMe/>
      <AboutPage/>
    </div>
  );
}

export default App;
