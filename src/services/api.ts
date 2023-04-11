import axios from 'axios';

export const fetchData = async (sunOption: string, waterOption: string, petOption: string | boolean): Promise<any> => {
  try {
    const apiUrl = "https://front-br-challenges.web.app/api/v2/green-thumb/";
    const params = new URLSearchParams({
      sun: sunOption,
      water: waterOption,
      pets: petOption.toString(),
    });
    const response = await axios.get(`${apiUrl}?${params.toString()}`);
    console.log(response.data)
    return response.data;
  } catch (error) {
    console.error('API error:', error);
    throw error;
  }
};