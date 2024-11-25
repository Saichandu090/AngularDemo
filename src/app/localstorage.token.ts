import { InjectionToken } from "@angular/core";

export  const localStorageToken = new InjectionToken<any>('local storage', {
  providedIn: 'root',
  factory() { 
    return localStorage; // we can return any value like sessionStorage or any other
  }
});