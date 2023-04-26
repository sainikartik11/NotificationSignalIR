using Microsoft.AspNetCore.SignalR;

namespace Villa_Apartments.Hubs
{
    public class NotificationHub:Hub<INotificationHub>
    {
        public async Task SendMessage(string message)
        {
            await Task.Delay(10000);
            await Clients.All.SendNotification(message);
        }
    }
}
