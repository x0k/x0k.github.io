import { Octokit } from "@octokit/rest";

export interface GetTopRatedReposOptions {
  username: string;
  perPage?: number;
  topN?: number;
}

export async function getTopStarredActualRepos(
  client: Octokit,
  { username, topN = 5, perPage = 50 }: GetTopRatedReposOptions
) {
  const { data: repos } = await client.repos.listForUser({
    username,
    sort: "updated",
    per_page: perPage,
  });
  repos.sort((a, b) => (b.stargazers_count ?? 0) - (a.stargazers_count ?? 0));
  return repos
    .filter((r) => !r.archived && (r.stargazers_count ?? 0) > 0)
    .slice(0, topN);
}
