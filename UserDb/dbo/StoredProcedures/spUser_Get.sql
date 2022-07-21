CREATE PROCEDURE [dbo].[spUser_Get]
	@Id int
AS
begin
	SELECT UserId, UserName, UserPassword
	FROM dbo.[User]
	WHERE UserId = @Id
end