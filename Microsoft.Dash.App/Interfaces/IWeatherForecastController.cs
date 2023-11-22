using Microsoft.Dash.App.Models;

namespace Microsoft.Dash.App.Interfaces
{
    public interface IWeatherForecastController : IBaseController
    {
        IEnumerable<WeatherForecast> Get();
    }
}
