drop database if exists Breeding;
create database Breeding;

#1
drop table if exists Breeding.exams;
create table Breeding.exams(
    id int not null AUTO_INCREMENT,
    name varchar(100) not null,

    PRIMARY key (id)
);
INSERT INTO Breeding.exams (name) values ('Zuchttauglichkeit');
INSERT INTO Breeding.exams (name) values ('Wesenstest');
INSERT INTO Breeding.exams (name) values ('Begleithund');
INSERT INTO Breeding.exams (name) values ('Ausdauer');
INSERT INTO Breeding.exams (name) values ('IPO 1');
INSERT INTO Breeding.exams (name) values ('IPO 2');
INSERT INTO Breeding.exams (name) values ('IPO 3');
INSERT INTO Breeding.exams (name) values ('Stöberprüfung');
INSERT INTO Breeding.exams (name) values ('FH 1');
INSERT INTO Breeding.exams (name) values ('FH 2');
INSERT INTO Breeding.exams (name) values ('THS');
INSERT INTO Breeding.exams (name) values ('Agility');
INSERT INTO Breeding.exams (name) values ('Guidance');



#2
drop table if exists Breeding.formvalues;
create table Breeding.formvalues(
	id int not null AUTO_INCREMENT,
	name varchar(200) not null,
	
	PRIMARY key (id)
);

INSERT INTO Breeding.formvalues (name) values ('vorzüglich');
INSERT INTO Breeding.formvalues (name) values ('sehr gut');
INSERT INTO Breeding.formvalues (name) values ('gut');
INSERT INTO Breeding.formvalues (name) values ('genügend');
INSERT INTO Breeding.formvalues (name) values ('viel versprechend');
INSERT INTO Breeding.formvalues (name) values ('versprechend');

#3
drop table if exists Breeding.users;
create table Breeding.users(
	id int not null AUTO_INCREMENT,
	username varchar(50) not null,
	password varchar(100) not null,
	email varchar(100) not null,
    name varchar(100),
    familyname varchar(100),

	primary key (id),
	UNIQUE (username),
	UNIQUE (email)
);

#4
drop table if exists Breeding.dogs;
create table Breeding.dogs(
	id int not null AUTO_INCREMENT,
	name varchar(100),
	birth date,
	male BOOL,
	chipnumber varchar(100),
	formvalue_id int,
	booknumber varchar(100),
	breedable BOOL,
	comment varchar(200),
	

	primary key (id),
	foreign key (formvalue_id) REFERENCES Breeding.formvalues (id)
);

#5
drop table if exists Breeding.dogs_users;
create table Breeding.dogs_users(
	id int not null AUTO_INCREMENT,
	user_id int not null,
	dog_id int not null,

	primary key (id),
	foreign key (user_id) references Breeding.users(id),
	foreign key (dog_id) references Breeding.dogs(id)
);

#6
drop table if exists Breeding.dogs_exams;
create table Breeding.dogs_exams(
    id int not null AUTO_INCREMENT,
    dog_id int not null,
    exam_id int not null,
    date date,

	primary key (id),
	foreign key (dog_id) references Breeding.dogs(id),
    foreign key (exam_id) references Breeding.exams(id)
);

#7
drop table if exists Breeding.breeders;
create table Breeding.breeders(
	id int not null AUTO_INCREMENT,
	breedbooknumber varchar(100) not null,
	kennelname varchar(200),
	
	primary key (id)
);