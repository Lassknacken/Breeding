#5
drop table if exists users_owners;
create table users_owners(
	id int not null AUTO_INCREMENT,
	user_id int not null,
	owner_id int not null,
	
	primary key (id),
	foreign key(user_id) references users(id),
	foreign key(owner_id) references owners(id)
);