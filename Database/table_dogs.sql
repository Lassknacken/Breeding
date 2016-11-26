#4
drop table if exists dogs;
create table dogs(
	id int not null AUTO_INCREMENT,
	name varchar(100),
	birth date,
	male BOOL,
	chipnumber varchar(100),
	formvalue_id int,
	
	primary key (id),
	foreign key (formvalue_id) REFERENCES formvalues (id)
);