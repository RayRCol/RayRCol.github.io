import { getCollection, type CollectionEntry } from 'astro:content';

import type {
  DiscoveryContent,
  LaunchRowProps,
  MissionCardProps,
  NextDepartureContent,
  SpectrumBarProps,
} from '../data/site';
import { formatShortDate } from './format';

export type MissionEntry = CollectionEntry<'missions'>;
export type ReportEntry = CollectionEntry<'reports'>;
export type DepartureEntry = CollectionEntry<'departures'>;

export async function getMissionEntries() {
  const entries = await getCollection('missions');
  return entries.sort((left, right) => left.data.order - right.data.order);
}

export async function getReportEntries() {
  const entries = await getCollection('reports');
  return entries.sort((left, right) => right.data.publishedAt.getTime() - left.data.publishedAt.getTime());
}

export async function getDepartureEntries() {
  const entries = await getCollection('departures');
  return entries.sort((left, right) => left.data.order - right.data.order);
}

export function toMissionCard(entry: MissionEntry): MissionCardProps {
  return {
    title: entry.data.title,
    description: entry.data.summary,
    status: entry.data.status,
    statusTone: entry.data.statusTone,
    icon: entry.data.icon,
    href: `/missions/${entry.id}/`,
  };
}

export function toDiscoveryContent(entry: ReportEntry): DiscoveryContent {
  return {
    label: entry.data.label,
    title: entry.data.title,
    body: entry.data.summary,
    cta: {
      href: `/reports/${entry.id}/`,
      label: 'Read Report',
    },
    archiveHref: '/reports/',
    archiveLabel: 'View All Reports',
    image: entry.data.image,
    rangeStart: entry.data.rangeStart,
    rangeEnd: entry.data.rangeEnd,
  };
}

export function toSpectrumBars(entry: ReportEntry): SpectrumBarProps[] {
  return entry.data.spectrumBars.map((value) => ({ value }));
}

export function toNextDepartureContent(entry: DepartureEntry): NextDepartureContent {
  return {
    title: 'Next Departure',
    label: 'T-Minus',
    countdown: entry.data.countdown,
    image: entry.data.image,
    allHref: '/departures/',
  };
}

export function toLaunchRow(entry: DepartureEntry): LaunchRowProps {
  return {
    date: formatShortDate(entry.data.launchDate),
    title: entry.data.title,
    detail: entry.data.detail,
    href: `/departures/${entry.id}/`,
  };
}
