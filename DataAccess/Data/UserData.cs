using Mapplication.DbAccess;
using Mapplication.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Mapplication.Data
{
    public class UserData : IUserData
    {
        private readonly ISqlDataAccess _db;

        public UserData(ISqlDataAccess db)
        {
            _db = db;
        }

        // CRUD for user data (PersonModel)

        public Task<IEnumerable<PersonModel>> GetUsers() =>
            _db.LoadData<PersonModel, dynamic>("dbo.spUser_GetAll", new { });

        public async Task<PersonModel> GetUser(int id)
        {
            var results = await _db.LoadData<PersonModel, dynamic>(
                "dbo.spUser_Get",
                new { Id = id });

            return results.FirstOrDefault();
        }

        public Task InsertUser(PersonModel user) =>
            _db.SaveData("dbo.spUser_Insert", new { user.Username, user.Password });

        public Task UpdateUser(PersonModel user) =>
            _db.SaveData("dbo.spUser_Update", user);

        public Task DeleteUser(int id) =>
            _db.SaveData("dbo.spUser_Delete", new { Id = id });
    }
}
