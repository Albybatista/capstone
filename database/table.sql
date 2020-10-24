--CREATE DATABASE
CREATE DATABASE scriven;

\c scriven;

--CREATE TABLE
CREATE TABLE notes(
    id SERIAL,
    dated text,
    title text,
    repo text,
    fromfile text,
    lines text,
    comments text
);