package de.steinwachsit.reactivealltheway.database.movies

import kotlinx.coroutines.reactive.awaitFirstOrNull
import kotlinx.coroutines.reactor.awaitSingle
import org.springframework.stereotype.Component
import java.util.*

@Component
class MovieWriter(
    private val repository: MovieRepository
) {

    suspend fun insertMovie(title: String, description: String): String {
        return repository.insert(
            MovieDocument(
                id = null,
                title = title,
                description = description,
                likes = 0
            )
        ).awaitSingle().id!!
    }

    suspend fun deleteMovie(id: String) {
        repository.deleteById(id).awaitFirstOrNull()
    }

    suspend fun updateMovie(id: String, title: String, description: String) {
        repository.findById(id).flatMap {
            repository.save(it.copy(title = title, description = description))
        }.awaitFirstOrNull()
    }

    suspend fun likeMovie(id: String) {
        repository.findById(id).flatMap {
            repository.save(it.copy(likes = it.likes + 1))
        }.awaitFirstOrNull()
    }
}