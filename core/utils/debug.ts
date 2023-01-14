import { existsSync, mkdirSync } from 'fs';
import { readFile, writeFile } from 'fs/promises';

const dir = './logs';

export default function writeLog(file: string, data: any) {
	const path = `${dir}/${file}`;
	if (!existsSync(dir)) {
		mkdirSync(dir, { recursive: true });
	}
	return writeFile(path, JSON.stringify(data, null, 2));
}

export function readLog(fileName: string) {
	const path = `${dir}/${fileName}`;
	if (!existsSync(path)) return null;
	return readFile(path, 'utf-8');
}

