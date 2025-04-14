addEventListener("fetch", (event) => {
    event.respondWith(handleRequest(event.request));
  });
  
  async function handleRequest(request) {
    const url = new URL(request.url);
  
    if (url.pathname === "/weather") {
      const apiKey = "dd349068cb7f59d179967f4b93997f4b93997f53"; // Replace with your API key
      const city = "London"; // Replace with the desired city
      const weatherApiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  
      const response = await fetch(weatherApiUrl);
      const weatherData = await response.json();
  
      const html = `
        <!DOCTYPE html>
        <html>
        <head>
          <title>Weather Dashboard</title>
          <style>
            body { font-family: Arial, sans-serif; text-align: center; padding: 20px; }
            .weather { margin-top: 20px; }
          </style>
        </head>
        <body>
          <h1>Weather Dashboard</h1>
          <div class="weather">
            <h2>${weatherData.name}</h2>
            <p>Temperature: ${weatherData.main.temp}°C</p>
            <p>Weather: ${weatherData.weather[0].description}</p>
          </div>
        </body>
        </html>
      `;
  
      return new Response(html, {
        headers: { "Content-Type": "text/html" },
      });
    }
  
    return new Response("Not Found", { status: 404 });
  }
  