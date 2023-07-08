import axios from "axios";

const instance = axios.create({
  baseURL: `https://frontend-test-assignment-api.abz.agency/api/v1`,
});

export const api = {
  getUsers(page = 1) {
    return instance.get(`users?page=${page}&count=6`).then((resp) => resp.data);
  },

  getPositions() {
    return instance.get(`/positions`).then((resp) => resp.data.positions);
  },
};
