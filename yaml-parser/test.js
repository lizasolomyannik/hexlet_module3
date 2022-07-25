import * as yaml from 'js-yaml';
import * as fs from 'fs';
import { JSON_SCHEMA } from 'js-yaml';

const doc = yaml.load(fs.readFileSync('yaml-parser/file1.yaml'), JSON_SCHEMA);

console.log(doc);
