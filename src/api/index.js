import axios from "axios";
import { createErrorNotification } from "../views/components/utils/notifications";
import * as TAG from "../constant/tag";

// const LOGIN_URL =
//   window.globalConfig?.REACT_APP_LOGIN_URL || process.env.REACT_APP_LOGIN_URL;

class Api {
  constructor() {
    this.axiosInstance = axios.create({
      timeout: 50000,
    });
    this.showErrorToken = createErrorNotification(
      "Unauthorized",
      "Session anda expired atau dihapus. Anda wajib login kembali"
    );
    this.axiosInstance.interceptors.response.use(
      (config) => config,
      (error) => {
        if (error.response) {
          if (error.response.status === 401) {
            this.showErrorToken();
          }
        }
        return Promise.reject(error);
      }
    );
  }

  async login(email, password) {
    console.log(TAG.AUTH, "api start login");
    try {
      //TODO: use your axios magic here
      // const { status, data } = await this.axiosInstance.post(
      //   `${LOGIN_URL}/login`,
      //   {
      //     email,
      //     password,
      //   }
      // );

      //mock
      const status = 200;
      const data = {
        user: {
          fullName: "ucup",
          role_kode: "1",
        },
        token: "kopisusuAbc123_" + Math.floor(Math.random() * 100),
      };
      if (status === 200) {
        console.log(TAG.AUTH, "login success");
        return { ...data, error: null };
      }
    } catch (error) {
      return {
        status: "failed",
        error: error.message,
      };
    }
  }

  async getUserProfile(token) {
    console.log(TAG.AUTH, "api start getUserProfile");
    try {
      // const { status, data } = await this.axiosInstance.get(
      //   `${LOGIN_URL}/login`,
      //   {
      //     headers: { Authorization: bearerPrefix(token) },
      //   }
      // );
      const status = 200;
      const data = {
        fullName: "tes",
        role_kode: "1",
      };
      if (status === 200) {
        console.log(TAG.AUTH, "api getUserProfile success");
        // return { ...data, error: null };
        return { data: data, error: null };
      } else {
        localStorage.removeItem("token");
        return {
          status: "failed",
          error: "login ulang",
        };
      }
    } catch (error) {
      return {
        status: "failed",
        error: "Get user profile failed. Please try again",
      };
    }
  }
}

export default Api;
