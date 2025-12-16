import { mkdir, copyFile, cp, readdir } from 'fs/promises';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rootDir = join(__dirname, '..');

async function copyFileWithDir(src, dest) {
  // Ensure destination directory exists
  await mkdir(dirname(dest), { recursive: true });
  await copyFile(src, dest);
}

async function copyDir(src, dest) {
  await cp(src, dest, { recursive: true });
}

async function copyCssFiles() {
  try {
    // Copy tokens.css
    await copyFileWithDir(
      join(rootDir, 'src/styles/tokens.css'),
      join(rootDir, 'dist/styles/tokens.css')
    );

    // Copy typography.css
    await copyFileWithDir(
      join(rootDir, 'src/utils/styles/typography.css'),
      join(rootDir, 'dist/utils/styles/typography.css')
    );

    // Copy fonts.css
    await copyFileWithDir(
      join(rootDir, 'src/utils/styles/fonts/fonts.css'),
      join(rootDir, 'dist/utils/styles/fonts/fonts.css')
    );

    // Copy font assets (variable and non-variable)
    const fontsRoot = join(rootDir, 'src/utils/styles/fonts');
    await copyDir(join(fontsRoot, 'var'), join(rootDir, 'dist/utils/styles/fonts/var'));
    await copyDir(
      join(fontsRoot, 'non-var'),
      join(rootDir, 'dist/utils/styles/fonts/non-var')
    );

    // Copy all theme CSS files
    const themesDir = join(rootDir, 'src/utils/styles/themes');
    const themeFiles = await readdir(themesDir);
    const cssFiles = themeFiles.filter(file => file.endsWith('.css'));

    for (const file of cssFiles) {
      await copyFileWithDir(
        join(themesDir, file),
        join(rootDir, 'dist/utils/styles/themes', file)
      );
    }

    console.log('✓ CSS files copied successfully');
  } catch (error) {
    console.error('Error copying CSS files:', error);
    process.exit(1);
  }
}

copyCssFiles();

