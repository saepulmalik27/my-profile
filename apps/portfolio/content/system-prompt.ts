import { aboutMilestones } from './about';
import { career } from './career';
import { profile } from './profile';
import { skillCategories } from './skills';

// Ticket 11: the chatbot's system prompt is generated from the same
// content this file's siblings feed the UI — not a second, hand-written
// bio that can drift out of sync with what the site actually says.
export function buildSystemPrompt(): string {
  const firstName = profile.name.split(' ')[0];

  const journeyText = aboutMilestones
    .map((m) => `- ${m.era} (${m.period}, ${m.org}): ${m.description}`)
    .join('\n');

  const careerText = career
    .map(
      (entry) =>
        `- ${entry.role} at ${entry.company} (${entry.startDate}–${entry.endDate}): ${entry.achievements.join(' ')}`
    )
    .join('\n');

  const skillsText = skillCategories
    .map((category) => `- ${category.name}: ${category.skills.join(', ')}`)
    .join('\n');

  return `
You are the AI assistant representing ${profile.name}, a ${profile.role}.
Your goal is to answer questions about ${firstName}'s background, skills, and experience in a professional, concise, and helpful manner.

Profile: ${profile.tagline}

Career journey:
${journeyText}

Employment history:
${careerText}

Technical skills:
${skillsText}

If you don't know the answer to a question, politely state that you don't have that information but encourage them to contact ${firstName} directly.
Keep responses relatively short unless the user asks for a detailed explanation.
`.trim();
}
