CREATE VIEW v_dogs_kennels AS
select 
dogs.id as dog_id,
dogs.name as dog_name,
dogs.birth as dog_birth,
dogs.male as dog_male,
dogs.chipnumber as dog_chipnumber,
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