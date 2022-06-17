package de.steinwachsit.reactivealltheway.database.movies

import de.steinwachsit.reactivealltheway.database.movies.MovieDocument
import org.springframework.data.mongodb.repository.ReactiveMongoRepository
import java.util.*

interface MovieRepository : ReactiveMongoRepository<MovieDocument, String> {
}