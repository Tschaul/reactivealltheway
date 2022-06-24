import {NgModule} from '@angular/core';
import {ApolloModule, APOLLO_OPTIONS} from 'apollo-angular';
import {HttpLink} from 'apollo-angular/http';
import { WebSocketLink } from '@apollo/client/link/ws';
import { split } from '@apollo/client/core';
import { getMainDefinition } from '@apollo/client/utilities';
import { SubscriptionClient } from 'subscriptions-transport-ws';
import {ApolloClientOptions, InMemoryCache} from '@apollo/client/core';

export function createSplitLink(httpLinkCreator: HttpLink) {

  const httpLink = httpLinkCreator.create({
    uri: 'http://localhost:8080/graphql'
  });
  
  const wsClient = new SubscriptionClient(
    `ws://localhost:8080/subscriptions`,
    {
      reconnect: true,
      lazy: true,
    });

  const wsLink = new WebSocketLink(wsClient);

  return split(
    ({ query }) => {
      const definition = getMainDefinition(query);
      return (
        definition.kind === 'OperationDefinition' &&
        definition.operation === 'subscription'
      );
    },
    wsLink,
    httpLink
  );
}

export function createApollo(httpLink: HttpLink): ApolloClientOptions<any> {
  return {
    link: createSplitLink(httpLink),
    cache: new InMemoryCache(),
  };
}

@NgModule({
  exports: [ApolloModule],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink],
    },
  ],
})
export class GraphQLModule {}
