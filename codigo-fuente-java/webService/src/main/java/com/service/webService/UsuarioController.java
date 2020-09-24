/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.service.webService;

import java.util.List;
import javax.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author Lenovo
 */
   //este hace referencia al proyecto front
@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RestController
@RequestMapping({"/usuarios"})
public class UsuarioController {
   @Autowired 
    UsuarioService service;
    
    
    @GetMapping
    public List<Usuario>listar(){
        return service.listar();
    }
    
   private List<Usuario> listadodUsuario;

    public List<Usuario> getListadodUsuario() {
        return listadodUsuario;
    }

    public void setListadodUsuario(List<Usuario> listadodUsuario) {
        this.listadodUsuario = listadodUsuario;
    }
    
    @PostConstruct
    public void init() {
        listadodUsuario = service.listar();
    }
    
    
    @PostMapping
    public Usuario agregar(@RequestBody Usuario p){
       int busq =0;
            if (listadodUsuario.size() >= 1) {
                //recorremos la lista de usuarios  
               for (int i = 0; i < listadodUsuario.size(); i++) {
                   if(p.getNombre().equalsIgnoreCase(listadodUsuario.get(i).getNombre())){
                       busq ++;
                   }
           
                }
            }
            if(busq==0){
               return service.add(p);   
            }else {
                p.setNombre("Invalido");
             return p;   
            }
   
    }
    
    @GetMapping(path = {"/{id}"})
    public Usuario listarId(@PathVariable("id") int id){
        return service.listarId(id);
    }
    
     @PutMapping(path = {"/{id}"})
    public Usuario editar(@RequestBody Usuario p, @PathVariable("id") int id){
        p.setIdUsuario(id);
        return service.edit(p);
    }
    
    @DeleteMapping(path = {"/{id}"})
    public Usuario delete(@PathVariable("id") int id){
        return service.delete(id);
    }
  
}
