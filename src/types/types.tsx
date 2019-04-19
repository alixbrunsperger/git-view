import React, { FunctionComponent } from 'react'
export interface DataType {
    user: UserTypeWithContributionType
}
export interface UserType {
    avatarUrl: string
    login: string
    name: string
}

export interface UserTypeWithContributionType extends UserType {
    issues?: IssuesType
    contributionsCollection?: ContributionsCollectionType
}

export interface ContributionsCollectionType {
    commitContributionsByRepository: CreatedCommitContributionConnectionType[]
}

export interface CreatedCommitContributionConnectionType {
    contributions: {
        nodes: ContributionType[]
    }
    repository: {
        name: string
    }
}

export interface ContributionType {
    commitCount: number
    occurredAt: string
}

export interface IssuesType {
    nodes: DisplayElementType[]
}

export interface PullRequestsType {
    nodes: DisplayElementType[]
}

export interface DisplayElementType {
    createdAt: string
    title: string
    repository: {
        name: string
    }
}

export interface RepositoryType {
    createdAt: string
    description: string
    languages: {
        nodes: LanguageType[]
    }
    name: string
    primaryLanguage: LanguageType
    updatedAt: string
    owner: {
        login: string
    }
}

export interface LanguageType {
    name: string
}

export interface ResultType extends RepositoryType {
    commits: ContributionType[]
}
