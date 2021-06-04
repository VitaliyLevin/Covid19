import axios from "axios";
import { ResponseData } from "../../store/interfaces";

export const fetchCountries = async (): Promise<ResponseData> => {
  try {
    const response = await axios.get(`https://api.covid19api.com/summary`);
    return response.data.Countries;
  } catch (err) {
    console.error(err);
    throw new Error('Error');
  }
}
