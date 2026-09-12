import GitHubStats from '@sections/GitHubStats'

interface GitHubPageProps {
  isDark: boolean
}

export default function GitHubPage({ isDark }: GitHubPageProps) {
  return <GitHubStats isDark={isDark} />
}
