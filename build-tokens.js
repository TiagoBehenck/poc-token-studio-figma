import StyleDictionary from 'style-dictionary';
import { registerTransforms } from '@tokens-studio/sd-transforms';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

registerTransforms(StyleDictionary);

const sd = StyleDictionary.extend(join(__dirname, 'style-dictionary.config.json'));

sd.cleanAllPlatforms();
sd.buildAllPlatforms();
