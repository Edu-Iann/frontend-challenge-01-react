import axios from 'axios';
import { Plant } from '../types/types';

export const fetchData = async (
  sunOption: string,
  waterOption: string,
  petOption: string | boolean,
): Promise<Plant[]> => {
  try {
    const apiUrl = import.meta.env.VITE_REACT_API_URL;
    const params = new URLSearchParams({
      sun: sunOption,
      water: waterOption,
      pets: petOption.toString(),
    });
    const response = await axios.get(`${apiUrl}?${params.toString()}`);
    return response.data;
  } catch (error) {
    console.error('API error:', error);
    return [];
  }
};
