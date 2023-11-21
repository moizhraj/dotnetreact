import http from './HttpBase'
import { Forecast }  from '../types/Forecast';

const getAll = () => {
    return http.get<Array<Forecast>>('/weatherforecast');
};

const get = (id: any) => {
    return http.get<Forecast>(`/forecast/${id}`);
};

const WeatherService = {
    getAll,
    get
};

export default WeatherService;