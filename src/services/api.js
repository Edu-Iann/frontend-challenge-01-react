import axios from 'axios';

// não encontrei uma solução viável para utilizar variáveis de ambient com .env no vite.
// muitas pessoas também estão com esse mesmo problema. Tentei utilizar rollup.config para isso, porém sem sucesso.
// const apiUrl = import.meta.env.REACT_APP_API_URL;


export const fetchData = async (sunOption, waterOption, petOption) => {
  try {
    const apiUrl = "https://front-br-challenges.web.app/api/v2/green-thumb/";
    const params = new URLSearchParams({
      sun: sunOption,
      water: waterOption,
      pets: petOption,
    });
    const response = await axios.get(`${apiUrl}?${params.toString()}`);
    console.log(response.data)
    return response.data;
  } catch (error) {
    console.error('API error:', error);
    throw error;
  }
};