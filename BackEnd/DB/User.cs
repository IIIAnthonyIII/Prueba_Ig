using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace CapaModelo
{
    public class User
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        public string Usuario { get; set; }
        public string PrimerNombre { get; set; }
        public string SegundoNombre { get; set; }
        public string PrimerApellido { get; set; }
        public string SegundoApellido { get; set; }

        public int IdDepartamento { get; set; }
        public int IdCargo { get; set; }

        //[ForeignKey("IdDepartamento")]
        //public virtual Departamento Departamento { get; set; }
        //[ForeignKey("IdCargo")]
        //public virtual Cargo Cargo { get; set; }
    }
}
