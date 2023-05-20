import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from './HomePage/';
import { appContext } from './Helpers/appContext';
import { useFetchCountries } from './Helpers/useData';
import { AmericasPage } from './AmericasPage';
import { EuropePage } from './EuropePage';
import { AsiaPage } from './AsiaPage';
import { OceaniaPage } from './OceaniaPage';
import { AfricaPage } from './AfricaPage';

function App() {
  const [countries, setCountries] = useFetchCountries("https://restcountries.com/v3.1/all");
  return (
    
    <HashRouter>
      <appContext.Provider value={{countries, setCountries}}>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/Americas' element={<AmericasPage/>}/>
          <Route path='/Europe' element={<EuropePage/>}/>
          <Route path='/Asia' element={<AsiaPage/>}/>
          <Route path='/Oceania' element={<OceaniaPage/>}/>
          <Route path='/Africa' element={<AfricaPage/>}/>
        </Routes>
      
      </appContext.Provider>
    </HashRouter>
    
  );
}

export  { App };