'use server';
/**
 * @fileOverview A Genkit flow for generating creative slogan suggestions.
 *
 * - generateSloganSuggestions - A function that handles the slogan generation process.
 * - SloganSuggestionsInput - The input type for the generateSloganSuggestions function.
 * - SloganSuggestionsOutput - The return type for the generateSloganSuggestions function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SloganSuggestionsInputSchema = z.object({
  topic: z.string().describe('A topic or keywords for which to generate slogans.'),
});
export type SloganSuggestionsInput = z.infer<typeof SloganSuggestionsInputSchema>;

const SloganSuggestionsOutputSchema = z.object({
  slogans: z.array(z.string()).describe('An array of creative and varied slogan suggestions.'),
});
export type SloganSuggestionsOutput = z.infer<typeof SloganSuggestionsOutputSchema>;

export async function generateSloganSuggestions(
  input: SloganSuggestionsInput
): Promise<SloganSuggestionsOutput> {
  return generateSloganSuggestionsFlow(input);
}

const sloganPrompt = ai.definePrompt({
  name: 'sloganPrompt',
  input: {schema: SloganSuggestionsInputSchema},
  output: {schema: SloganSuggestionsOutputSchema},
  prompt: `You are a creative advertising expert. Your task is to generate five diverse and catchy slogan suggestions based on the provided topic or keywords.

Ensure the slogans are varied in tone and style, suitable for different branding needs.

Topic: {{{topic}}}`,
});

const generateSloganSuggestionsFlow = ai.defineFlow(
  {
    name: 'generateSloganSuggestionsFlow',
    inputSchema: SloganSuggestionsInputSchema,
    outputSchema: SloganSuggestionsOutputSchema,
  },
  async input => {
    const {output} = await sloganPrompt(input);
    return output!;
  }
);
