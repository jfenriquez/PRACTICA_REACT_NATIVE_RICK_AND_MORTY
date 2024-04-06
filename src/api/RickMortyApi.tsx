import axios from "axios";

//export const RickMortyApi = axios.create({});

import { API_HOST } from "../utils/constants";
import { Personaje } from "../interfaces/personajeInterfaces";

export async function getPersonajesApi(endpointUrl: any) {
  console.log("endpointUrl", endpointUrl);
  try {
    const response = await fetch(endpointUrl);
    const result: Personaje = await response.json();
    return result;
  } catch (err) {
    throw err;
  }
}

export async function getSearchPersonajesApi(endpointUrl: any) {
  console.log("endpointUrl", endpointUrl);
  try {
    const response = await fetch(endpointUrl);
    const result: any = await response.json();
    console.log("result", result);
    return result;
  } catch (err) {
    throw err;
  }
}

export async function getLocationApi(url: any) {
  console.log("endpointUrl", url);
  try {
    const response = await fetch(url);
    const result: Location = await response.json();
    return result;
  } catch (err) {
    throw err;
  }
}
