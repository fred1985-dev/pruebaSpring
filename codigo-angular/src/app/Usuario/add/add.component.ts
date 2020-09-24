
import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../Servicio/usuario.service';
import { Router } from '@angular/router';
import { Usuario } from '../../Modelo/Usuario';
import { Rol } from '../../Modelo/Role';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  usuario: Usuario = new Usuario();
  roles: Rol[];
  constructor(private router: Router, private service: UsuarioService) { }

  ngOnInit() {
    this.service.getRoles().subscribe(data => {
      this.roles = data;
  
    });
    
  }

 

  Guardar(usuario: Usuario){
     this.service.createUsuario(usuario)
     .subscribe(data=>{


      
      if(    data.nombre.indexOf( "Invalido" ) >= 0 ){
        alert("! El usuario  "+ usuario.nombre + " Ya existe");
      }else{
        alert("Se creo la persona");
      }
     
      this.router.navigate(["listar"]);
     });
    
    
   }

}
