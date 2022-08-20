import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  token: string = localStorage.getItem('id_token');

  constructor(private readonly _http: HttpClient) {
  }

  getAllBookings() {
    const httpAuthHeaders = new HttpHeaders().set('Authorization', this.token);
    return this._http.get('/server/api/bookings/all', {headers: httpAuthHeaders});
  }

  getTeacherBookings() {
    const httpAuthHeaders = new HttpHeaders().set('Authorization', this.token);
    return this._http.get('/server/api/teacher/bookings', {headers: httpAuthHeaders});
  }

  addUserBooking(booking) {
    const httpAuthHeaders = new HttpHeaders().set('Authorization', this.token);
    return this._http.post('/server/api/user/booking', booking, {headers: httpAuthHeaders});
  }

}
