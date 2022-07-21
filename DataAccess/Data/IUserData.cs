using Mapplication.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Mapplication.Data
{
    public interface IUserData
    {
        Task DeleteUser(int id);
        Task<PersonModel> GetUser(int id);
        Task<IEnumerable<PersonModel>> GetUsers();
        Task InsertUser(PersonModel user);
        Task UpdateUser(PersonModel user);
    }
}