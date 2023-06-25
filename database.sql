CREATE TABLE pokedex (
	national_id INT NOT NULL PRIMARY KEY,
	"name" VARCHAR(255) NOT NULL,
	front_image VARCHAR(255) NOT NULL,
	back_image VARCHAR(255) NOT NULL,
	type1 INT references types (id),
	type2 INT references types (id),
	base_hp INT NOT NULL,
	base_attack INT NOT NULL,
	base_defense INT NOT NULL,
	base_sp_attack INT NOT NULL,
	base_sp_defense INT NOT NULL,
	base_speed INT NOT NULL,
	base_experience INT,
	growth_rate_id INT references growth_rate (id),
	capture_rate INT
);

CREATE TABLE types (
	id SERIAL PRIMARY KEY,
	"type" VARCHAR(255) NOT NULL
);

CREATE TABLE evolution (
	id SERIAL PRIMARY KEY,
	intial_pokemon_id INT references pokedex (national_id) NOT NULL,
	evolved_pokemon_id INT references pokedex (national_id) NOT NULL,
	evolution_method_id INT references evolution_method (id) NOT NULL
);

CREATE TABLE evolution_method (
	id SERIAL PRIMARY KEY,
	"method" VARCHAR(255) NOT NULL
);

CREATE TABLE growth_rate (
	id SERIAL PRIMARY KEY,
	rate VARCHAR(255) NOT NULL
);

CREATE TABLE pokemon (
	id SERIAL PRIMARY KEY,
	dex_id INT references pokedex (national_id) NOT NULL,
	user_id INT references "user" (id) NOT NULL,
	"name" VARCHAR(255) NOT NULL,
	"level" INT NOT NULL,
	experience INT NOT NULL,
	hp INT NOT NULL,
	attack INT NOT NULL,
	defense INT NOT NULL,
	sp_attack INT NOT NULL,
	sp_defense INT NOT NULL,
	speed INT NOT NULL,
	gender_id INT references gender (id),
	nature_id INT references nature (id),
	ability_id INT references ability (id),
	item_id INT references item (id),
	happiness INT
);

CREATE TABLE hidden_stats (
	pokemon_id INT PRIMARY KEY references pokemon (id),
	iv_hp INT NOT NULL,
	iv_attack INT NOT NULL,
	iv_defense INT NOT NULL,
	iv_sp_attack INT NOT NULL,
	iv_sp_defense INT NOT NULL,
	iv_speed INT NOT NULL,
	ev_hp INT NOT NULL,
	ev_attack INT NOT NULL,
	ev_defense INT NOT NULL,
	ev_sp_attack INT NOT NULL,
	ev_sp_defense INT NOT NULL,
	ev_speed INT NOT NULL
);

CREATE TABLE gender (
	id SERIAL PRIMARY KEY,
	"gender" VARCHAR(255) NOT NULL
);

CREATE TABLE nature (
	id SERIAL PRIMARY KEY,
	"nature" VARCHAR(255) NOT NULL,
	stat_up VARCHAR(255) NOT NULL,
	stat_down VARCHAR(255) NOT NULL
);

CREATE TABLE ability (
	id SERIAL PRIMARY KEY,
	"ability" VARCHAR(255) NOT NULL,
	"description" VARCHAR(255) NOT NULL
);

CREATE TABLE pokedex_ability (
	id SERIAL PRIMARY KEY,
	dex_id INT references pokedex (national_id),
	ability_id INT references ability (id)
);

CREATE TABLE item (
	id SERIAL PRIMARY KEY,
	"item" VARCHAR(255) NOT NULL,
	"description" VARCHAR(255) NOT NULL,
	fling_damage INT,
	price INT
);

CREATE TABLE moves (
	id SERIAL PRIMARY KEY,
	"move" VARCHAR(255) NOT NULL,
	type_id INT references "types" (id),
	category_id INT references move_category (id) NOT NULL,
	accuracy INT,
	power INT,
	pp INT NOT NULL,
	"priority" INT,
	effect_chance INT,
	"description" VARCHAR(255) NOT NULL,
	target_id INT references move_target (id) NOT NULL,
	secondary_effect_id INT references move_secondary_effect (id)
);

CREATE TABLE move_category (
	id SERIAL PRIMARY KEY,
	category VARCHAR(255) NOT NULL
);

CREATE TABLE move_target (
	id SERIAL PRIMARY KEY,
	"target" VARCHAR(255) NOT NULL
);

CREATE TABLE move_secondary_effect (
	id SERIAL PRIMARY KEY,
	secondary_effect VARCHAR(255) NOT NULL
);

CREATE TABLE learnset (
	id SERIAL PRIMARY KEY,
	dex_id INT references pokedex (national_id) NOT NULL,
	move_id INT references moves (id) NOT NULL,
	level_learned INT NOT NULL
);

CREATE TABLE current_moves (
	pokemon_id INT PRIMARY KEY references pokemon (id),
	move_1_id INT references moves (id),
	move_2_id INT references moves (id),
	move_3_id INT references moves (id),
	move_4_id INT references moves (id)
);

CREATE TABLE "user" (
	id INT PRIMARY KEY,
	username VARCHAR(255) NOT NULL,
	profile_pic VARCHAR(255),
	email VARCHAR(255)
);

CREATE TABLE friends (
	id SERIAL PRIMARY KEY,
	requesting_user_id INT references "user" (id) NOT NULL,
	accepting_user_id INT references "user" (id) NOT NULL
);

ALTER TABLE pokedex 
	ADD gender_rate INT;

----INSERT STATEMENTS----

INSERT INTO gender (gender) VALUES ('unknown'), ('male'), ('female');

INSERT INTO move_category (category) VALUES ('physical'), ('special'), ('status');

INSERT INTO growth_rate (rate) VALUES ('fluctuating'), ('slow'), ('medium-slow'), ('medium-fast'), ('fast'), ('erratic');

INSERT INTO move_target (target) VALUES ('specific-move'), ('selected-pokemon-me-first'), ('ally'), ('users-field'), 
('user-or-ally'), ('opponents-field'), ('user'), ('random-opponent'), ('all-other-pokemon'), ('selected-pokemon'), 
('all-opponents'), ('entire-field'), ('user-and-allies'), ('all-pokemon'), ('all-allies'), ('fainting-pokemon');

INSERT INTO "types" ("type") VALUES ('none'), ('grass'), ('fire'), ('water'), ('electric'), ('bug'), ('normal'), 
('fighting'), ('flying'), ('rock'), ('ground'), ('poison'), ('psychic'), ('ghost'), ('dark'), ('fairy'),
('steel'), ('ice'), ('dragon');