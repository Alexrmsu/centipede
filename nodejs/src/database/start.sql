create schema if not exists scrapers;
use scrapers;
create table if not exists scraper(
    id serial primary key auto_increment,
    path varchar(255) not null,
    source varchar(255) not null,
    tech varchar(255) not null,
    created_at timestamp default current_timestamp,
    updated_at timestamp default current_timestamp on update current_timestamp
);

create table if not exists workerStatus(
    id serial primary key auto_increment,
    workerName varchar(255) not null,
    status varchar(255) not null,
    scraperId int not null,
    run_date timestamp default current_timestamp,
    update_at timestamp default current_timestamp on update current_timestamp
);

create table if not exists context
(
    id             serial primary key auto_increment,
    source         varchar(255) not null,
    context_values varchar(255) not null,
    created_at     timestamp default current_timestamp,
    status         int         not null
);