using AutoMapper;
using Microsoft.AspNetCore.Mvc.ModelBinding;
using SechiaApi.Modules.Furniture.Models;
using SechiaApi.Modules.Furniture.ViewModels;
using SechiaApi.Modules.General.Dtos;

namespace SechiaApi.Modules.General.AutoMapper
{
	public class MappingProfile : Profile
	{
		public MappingProfile() {
			CreateMap<Product, ProductGetVM>();
        }
	}
}
