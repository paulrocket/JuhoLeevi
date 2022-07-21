CREATE PROCEDURE [dbo].[spUser_Insert]
	@Name NVARCHAR(50),
	@Password NVARCHAR(50)
AS
begin
	INSERT INTO dbo.[User] (UserName, UserPassword)
	VALUES (@Name, @Password)
end