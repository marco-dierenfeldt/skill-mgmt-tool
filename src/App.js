import './App.css';
import EmployeeListViewComponent from './components/employee/employee-list-view.component';
import SkillListViewComponent from './components/skill/skill-list-view.component';
import SkillEditComponent from './components/skill/skill-edit.component';
import SkillViewComponent from './components/skill/skill-view.component';
import EmployeeViewComponent from './components/employee/employee-view.component';
import EmployeeEditComponent from './components/employee/employee-edit.component';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        HEADER
      </header>
      <div className="App-content">
        <EmployeeListViewComponent/>
        <hr/>
        <EmployeeViewComponent/>
        <hr/>
        <EmployeeEditComponent id="3"/>
        <EmployeeEditComponent/>
        <hr/>
        <SkillListViewComponent/>
        <hr/>
        <SkillViewComponent/>
        <hr/>
        <SkillEditComponent id="1"/>
        <SkillEditComponent/>
      </div>
    </div>
  );
}

export default App;
