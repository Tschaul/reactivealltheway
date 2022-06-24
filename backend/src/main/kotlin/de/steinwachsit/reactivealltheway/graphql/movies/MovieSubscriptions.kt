package de.steinwachsit.reactivealltheway.graphql.movies

import com.expediagroup.graphql.server.operations.Subscription
import de.steinwachsit.reactivealltheway.database.movies.MovieReader
import de.steinwachsit.reactivealltheway.models.Movie
import org.springframework.stereotype.Component
import reactor.core.publisher.Flux

data class MovieStats(
    val moviesCount: Int,
    val totalLikes: Int
)

@Component
class MovieSubscriptions(
    private val movieReader: MovieReader
) : Subscription {

    fun allMovies(): Flux<List<Movie>> {
        return movieReader.all()
    }

    fun movieStats(): Flux<MovieStats> {
        return movieReader.all().map { allMovies ->
            allMovies.fold(MovieStats(0,0)) { acc, movie ->
                acc.copy(
                    moviesCount = acc.moviesCount + 1,
                    totalLikes = acc.totalLikes + movie.likes
                )
            }
        }
    }
}