import './App.css';
import SkillListViewComponent from './components/skill/skill-list-view.component';
import SkillEditComponent from './components/skill/skill-edit.component';
import SkillViewComponent from './components/skill/skill-view.component';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        HEADER
      </header>
      <div className="App-content">
        <SkillListViewComponent/>
        <hr/>
        <SkillViewComponent/>
        <SkillEditComponent id="1"/>
      </div>
    </div>
  );
}

export default App;
