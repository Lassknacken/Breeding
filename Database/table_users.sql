#3
drop table if exists users;
create table users(
	id int not null AUTO_INCREMENT,
	username varchar(50) not null,
	password varchar(100) not null,
	email varchar(100) not null,
	primary key (id),
	UNIQUE (username),
	UNIQUE (email)
);