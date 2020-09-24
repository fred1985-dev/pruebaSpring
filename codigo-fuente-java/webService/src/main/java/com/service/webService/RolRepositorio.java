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
public interface RolRepositorio extends Repository<Rol, Integer> {
     List<Rol>findAll();
   
}
