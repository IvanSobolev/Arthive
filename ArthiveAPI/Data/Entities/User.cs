using Microsoft.AspNetCore.Identity;

public class User : IdentityUser<long>
{
    public string? RefreshToken { get; set; }
    public DateTime RefreshTokenExpiryTime { get; set;}
}