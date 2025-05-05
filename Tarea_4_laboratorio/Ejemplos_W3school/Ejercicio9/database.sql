CREATE TABLE customers (
  CustomerID VARCHAR(5) PRIMARY KEY,
  CompanyName VARCHAR(100),
  ContactName VARCHAR(100),
  Address VARCHAR(255),
  City VARCHAR(50),
  PostalCode VARCHAR(10),
  Country VARCHAR(50)
);

INSERT INTO customers (CustomerID, CompanyName, ContactName, Address, City, PostalCode, Country) VALUES
('ALFKI', 'Alfreds Futterkiste', 'Maria Anders', 'Obere Str. 57', 'Berlin', '12209', 'Germany'),
('NORTS', 'North/South', 'Simon Crowther', 'South House 300 Queensbridge', 'London', 'SW7 1RZ', 'UK'),
('WOLZA', 'Wolski Zajazd', 'Zbyszek', 'ul. Filtrowa 68', 'Warszawa', '01-012', 'Poland');
