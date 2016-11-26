#2
drop table if exists formvalues;
create table formvalues(
	id int not null AUTO_INCREMENT,
	name varchar(200),
	
	PRIMARY key (id)
);

INSERT INTO formvalues (name) values ('vorzüglich');
INSERT INTO formvalues (name) values ('sehr gut');
INSERT INTO formvalues (name) values ('gut');
INSERT INTO formvalues (name) values ('genügend');
INSERT INTO formvalues (name) values ('viel versprechend');
INSERT INTO formvalues (name) values ('versprechend');