using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Identity;

public class User : IdentityUser<long>
{
    public string? RefreshToken { get; set; }
    public DateTime RefreshTokenExpiryTime { get; set;}
    public List<int>? fromArticlesId { get; set; }
    public List<int>? savedListPostsId { get; set; }
    public string pictureUrl { get; set; }
    public string Description { get; set; }
    public List<int> subscriptionsId { get; set; }
    public List<int> subscribersId { get; set; }
}