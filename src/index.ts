import { NvimPlugin } from 'neovim';
import runTemplate from './components/createWeek';
import getCurrentWeekDates from './components/getCurrentWeekDays';
import { readdirSync } from 'fs';
import { join } from 'path';

function returnDefaultTemplate(){
  const templatesDir = join(__dirname, 'templates');
  const files = readdirSync(templatesDir);
  return files.length > 0 ? join(templatesDir, files[0]) : '';
}

function run(){
  const defaultTemplate = returnDefaultTemplate();
  const currentWeek = getCurrentWeekDates();
  runTemplate(defaultTemplate, currentWeek, '/Users/lance/test.md')
}

module.exports = (plugin: NvimPlugin) => {
  // Register a command
  plugin.registerCommand('CreateWeek', async () => {
    run()
    await plugin.nvim.outWrite('Complete!\n');
  }, { sync: false });
};
