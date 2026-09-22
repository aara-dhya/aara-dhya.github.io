import { writable } from 'svelte/store';

export type Theme = 'dark' | 'light';
export type View = 'home' | 'about' | 'projects' | 'project_detail';

// Initial state
export const theme = writable<Theme>('dark');
export const currentView = writable<View>('home');
export const activeProject = writable<string | null>(null);
