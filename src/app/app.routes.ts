import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { ContainerComponent } from './container/container.component';
import { RoomsComponent } from './rooms/rooms.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { RoomsBookingComponent } from './rooms/rooms-booking/rooms-booking.component';
import { RoomsAddComponent } from './rooms/rooms-add/rooms-add.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    { path: 'employees', component: EmployeeComponent },
    { path: 'rooms', component: RoomsComponent },
    { path: 'rooms/add', component: RoomsAddComponent },
    { path: 'rooms/:roomid', component: RoomsBookingComponent },
    { path: 'login', component: LoginComponent },
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: '**', component: NotfoundComponent },

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
