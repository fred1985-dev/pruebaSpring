import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }  from  '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddComponent } from './Usuario/add/add.component';
import { DeleteComponent } from './Usuario/delete/delete.component';
import { EditComponent } from './Usuario/edit/edit.component';
import { ListComponent } from './Usuario/list/list.component';
import { UsuarioService } from './Servicio/usuario.service';
import { HttpClientModule } from '@angular/common/http';
import { SearhComponent } from './Usuario/searh/searh.component';
@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    DeleteComponent,
    EditComponent,
    ListComponent,
    SearhComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [UsuarioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
