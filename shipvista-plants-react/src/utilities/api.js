import axios from "axios";

const baseUrl = "https://localhost:44310/api/Plant";
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
