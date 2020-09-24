import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../Servicio/usuario.service';
import { Router } from '@angular/router';
import { Usuario } from '../../Modelo/Usuario';
import { Rol } from '../../Modelo/Role';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  roles: Rol[];
  usuario: Usuario = new Usuario();
  constructor(private router: Router, private service: UsuarioService) { }

  ngOnInit() {
    this.service.getRoles().subscribe(data => {
      this.roles = data;
  
    });
    this.Editar();
  }

  Editar(){
   let id = localStorage.getItem("id");
   this.service.getUsuarioId(+id)
   .subscribe(data=>{

     this.usuario = data;
     this.usuario.id_rol=  data.id_rol;
    
   });
   

  }
  Actualizar(usuario:Usuario){
    //alert(usuario.id_rol);
    var num=Number (usuario.id_rol);
    usuario.id_rol=num;

  this.service.updateUsuario(usuario)
  .subscribe(data=>{
    this.usuario = data;
    alert("Registro actualizado");
    this.router.navigate(["listar"]);
  })
  }
}
