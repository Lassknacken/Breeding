#7
drop table if exists breeders;
create table breeders(
	id int not null AUTO_INCREMENT,
	breedbooknumber varchar(100) not null,
	kennelname varchar(200),
	
	primary key (id)
);