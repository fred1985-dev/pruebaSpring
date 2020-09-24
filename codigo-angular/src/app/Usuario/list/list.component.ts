import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../../Servicio/usuario.service';
import { Usuario } from '../../Modelo/Usuario';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  usuarios: Usuario[];
  constructor(private service: UsuarioService, private router: Router) { }

  ngOnInit() {
    
    this.service.getUsuarios().subscribe(data => {
      this.usuarios = data;
      console.log("data "+data);
    });
    
  }
  Editar(usuario: Usuario ): void{
    localStorage.setItem("id", usuario.idUsuario.toString());
    this.router.navigate(["edit"]);
  }

  Delete(usuario: Usuario){
     this.service.deleteUsuario(usuario)
     .subscribe(data=>{
       this.usuarios = this.usuarios.filter(p=>p!==usuario);
     });
  }


}
