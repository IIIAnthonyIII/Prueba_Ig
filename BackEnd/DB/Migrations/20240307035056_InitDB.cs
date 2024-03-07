using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace CapaModelo.Migrations
{
    public partial class InitDB : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Cargo",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Codigo = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Nombre = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Activo = table.Column<bool>(type: "bit", nullable: false),
                    IdUsuarioCreacion = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Cargo", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Departamento",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Codigo = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Nombre = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Activo = table.Column<bool>(type: "bit", nullable: false),
                    IdUsuarioCreacion = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Departamento", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "User",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Usuario = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Email = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    PrimerNombre = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    SegundoNombre = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    PrimerApellido = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    SegundoApellido = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    DepartamentoId = table.Column<int>(type: "int", nullable: false),
                    CargoId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_User", x => x.Id);
                    table.ForeignKey(
                        name: "FK_User_Cargo_CargoId",
                        column: x => x.CargoId,
                        principalTable: "Cargo",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_User_Departamento_DepartamentoId",
                        column: x => x.DepartamentoId,
                        principalTable: "Departamento",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.InsertData(
                table: "Cargo",
                columns: new[] { "Id", "Activo", "Codigo", "IdUsuarioCreacion", "Nombre" },
                values: new object[,]
                {
                    { 1, true, "34a", 1, "Analista" },
                    { 2, true, "12ab", 3, "Desarrollador" }
                });

            migrationBuilder.InsertData(
                table: "Departamento",
                columns: new[] { "Id", "Activo", "Codigo", "IdUsuarioCreacion", "Nombre" },
                values: new object[,]
                {
                    { 1, true, "34as", 1, "Logistica" },
                    { 2, true, "676d", 2, "Laboratorio" }
                });

            migrationBuilder.CreateIndex(
                name: "IX_User_CargoId",
                table: "User",
                column: "CargoId");

            migrationBuilder.CreateIndex(
                name: "IX_User_DepartamentoId",
                table: "User",
                column: "DepartamentoId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "User");

            migrationBuilder.DropTable(
                name: "Cargo");

            migrationBuilder.DropTable(
                name: "Departamento");
        }
    }
}
