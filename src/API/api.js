import axios from "axios";

const instance = axios.create({
  baseURL: `https://frontend-test-assignment-api.abz.agency/api/v1`,
});

export const api = {
  async getUsers(page = 1) {
    return await instance
      .get(`users?page=${page}&count=6`)
      .then((resp) => resp.data);
  },

  async getPositions() {
    return await instance.get(`/positions`).then((resp) => resp.data.positions);
  },

  async signUp(body) {
    return await instance.post(`/users`, body, {
      headers: {
        Token: await instance.get(`/token`).then((resp) => resp.data.token),
        "Content-Type": "multipart/form-data",
      },
    });
  },
};
