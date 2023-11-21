using Microsoft.Dash.Api.Models;

namespace Microsoft.Dash.Api.Interfaces
{
    public interface IWeatherForecastController : IBaseController
    {
        IEnumerable<WeatherForecast> Get();
    }
}
