/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.service.webService;

import java.util.List;

/**
 *
 * @author Lenovo
 */
public interface UsuarioService {
       List<Usuario>listar();
    Usuario listarId(int id);
    Usuario add(Usuario p);
    Usuario edit(Usuario p);
    Usuario delete(int id); 
}
