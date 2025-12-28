// lib/github.js
export async function getGithubProjects() {
    const username = "RohanrajeBhosale";
    const res = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=10`, {
        next: { revalidate: 3600 } // Re-syncs data every 1 hour automatically
    });

    if (!res.ok) return [];

    const repos = await res.json();
    return repos
        .filter(repo => !repo.fork && repo.description) // Only show original work with descriptions
        .map(repo => ({
            id: repo.id,
            title: repo.name.replace(/-/g, ' '),
            description: repo.description,
            link: repo.html_url,
            tags: repo.topics || [repo.language].filter(Boolean)
        }));
}