import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UsuarioService } from '../../Servicio/usuario.service';


@Component({
  selector: 'app-searh',
  templateUrl: './searh.component.html',
  styleUrls: ['./searh.component.css']
})
export class SearhComponent implements OnInit {

  
  v_usuarios:any[] = [];
  
  constructor(  private _heroesService: UsuarioService ) { 

  }



  ngOnInit(): void {
  }

  buscarHeroe( termino:string ){
     console.log(termino);

     
 
      this.v_usuarios = this._heroesService.buscarUsuarios( termino );
      console.log( "freddd"+this.v_usuarios );

     

}



}
