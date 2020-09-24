import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../Modelo/Usuario';
import { Rol } from '../Modelo/Role';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {


  usuariosArray: Usuario[];

  constructor(private http: HttpClient) { }
  url = 'http://localhost:8080/usuarios';
  urlRoles='http://localhost:8080/roles';


 
  /** metodo para  listar registros */
  getUsuarios(){
    return this.http.get<Usuario[]>(this.url);
  }

  createUsuario(usuario: Usuario){
   
    var num=Number (usuario.id_rol);
    usuario.id_rol=num;

 console.log(this.url + "" + usuario.id_rol);
  return this.http.post<Usuario>(this.url, usuario);
  }

  getUsuarioId(id: number){
    return this.http.get<Usuario>(this.url + "/" + id);
  }

  updateUsuario(usuario: Usuario){
    return this.http.put<Usuario>(this.url + "/" + usuario.idUsuario, usuario);
  }

  deleteUsuario(usuario: Usuario){
    return this.http.delete<Usuario>(this.url + "/" + usuario.idUsuario);
  }

  getRoles(){
    return this.http.get<Rol[]>(this.urlRoles);
  }


  private usuarios: Usuario[];
  buscarUsuarios( termino: string ){
    let usuariosArr:any [] = [];
    this.getUsuarios().subscribe(data => {
      this.usuarios = data;
      console.log("data obejot "+data);
    });
    

   
    termino = termino.toLowerCase();
   let busq = 0;
    for( let i = 0; i < this.usuarios.length; i ++ ){
      let users = this.usuarios[i];
      let nombre = users.nombre.toLowerCase();
      if( nombre.indexOf( termino ) >= 0  ){
      //  users.idUsuario = users.id;
        usuariosArr.push( users );
        busq ++;
      }
  
    }
//si no hay registros de busqueda 
    if(busq==0){
      return usuariosArr =  this.usuarios;
    }
  

    return usuariosArr;

  
    }
}
