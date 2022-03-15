import React from 'react';
import InputForm from './components/InputForm';
import NoteList from './components/NoteList';
import AppButton from './components/UI/Button/AppButton';
import AppInput from './components/UI/Input/AppInput';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <InputForm/>
      <NoteList/>
    </div>
  );
}

export default App;
