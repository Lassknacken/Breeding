#6
drop table if exists dogs_owners;
create table dogs_owners(
	id int not null AUTO_INCREMENT,
	owner_id int not null,
	dog_id int not null,

	primary key (id),
	foreign key (owner_id) references owners(id),
	foreign key (dog_id) references dogs(id)
);