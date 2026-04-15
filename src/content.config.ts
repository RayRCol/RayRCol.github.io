import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const missions = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/missions' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    status: z.string(),
    statusTone: z.enum(['green', 'blue', 'gold']),
    icon: z.enum(['satellite', 'rocket', 'star']),
    order: z.number(),
    vehicle: z.string(),
    missionWindow: z.string(),
    destination: z.string(),
    coverImage: z.string().default('/images/rocket-launch.png'),
  }),
});

const reports = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/reports' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    label: z.string(),
    publishedAt: z.coerce.date(),
    image: z.string().default('/images/exoplanet.png'),
    spectrumBars: z.array(z.number().int().min(0).max(100)).length(12),
    rangeStart: z.string(),
    rangeEnd: z.string(),
    highlight: z.string(),
  }),
});

const departures = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/departures' }),
  schema: z.object({
    title: z.string(),
    detail: z.string(),
    launchDate: z.coerce.date(),
    countdown: z.string(),
    image: z.string().default('/images/rocket-launch.png'),
    launchSite: z.string(),
    missionWindow: z.string(),
    order: z.number(),
  }),
});

export const collections = {
  missions,
  reports,
  departures,
};
