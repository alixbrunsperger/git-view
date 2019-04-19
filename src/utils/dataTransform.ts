import { DataType, DisplayElementType, RepositoryType, CreatedCommitContributionConnectionType, ResultType } from "../types/types";
import _ from 'lodash';

function getCommitContributions(data: DataType): CreatedCommitContributionConnectionType[] {
    return _.get(data, 'user.contributionsCollection.commitContributionsByRepository');
};

export function getIssues(data: DataType): DisplayElementType[] {
    const issues = _.get(data, 'user.issues.nodes');
    return issues ? issues : [];
};

export function getPullRequests(data: DataType): DisplayElementType[] {
    const pullRequests = _.get(data, 'user.pullRequests.nodes');
    return pullRequests ? pullRequests : [];
};

function getRepositories(data: DataType): RepositoryType[] {
    return _.get(data, 'user.repositories.nodes');
};

export function getResults(data: DataType): ResultType[] {
    const commitContributions: CreatedCommitContributionConnectionType[] = getCommitContributions(data);
    const repositories: RepositoryType[] = getRepositories(data);

    const results = repositories.map((repository) => {
        const contributionsData: any = _.find(commitContributions, (contribution) => contribution.repository.name === repository.name);
        return {
            ...repository,
            commits: contributionsData ? contributionsData.contributions.nodes : [],
        }
    });
    return results ? results : [];
}

export function getRepositoryLink(login: string, repositoryName: string) {
    return `https://github.com/${login}/${repositoryName}`;
}

export function getUserLink(login: string) {
    return `https://github.com/${login}`;
}