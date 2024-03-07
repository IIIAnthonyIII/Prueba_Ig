using Microsoft.EntityFrameworkCore;

namespace CapaModelo
{
    public class PruebaContext : DbContext
    {
        public PruebaContext(DbContextOptions<PruebaContext> options) : base (options) { }
        public DbSet<Departamento> Departamentos { get; set;}
        public DbSet<Cargo> Cargos { get; set;}
        public DbSet<User> Users { get; set;}
        protected override void OnModelCreating (ModelBuilder modelBuilder)
        {
            base.OnModelCreating (modelBuilder);

            modelBuilder.Entity<User>().ToTable("User").HasKey(u => u.Id);
            modelBuilder.Entity<User>().ToTable("User").Property(u => u.Id).ValueGeneratedOnAdd();
            modelBuilder.Entity<Departamento>().ToTable("Departamento").HasKey(u => u.Id);
            modelBuilder.Entity<Departamento>().ToTable("Departamento").Property(u => u.Id).ValueGeneratedOnAdd();
            modelBuilder.Entity<Cargo>().ToTable("Cargo").HasKey(u => u.Id);
            modelBuilder.Entity<Cargo>().ToTable("Cargo").Property(u => u.Id).ValueGeneratedOnAdd();

            // Seed data
            modelBuilder.Entity<Departamento>().HasData(
                new Departamento { Id = 1, Codigo = "34as", Nombre = "Logistica", Activo = true, IdUsuarioCreacion = 1 },
                new Departamento { Id = 2, Codigo = "676d", Nombre = "Laboratorio", Activo = true, IdUsuarioCreacion = 2 }
            );

            modelBuilder.Entity<Cargo>().HasData(
                new Cargo { Id = 1, Codigo = "34a", Nombre = "Analista", Activo = true, IdUsuarioCreacion = 1 },
                new Cargo { Id = 2, Codigo = "12ab", Nombre = "Desarrollador", Activo = true, IdUsuarioCreacion =  3}
            );

        }
    }
}
