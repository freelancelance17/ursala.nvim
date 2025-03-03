import * as fs from 'fs';
import * as Handlebars from 'handlebars';

/**
 * Generates a file from a Handlebars template and data.
 * 
 * @param templatePath - The path to the Handlebars template file.
 * @param data - The data object to fill the template.
 * @param outputPath - The path where the generated file should be saved.
 */
export default function runTemplate(templatePath: string, data: object, outputPath: string): void {
  try {
    // Read the template file
    const templateSource = fs.readFileSync(templatePath, 'utf-8');

    // Compile the template
    const template = Handlebars.compile(templateSource);

    // Render the template with the data
    const outputContent = template(data);

    // Write the rendered content to the output file
    fs.writeFileSync(outputPath, outputContent);

    console.log(`File generated at: ${outputPath}`);
  } catch (error) {
    console.error('Error generating file:', error);
  }
}


