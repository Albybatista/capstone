-- INSERT FOR TOCODE LIST

INSERT INTO 
  notes
    ( dated, title, codeLanguage, codeBlock, comments)
VALUES
    ('08/20/2020', 'HTML Paragraph', 'HTML', '<p>This is a paragraph tag. Write away!', 'Rendering a block of text using a paragraph tag');
INSERT INTO
  notes
    ( dated, title, codeLanguage, codeBlock, comments)
VALUES
    ('03/30/2020', 'CSS Positioning', 'CSS', 
    '.square {
    position: absolute;
    top: 150px;
    left: 50px;
    }', 'Positioning the square class'
);
INSERT INTO 
  notes
    ( dated, title, codeLanguage, codeBlock, comments)
VALUES
    ('04/11/2020', 'HTML Headers', 'html', '<h1>Welcome!</h1>', 'Creating a big header in HTML');
INSERT INTO
  notes
    ( dated, title, codeLanguage, codeBlock, comments)
VALUES
    ('11/01/2020', 'Sort Method', 'javascript', 
    'const fruits = ["Banana", "Orange", "Apple", "Mango"];
    fruits.sort();', 'basic javascript sorting method');



-- INSERT FOR TO CODE LIST
INSERT INTO
  tocode
    ( title, duedate)
VALUES
    ('Tic Tac Toe', '01/12/2021');
INSERT INTO
  tocode
    ( title, duedate)
VALUES
    ('Rock Paper Scissors','02/10/2021');



-- INSERT FOR TO LEARN LIST
INSERT INTO
  tolearn
    ( title, duedate)
VALUES
    ('Python','06/19/2021');
INSERT INTO
  tolearn
    ( title, duedate)
VALUES
    ('Data Structures','04/04/2021');