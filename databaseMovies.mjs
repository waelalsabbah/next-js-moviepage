/* import { readFileSync } from 'node:fs'; */
import postgres from 'postgres';
import { setEnvironmentVariable } from './util/config.mjs';

/* export function setEnvironmentVariable() {
  dotenv.config();

  const unconfiguredEnvVars = Object.keys(
    dotenv.parse(readFileSync('./.env.example')),
  ).filter((exampleKey) => !process.env[exampleKey]);
  if (unconfiguredEnvVars.length > 0) {
    throw new Error(
      `.env.example environment ${
        unconfiguredEnvVars.length > 1 ? 'variables' : 'variable'
      }${unconfiguredEnvVars.join(',')} not configured in .env file`,
    );
  }
} */
setEnvironmentVariable();

const sql = postgres();
console.log(await sql`SELECT * FROM movies`);
await sql.end();
