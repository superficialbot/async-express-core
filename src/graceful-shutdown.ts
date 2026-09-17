export const setupShutdown = (server) => process.on('SIGTERM', () => server.close());
