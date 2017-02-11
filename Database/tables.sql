drop database if exists Breeding;
create database Breeding;

#1
drop table if exists Breeding.exams;
create table Breeding.exams(
    id int not null AUTO_INCREMENT,
    name varchar(100) not null,

    PRIMARY key (id)
);



#2
drop table if exists Breeding.formvalues;
create table Breeding.formvalues(
	id int not null AUTO_INCREMENT,
	name varchar(200) not null,
	
	PRIMARY key (id)
);

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
	name varchar(100) null,
	familyname varchar(100) not null,
	
	primary key (id)
);

#8
drop table if exists Breeding.kennels;
create table Breeding.kennels(
	id int not null AUTO_INCREMENT,
	name varchar(100) not null,
	active BOOL not null default false,
	UNIQUE (name),
	primary key (id)
);

#9
drop table if exists Breeding.dogs_kennels;
create table Breeding.dogs_kennels(
    id int not null AUTO_INCREMENT,
    dog_id int not null,
    kennel_id int not null,

	primary key (id),
	foreign key (dog_id) references Breeding.dogs(id),
   foreign key (kennel_id) references Breeding.kennels(id)
);

#10
drop table if exists Breeding.breeders_kennels;
create table Breeding.breeders_kennels(
    id int not null AUTO_INCREMENT,
    breeder_id int not null,
    kennel_id int not null,

	primary key (id),
	foreign key (breeder_id) references Breeding.breeders(id),
   foreign key (kennel_id) references Breeding.kennels(id)
);

#11
drop table if exists Breeding.dogs_breedings;
create table Breeding.dogs_breedings(
    id int not null AUTO_INCREMENT,
    male_id int null,
    female_id int null,
    date date null,
    
    primary key (id),
    foreign key (male_id) references Breeding.dogs(id),
    foreign key (female_id) references Breeding.dogs(id)
);
