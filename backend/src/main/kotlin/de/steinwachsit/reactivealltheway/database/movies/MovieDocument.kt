package de.steinwachsit.reactivealltheway.database.movies

import de.steinwachsit.reactivealltheway.models.Movie
import org.springframework.data.annotation.Id

data class MovieDocument(
    @Id val id: String?,
    val title: String,
    val description: String,
    val likes: Int
) {

    fun toModel(): Movie {
        return Movie(
            id = id ?: error("MovieDocument has no Id."),
            title = title,
            description = description,
            likes = likes
        )
    }
}