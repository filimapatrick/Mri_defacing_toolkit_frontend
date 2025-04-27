export class Logger {
  private context: string;

  constructor(context: string) {
    this.context = context;
  }

  info(message: string, data?: any) {
    console.log(`[${this.context}] INFO: ${message}`, data ? data : '');
  }

  error(message: string, error?: any) {
    console.error(`[${this.context}] ERROR: ${message}`, error ? error : '');
  }

  warn(message: string, data?: any) {
    console.warn(`[${this.context}] WARN: ${message}`, data ? data : '');
  }

  debug(message: string, data?: any) {
    console.debug(`[${this.context}] DEBUG: ${message}`, data ? data : '');
  }
} 