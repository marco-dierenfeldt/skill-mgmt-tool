import './App.css';
import EmployeeListViewComponent from './components/employee/employee-list-view.component';
import SkillListViewComponent from './components/skill/skill-list-view.component';
import SkillEditComponent from './components/skill/skill-edit.component';
import SkillViewComponent from './components/skill/skill-view.component';
import EmployeeViewComponent from './components/employee/employee-view.component';
import EmployeeEditComponent from './components/employee/employee-edit.component';
import MainComponent from './components/app/main.component';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        HEADER
      </header>
      <div className="App-content">
        <MainComponent/>
      </div>
    </div>
  );
}

export default App;
