#1
drop table if exists owners;
create table owners(
	id int not null AUTO_INCREMENT,
	name varchar(100),
	familyname varchar(100),
	
	primary key (id)
);