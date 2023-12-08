using SechiaApi.Data.Repo;
using System.Linq.Expressions;

namespace SechiaApi.Data.Repository
{
	public abstract class BaseRepository<T> : IBaseRepository<T> where T : class
	{
		protected AppDbContext _context { get; set; }

		public BaseRepository(AppDbContext context) { _context = context; }

		public IQueryable<T> GetAll()
		{
			return _context.Set<T>();
		}

		public IQueryable<T> GetAllByCondition(Expression<Func<T, bool>> condition)
		{
			return _context.Set<T>().Where(condition);
		}

		public bool Any(Expression<Func<T, bool>> condition)
		{
			return _context.Set<T>().Any(condition);
		}

		public void Create(T entity)
		{
			_context.Add(entity);
		}

		public void Update(T entity)
		{
			_context.Update(entity);
		}

		public void Remove(T entity)
		{
			_context.Remove(entity);
		}

		public void SaveChanges() {
			_context.SaveChanges();
		}
	}
}
