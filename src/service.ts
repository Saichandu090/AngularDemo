import { http } from './http';
export class Service {
  constructor() {
    http.get('/api'); // Now works correctly
  }
}