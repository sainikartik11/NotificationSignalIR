namespace Villa_Apartments.Hubs
{
    public interface INotificationHub
    {
        Task SendNotification(string message);
    }
}
