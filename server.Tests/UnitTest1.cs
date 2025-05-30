namespace server.Tests;

using server;

public class UnitTest1
{
    [Fact]
    public void NetWorkServiceSendPingTest()
    {
        // Arrange
        var nn = new NetworkService();
        string res = nn.SendPing();

        Assert.Equal(res, "Ping Sent");
        // 
    }
}
