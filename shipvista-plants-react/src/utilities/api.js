import axios from "axios";

const baseUrl = process.env.REACT_APP_API_BASE_URL;
const api = axios.create({
  baseURL: baseUrl,
});

export const updateItem = async (id, value) => {
  await api.patch(`?id=${id}`, {
    id: id,
    plantName: value.plantName,
    isWatering: value.isWatering,
    waterLevel: value.waterLevel,
    lastTimeWatered: value.lastTimeWatered,
  });
};
