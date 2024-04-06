import { useEffect, useRef, useState } from "react";
import { getPersonajesApi } from "../api/RickMortyApi";
import { Personaje, Result } from "../interfaces/personajeInterfaces";
import { API_HOST } from "../utils/constants";

export const useRickPaginated = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [characters, setCharacters] = useState<any[]>([]);

  const nextPageUrl = useRef(`${API_HOST}/character/?page=1`);
  

  useEffect(() => {
    (async () => {
      await loadCharacter();
    })();
  }, []);

  const loadCharacter = async () => {
    try {
      setIsLoading(true);

      const resp = await getPersonajesApi(nextPageUrl.current);
      nextPageUrl.current = resp.info.next;
      //loadMoreCharacter(resp.results);
      setCharacters([...characters, ...resp.results]);
      //console.log("respuesta", resp.info.next);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
    }
  };


  //////RETORNAR ESTADOS Y FUNCION DE LOADCHARACTER
  return {
    isLoading,
    characters,
    loadCharacter,
  };
};
