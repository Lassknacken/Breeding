CREATE VIEW v_dogs_kennels AS
    select 
    dogs.id as dog_id,
    dogs.name as dog_name,
    dogs.birth as dog_birth,
    dogs.male as dog_male,
    dogs.chipnumber as dog_chipnumber,
    dogs.formvalue_id as dog_formvalue_id,
    dogs.booknumber as dog_booknumber,
    dogs.breedable as dog_breedable,
    dogs.comment as dog_comment,
    kennels.id as kennel_id,
    kennels.name as kennel_name,
    kennels.active as kennel_active
    from dogs
    left join dogs_kennels
    on dogs.id =dogs_kennels.dog_id
    left join kennels
    on dogs_kennels.kennel_id = kennels.id;

CREATE VIEW v_users_kennels AS
    select 
    users.id as user_id,
	users.username as user_username,
	users.email as user_email,
    users.name as user_name,
    users.familyname as user_familyname,
    kennels.id as kennel_id,
    kennels.name as kennel_name,
    kennels.active as kennel_active
    from users
    left join users_kennels
    on users.id =users_kennels.user_id
    left join kennels
    on users_kennels.kennel_id = kennels.id;

    