import './App.css';
import EmployeeEditComponent from './components/employee/employee-edit.component';
import EmployeeListViewComponent from './components/employee/employee-list-view.component';
import EmployeeViewComponent from './components/employee/employee-view.component';

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
        <EmployeeEditComponent/>
      </div>
    </div>
  );
}

export default App;
