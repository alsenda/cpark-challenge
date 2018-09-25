# CPark challenge
Description
> Create an app that will display the **last and closest** reports sent by the community to an API server.

### Commands
|Command|Action|
|-|-|
|`npm run populate`|Populate database|
|`npm run docs`|Generate and open HTML ESDocs|
|`npm run lint`|Run ESLint|
|`npm start`|Run backend server|

### Endpoints
|url|action|
|-|-|
|`/report`|Create and saves a new report.|
|`/report/:latitude/:longitude[/distance]`|Retrieve and return all reports around the given coordinates (the default radius is 10 kilometres).|
