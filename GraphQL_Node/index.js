const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql`
  type Weight {
    id: Int
    name: String
    sets: Int
    reps: Int
    weight: Int
  }

  type Query {
    weight: [Weight],
  }
  
  type Mutation {
    weight(name: String!, sets: Int!, reps: Int!, weight: Int!): Weight!
  }
`;

const weights = [
    {
        id: 1,
        name: 'Incline Bench Press',
        sets: 5,
        reps: 10,
        weight: 120
    },
    {
        id: 2,
        name: 'Hammer Curl',
        sets: 5,
        reps: 3,
        weight: 65
    },
]

const resolvers = {
    Query: {
        weight: () => weights
    },
    Mutation: {
        weight: (parent, args) => {
            let newId = weights.length + 1

            const newWeight = {
                id: newId,
                name: args.name,
                sets: args.sets,
                reps: args.reps,
                weight: args.weight
            }
            weights.push(newWeight)
            return newWeight
        }
    }
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});