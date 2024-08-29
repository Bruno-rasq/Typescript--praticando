import * as fs from 'fs';
import * as path from 'path';

export function Log(message: string): void {

    const logFilePath = path.join(new URL('.', import.meta.url).pathname, 'log.txt');
    
    const logEntry = `${new Date().toISOString()} - ${message}\n`;

    fs.appendFile(logFilePath, logEntry, (err) => {
        if (err) {
            console.error('Erro ao anexar ao arquivo de log:', err);
        }
    });
}


//exemplo 
Log("test1")
Log("test2")
Log("test3")