import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { provideHttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [
    provideHttpClient(),
  ],
})
export class AppModule { }
export { provideHttpClient };

