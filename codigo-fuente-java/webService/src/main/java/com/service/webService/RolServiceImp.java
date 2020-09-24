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
public class RolServiceImp implements RolService {

       @Autowired
    private RolRepositorio repositorio;
    
    
    @Override
    public List<Rol> listar() {
       return repositorio.findAll();   
    }

 
   
    
}
