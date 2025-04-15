import type { AxiosInstance } from "axios";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";

export class TBaseRepository {
  protected readonly axios: AxiosInstance;
  protected readonly mockAdapter: MockAdapter;

  constructor() {
    this.axios = axios.create();
    this.mockAdapter = new MockAdapter(this.axios);
  }
}
