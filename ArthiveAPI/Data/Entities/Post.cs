public class Post
{
    public long Id { get; set;}
    public bool IsVerified { get; set;}
    public List<int> ContetnPost { get; set;}
    public int AuthorId { get; set;}

    public string PostName { get; set;}
    public string Description { get; set;}
    public string PictureURL { get; set;}
    public string Category { get; set;}
    public string Type { get; set;}
    public float Rate { get; set;}
    public string AverageTime { get; set;}
    public DateTime? CreateDate { get; set;}
    public DateTime? UpdateDate { get; set;}
}