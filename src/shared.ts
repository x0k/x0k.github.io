import { Octokit } from '@octokit/rest';
import { GIT_HUB_TOKEN } from 'astro:env/server'

export enum Page {
  Resume = "/",
  Projects = "projects",
}

export const BIRTHDAY = new Date(1997, 7, 31);
export const EMAIL = "x4s9hvyny@mozmail.com";
export const GITHUB_USERNAME = "x0k";
export const GITHUB_LINK = `https://github.com/${GITHUB_USERNAME}`;

export const github = new Octokit({
  auth: GIT_HUB_TOKEN
})
