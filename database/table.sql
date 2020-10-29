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

--CREATE TABLE
CREATE TABLE tocode(
    id SERIAL,
    title text,
    duedate text
);

--CREATE TABLE
CREATE TABLE tolearn(
    id SERIAL,
    title text,
    duedate text
);