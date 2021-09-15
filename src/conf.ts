import { readFileSync } from 'fs';
import { readFile } from 'fs/promises';
import { join } from 'path';

export function getConf<T>(path:string):Promise<T>{
    if(!path) path = join(__dirname,'config.json');
    return readFile(path).then(f=> JSON.parse(f.toString('utf-8')));
}

export function getConfSync<T>(path:string):T{
    if(!path) path = join(__dirname,'config.json');
    return  JSON.parse(readFileSync(path).toString('utf-8'));
}

