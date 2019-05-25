import { Address } from 'cluster';

/**
 * @param  {NodeJS.ErrnoException} error
 * @param  {number|string|boolean} port
 * @returns throw error
 */
export function onError(error: NodeJS.ErrnoException, port: number | string | boolean): void {
  if (error.syscall !== 'listen') {
    throw error;
  }

  const bind: string = (typeof port === 'string') ? `Pipe ${port}` : `Port ${port}`;

  switch (error.code) {
    case 'EACCES':
      console.log('\x1b[31m', `API :: ${bind} requires elevated privileges`, '\x1b[0m');
      process.exit(1);

      break;
    case 'EADDRINUSE':
      console.log('\x1b[31m', `API :: ${bind} is already in use`, '\x1b[0m');
      process.exit(1);

      break;
    default:
      throw error;
  }
}

/**
 * @export onListening
 */
export function onListening(): void {
  const addr: Address = this.address();
  const bind: string = (typeof addr === 'string') ? `pipe ${addr}` : `port ${addr.port}`;

  console.log('\x1b[32m', `API :: Listening on ${bind}`, '\x1b[0m');
}
