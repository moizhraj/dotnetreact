import React from 'react';
import { Route, Routes } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { WeatherForecast } from './components/WeatherForecast';
import { Counter } from './components/Counter';

import './custom.css'

const App = () => {
    return (
        <Layout>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/counter' element={<Counter />} />
                <Route path='/weather-forecast' element={<WeatherForecast />} />
            </Routes>
        </Layout>
    );
}

export default App;