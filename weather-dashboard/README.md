# Weather Dashboard

This project is a simple weather dashboard deployed on Cloudflare Workers. It fetches weather data from a free API and renders it as a fast, static page.

## Project Structure

```
weather-dashboard
├── src
│   ├── index.js          # Entry point for the Cloudflare Workers application
│   ├── api
│   │   └── weather.js    # Fetches weather data from the API
│   └── views
│       └── dashboard.html # HTML structure for the weather dashboard
├── package.json           # Configuration file for npm
├── wrangler.toml         # Configuration file for Cloudflare Workers
└── README.md             # Project documentation
```

## Setup Instructions

1. Clone the repository:
   ```
   git clone <repository-url>
   cd weather-dashboard
   ```

2. Install the dependencies:
   ```
   npm install
   ```

3. Configure your Cloudflare Workers account in `wrangler.toml` with your account ID and other necessary settings.

4. Deploy the application:
   ```
   npx wrangler publish
   ```

## Usage

Once deployed, the weather dashboard will fetch and display current weather data based on the location specified in the code. You can modify the location in `src/api/weather.js` to get weather data for different areas.

## License

This project is licensed under the MIT License.