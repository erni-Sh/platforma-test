import React from 'react';


import AppHeader from './components/app-header/app-header';
import FilterForm from './components/filter-form/filter-form';
import FilterColor from './components/filter-color/filter-color';
import ListView from './components/list-view/list-view';

function App() {
  return (
    <>
      <AppHeader />
      <FilterForm />
      <FilterColor />
      <ListView />
    </>
  );
}

export default App;
