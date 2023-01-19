namespace Marvel.Project.API.Models;
using System.ComponentModel.DataAnnotations;
using Marvel.Project.API.Models;

public interface IMovie : IModel<Guid>
{

    [Required]
    public new Guid Id { get; set; }

    [Required]
    public string Name { get; set; }

    [Required]
    public DateTime ReleaseDate { get; set; }

    [Required]
    [MaxLength(140, ErrorMessage = "Movie description can only be 140 characters or less")]
    public string Description { get; set; }

    public string Image { get; set; }


}