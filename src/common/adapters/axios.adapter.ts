import { Injectable } from '@nestjs/common';
import { HttpAdapter } from 'src/common/interfaces/http.adapter.interface';
import axios, { AxiosInstance } from 'axios';

@Injectable()
export class AxiosAdapter implements HttpAdapter {
  private axios: AxiosInstance = axios;

  async get<T>(url: string): Promise<T> {
    try {
      const { data } = await this.axios.get<T>(url, {
        headers: {
          'Accept-Encoding': 'application/json',
        },
      });
      return data;
    } catch (error) {
      throw new Error('An error has occurred in the request');
    }
  }
}
