/************************************************
*
*	Creates samples for User Table if empty
*
************************************************/

if not exists (select 1 from dbo.[User])
begin
	INSERT INTO	dbo.[User] (UserName, UserPassword)
	VALUES	('Juho', '1234'),
			('Leevi', '1234'),
			('Susanna', '1234'),
			('Hanna', '1234'),
			('Risto', '1234'),
			('Kasperi', '1234'),
			('Iiro', '1234'),
			('Heluna', '1234'),
			('Anniina', '1234')
end