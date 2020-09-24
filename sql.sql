/*==============================================================*/
/* dbms name:      postgresql 8                                 */
/* created on:     16/09/2020 4:57:51 p. m.                     */
/*==============================================================*/


drop index rol_pk;

drop table rol;

drop index tener_fk;

drop index usuario_pk;

drop table usuario;

/*==============================================================*/
/* table: rol                                                   */
/*==============================================================*/
create table rol (
   id_rol               serial               not null,
   nombre               varchar(100)         not null,
   constraint pk_rol primary key (id_rol)
);

/*==============================================================*/
/* index: rol_pk                                                */
/*==============================================================*/
create unique index rol_pk on rol (
id_rol
);

/*==============================================================*/
/* table: usuario                                               */
/*==============================================================*/
create table usuario (
   id_usuario           serial               not null,
   id_rol               int4                 not null,
   nombre               varchar(100)         not null,
   activo               char(1)              not null,
   constraint pk_usuario primary key (id_usuario)
);

/*==============================================================*/
/* index: usuario_pk                                            */
/*==============================================================*/
create unique index usuario_pk on usuario (
id_usuario
);

/*==============================================================*/
/* index: tener_fk                                              */
/*==============================================================*/
create  index tener_fk on usuario (
id_rol
);

alter table usuario
   add constraint fk_usuario_tener_rol foreign key (id_rol)
      references rol (id_rol)
      on delete restrict on update restrict;

