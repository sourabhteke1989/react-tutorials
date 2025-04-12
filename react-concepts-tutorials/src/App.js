import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import UseStateExample from './components/react_hooks/usestate_example/UseStateExmple';
import MultipleStateExample from './components/react_hooks/usestate_example/MultipleStateExample';
import ParentComponent from './components/react_hooks/usestate_example/state_lifting/ParentComponent';
import DerivedStateExample from './components/react_hooks/usestate_example/DerivedStateExample';
import NestedArrayAsStateExample from './components/react_hooks/usestate_example/NestedArrayAsStateExample';
import ObjectAsStateExample from './components/react_hooks/usestate_example/ObjectAsStateExample';
import ComputedValuesOverStateExample from './components/react_hooks/usestate_example/ComputedValuesOverStateExample';
import UseRefExample from './components/react_hooks/userref_example/UseRefExample';
import UseImperativeHandleExample from './components/react_hooks/useImperativeHandle/UseImperativeHandleExample';

function Header() {
  return (
    <header className="App-header">
      <p>
        This is example of creating re-usable component functions in React.
      </p>
    </header>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/usestateexample" element={<UseStateExample />} />
          <Route path="/multiplestateexample" element={<MultipleStateExample />} />
          <Route path="/stateliftingexample" element={<ParentComponent />} />
          <Route path="/derivedstateexample" element={<DerivedStateExample />} />
          <Route path="/computedvaluesoverstateexample" element={<ComputedValuesOverStateExample />} />
          <Route path="/objectasstateexample" element={<ObjectAsStateExample />} />
          <Route path="/nestedarrayasstateexample" element={<NestedArrayAsStateExample />} />

          <Route path="/userefexample" element={<UseRefExample />} />

          <Route path="/useimperativehandleexample" element={<UseImperativeHandleExample />} />

          <Route path="*" element={<Header />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
