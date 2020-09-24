/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.service.webService;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author Lenovo
 */
@Service
public class UsuarioServiceImp implements UsuarioService{

    @Autowired
    private UsuarioRepositorio repositorio;
    
     @Override
    public List<Usuario> listar() {
        
     return repositorio.findAll();
    }

    @Override
    public Usuario listarId(int id) {
      return repositorio.findById(id);
    }

    @Override
    public Usuario add(Usuario p) {

      return repositorio.save(p);
    }

    @Override
    public Usuario edit(Usuario p) {
       return repositorio.save(p);
    }

    @Override
    public Usuario delete(int id) {
        
        Usuario p = repositorio.findById(id);
        if(p !=null){
            repositorio.delete(p);
        }
        return p;

    }
}
