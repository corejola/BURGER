-- Standard seeding into burgers table
-- adding a burger
INSERT INTO burgers
    (name)
VALUES
    ('Good Burger');

-- updating a burger's boolean value from false to true

UPDATE burgers
SET devoured = true
WHERE id = 1;

-- using req.body.(button id# tag)

-- Sequilize CLI First Model
    -- npx sequelize-cli model:generate --name Burger --attributes ame:text,devoured:boolean