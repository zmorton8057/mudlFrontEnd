import React, { Component } from 'react';
import axios from 'axios';
const BASE_URL = 'https://mudl-backend.herokuapp.com'
class API {
    static getMoods(mood1, mood2) {
        let route = `${BASE_URL}/apiroutes/mood/`
        if (mood1) route += mood1 + '/'
        if (mood2) route += mood2
        console.log(route)
        return axios.get(route)
    }

    static getMantra(mantra_id){
        let passinId = mantra_id||"";
        let route = `https://mudl-backend.herokuapp.com/apiroutes/mantras/`
        route+=passinId
        console.log(route)
        return axios.get(route)
    }
}

export default API