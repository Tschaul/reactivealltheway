import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Dummy = {
  __typename?: 'Dummy';
  bar: Scalars['String'];
  foo: Scalars['String'];
};

export type Movie = {
  __typename?: 'Movie';
  description: Scalars['String'];
  id: Scalars['String'];
  likes: Scalars['Int'];
  title: Scalars['String'];
};

export type MovieStats = {
  __typename?: 'MovieStats';
  moviesCount: Scalars['Int'];
  totalLikes: Scalars['Int'];
};

export type Mutation = {
  __typename?: 'Mutation';
  deleteMovie: Scalars['String'];
  insertMovie: Scalars['String'];
  likeMovie: Scalars['String'];
  updateMovie: Scalars['String'];
};


export type MutationDeleteMovieArgs = {
  id: Scalars['String'];
};


export type MutationInsertMovieArgs = {
  description: Scalars['String'];
  title: Scalars['String'];
};


export type MutationLikeMovieArgs = {
  id: Scalars['String'];
};


export type MutationUpdateMovieArgs = {
  description: Scalars['String'];
  id: Scalars['String'];
  title: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  getDummy: Dummy;
};

export type Subscription = {
  __typename?: 'Subscription';
  allMovies: Array<Movie>;
  movieStats: MovieStats;
};

export type AllMoviesSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type AllMoviesSubscription = { __typename?: 'Subscription', allMovies: Array<{ __typename?: 'Movie', title: string, description: string, likes: number }> };

export const AllMoviesDocument = gql`
    subscription AllMovies {
  allMovies {
    title
    description
    likes
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class AllMoviesGQL extends Apollo.Subscription<AllMoviesSubscription, AllMoviesSubscriptionVariables> {
    document = AllMoviesDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }