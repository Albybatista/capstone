--CREATE DATABASE
CREATE DATABASE scriven;

-- \c scriven;

--CREATE TABLE
CREATE TABLE notes(
    id SERIAL,
    dated text,
    title text,
    codeLanguage text,
    codeBlock text,
    comments text
);