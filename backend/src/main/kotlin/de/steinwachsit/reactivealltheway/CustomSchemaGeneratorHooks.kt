//package de.steinwachsit.reactivealltheway
//
//import com.expediagroup.graphql.generator.hooks.SchemaGeneratorHooks
//import graphql.language.StringValue
//import graphql.schema.Coercing
//import graphql.schema.GraphQLScalarType
//import graphql.schema.GraphQLType
//import org.bson.types.ObjectId
//import org.springframework.stereotype.Component
//import kotlin.reflect.KType
//
//@Component
//class CustomSchemaGeneratorHooks() : SchemaGeneratorHooks {
//
//    override fun willGenerateGraphQLType(type: KType): GraphQLType? = when (type.classifier) {
//        ObjectId::class -> graphqlUUIDType
//        else -> super.willGenerateGraphQLType(type)
//    }
//}
//
//val graphqlUUIDType = GraphQLScalarType.newScalar()
//    .name("ObjectId")
//    .description("A type representing a formatted java.util.UUID")
//    .coercing(UUIDCoercing)
//    .build()
//
//object UUIDCoercing : Coercing<ObjectId, String> {
//    override fun parseValue(input: Any): ObjectId = ObjectId.
//
//    override fun parseLiteral(input: Any): ObjectId {
//        val uuidString = (input as? StringValue)?.value
//        return ObjectId.fromString(uuidString)
//    }
//
//    override fun serialize(dataFetcherResult: Any): String = dataFetcherResult.toString()
//}