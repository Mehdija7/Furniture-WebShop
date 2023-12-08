using System.Linq.Expressions;
using System.Reflection.Metadata.Ecma335;

namespace SechiaApi.Data.Repo
{
	public interface IBaseRepository<T>
	{
		IQueryable<T> GetAll();
		IQueryable<T> GetAllByCondition(Expression<Func<T, bool>> condition);
		bool Any(Expression<Func<T, bool>> condition);
		void Create(T entity);
		void Update(T entity);
		void Remove(T entity);
		void SaveChanges();
	}
}
