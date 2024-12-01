import { Octokit } from "@octokit/rest";

export interface GetTopRatedReposOptions {
  username: string;
  perPage?: number;
  topN?: number;
}

function parseLink(link: string) {
  const url = new URL(link);
  if (url.host !== "github.com") {
    return null;
  }
  const [owner, repo] = url.pathname.split("/").slice(1, 3);
  return { owner, repo };
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

export async function getReposStarts(
  client: Octokit,
  repos: string[]
): Promise<Record<string, number>> {
  const result: Record<string, number> = {};
  await Promise.all(
    repos.map(async (repo) => {
      const repoInfo = parseLink(repo);
      if (repoInfo === null) {
        return;
      }
      const {
        data: { stargazers_count },
      } = await client.repos.get(repoInfo);
      if (stargazers_count === undefined) {
        return;
      }
      result[repo] = stargazers_count;
    })
  );
  return result;
}
