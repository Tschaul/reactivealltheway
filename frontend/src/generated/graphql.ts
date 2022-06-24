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

export type DeleteMovieMutationVariables = Exact<{
  id: Scalars['String'];
}>;


export type DeleteMovieMutation = { __typename?: 'Mutation', deleteMovie: string };

export type LikeMovieMutationVariables = Exact<{
  id: Scalars['String'];
}>;


export type LikeMovieMutation = { __typename?: 'Mutation', likeMovie: string };

export type AllMoviesSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type AllMoviesSubscription = { __typename?: 'Subscription', allMovies: Array<{ __typename?: 'Movie', id: string, title: string, description: string, likes: number }> };

export type InsertMovieMutationVariables = Exact<{
  title: Scalars['String'];
  description: Scalars['String'];
}>;


export type InsertMovieMutation = { __typename?: 'Mutation', insertMovie: string };

export type MovieStatsSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type MovieStatsSubscription = { __typename?: 'Subscription', movieStats: { __typename?: 'MovieStats', moviesCount: number, totalLikes: number } };

export const DeleteMovieDocument = gql`
    mutation DeleteMovie($id: String!) {
  deleteMovie(id: $id)
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class DeleteMovieGQL extends Apollo.Mutation<DeleteMovieMutation, DeleteMovieMutationVariables> {
    document = DeleteMovieDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const LikeMovieDocument = gql`
    mutation LikeMovie($id: String!) {
  likeMovie(id: $id)
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class LikeMovieGQL extends Apollo.Mutation<LikeMovieMutation, LikeMovieMutationVariables> {
    document = LikeMovieDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const AllMoviesDocument = gql`
    subscription AllMovies {
  allMovies {
    id
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
export const InsertMovieDocument = gql`
    mutation InsertMovie($title: String!, $description: String!) {
  insertMovie(title: $title, description: $description)
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class InsertMovieGQL extends Apollo.Mutation<InsertMovieMutation, InsertMovieMutationVariables> {
    document = InsertMovieDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const MovieStatsDocument = gql`
    subscription MovieStats {
  movieStats {
    moviesCount
    totalLikes
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class MovieStatsGQL extends Apollo.Subscription<MovieStatsSubscription, MovieStatsSubscriptionVariables> {
    document = MovieStatsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }