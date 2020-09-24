/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.service.webService;

import java.util.List;
import org.springframework.data.repository.Repository;

/**
 *
 * @author Lenovo
 */
public interface UsuarioRepositorio extends Repository<Usuario, Integer> {
      List<Usuario>findAll();
   
    Usuario save(Usuario p);
    void delete(Usuario p);

    public Usuario findById(int id);  
}
