CREATE PROCEDURE [dbo].[spUser_Update]
	@Id int,
	@Name NVARCHAR(50),
	@Password NVARCHAR(50)
AS
begin 

	UPDATE dbo.[User]
	SET UserName = @Name,
		UserPassword = @Password
	WHERE UserId = @Id

end
