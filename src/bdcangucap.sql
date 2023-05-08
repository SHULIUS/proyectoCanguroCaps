CREATE DATABASE canguroCaps;

USE canguroCaps;

CREATE schema Admin;

CREATE TABLE Admin.Inventario(
IDProducto nvarchar(15) AUTO_INCREMENT PRIMARY KEY,
descripcionId nvarchar(30),
cantidad int(10),
precio float(10),
foreign key (idProveedor) references Admin.proveedores(idProveedor)
);

CREATE TABLE Admin.Venta{
idVenta nvarchar(15) AUTO_INCREMENT PRIMARY KEY,
fecha smalldate,
cantidad int(10),
foreign key (IDProducto) references Admin.Inventario(IDProducto), 
foreign key (idLocal) references Admin.Locales(idLocal),
foreign key (idCliente) references Admin.Cliente(idCliente)
};

CREATE TABLE Admin.Producto{
idProducto nvarchar(15) AUTO_INCREMENT PRIMARY KEY,
nombre char(15),
descripcion nvarchar(30),
foreign key (idProveedor) references Admin.Proveedores(idProveedor)
};

CREATE TABLE Admin.Cliente{
idCliente nvarchar(15) AUTO_INCREMENT PRIMARY KEY,
nombre char(15),
apellido char(20),
telefono nvarchar(10),
correo nvarchar(40),
foreign key (idLocal) references Admin.Locales(idLocal)
};

CREATE TABLE Admin.Vendedor{
idVendedor nvarchar(15) AUTO_INCREMENT PRIMARY KEY,
nombre char(15),
apellido char(20),
telefono nvarchar(10),
correo nvarchar(40),
foreign key (idTurno) references Admin.Turnos(idTurno),
foreign key (idLocal) references Admin.Locales(idLocal)
};

CREATE TABLE Admin.Turnos{
idTurno nvarchar(15) AUTO_INCREMENT PRIMARY KEY,
dia smalldate,
turno nvarchar(15),
foreign key (idVendedor) references Admin.Vendedor(idVendedor),
foreign key (idLocal) references Admin.Locales(idLocal)
};

CREATE TABLE Admin.Locales{
idLocal nvarchar(15) AUTO_INCREMENT PRIMARY KEY,
direccion nvarchar(50),
foreign key (idProducto) references Admin.Producto(idProducto)
};

CREATE TABLE Admin.Proveedores{
idProveedor nvarchar(15) primary key,
nombre char(15),
direccion nvarchar(50),
correo nvarchar(40),
telefono nvarchar(10),
foreign key (idProducto) references Admin.Producto(idProducto),
foreign key (idLocal) references Admin.Locales(idLocal)
};


