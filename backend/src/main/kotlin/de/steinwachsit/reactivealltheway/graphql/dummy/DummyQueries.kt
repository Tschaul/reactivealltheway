package de.steinwachsit.reactivealltheway.graphql.dummy

import com.expediagroup.graphql.server.operations.Query
import de.steinwachsit.reactivealltheway.models.Dummy
import org.springframework.stereotype.Component

@Component
class DummyQueries : Query {

    suspend fun getDummy(): Dummy {
        return Dummy(foo = "bazz", bar = "zack")
    }
}