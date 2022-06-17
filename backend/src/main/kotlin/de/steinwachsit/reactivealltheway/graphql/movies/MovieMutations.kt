package de.steinwachsit.reactivealltheway.graphql.movies

import com.expediagroup.graphql.server.operations.Mutation
import de.steinwachsit.reactivealltheway.database.movies.MovieDocument
import de.steinwachsit.reactivealltheway.database.movies.MovieWriter
import org.springframework.stereotype.Component
import java.util.*

@Component
class MovieMutations(
    private val writer: MovieWriter
) : Mutation {

    suspend fun insertMovie(title: String, description: String): String {
        return writer.insertMovie(title, description)
    }

    suspend fun updateMovie(id: String, title: String, description: String): String {
        writer.updateMovie(id, title, description)
        return "Success"
    }

    suspend fun likeMovie(id: String): String {
        writer.likeMovie(id)
        return "Success"
    }

    suspend fun deleteMovie(id: String): String {
        writer.deleteMovie(id)
        return "Success"
    }
}