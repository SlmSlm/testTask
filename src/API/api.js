import axios from "axios";

const instance = axios.create({
  baseURL: `https://frontend-test-assignment-api.abz.agency/api/v1`,
});

export const usersApi = {
  getUsers(page = 1) {
    return instance.get(`users?page=${page}&count=6`).then((resp) => resp.data);
  },
};
