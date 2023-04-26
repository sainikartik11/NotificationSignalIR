using Data.Model;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Data.Access
{
    public class VillaDbContext:DbContext
    {
        public VillaDbContext(DbContextOptions<VillaDbContext>options):base(options)
        {
            
        }
        public DbSet<Villa> Villas { get; set; }
    }
}
