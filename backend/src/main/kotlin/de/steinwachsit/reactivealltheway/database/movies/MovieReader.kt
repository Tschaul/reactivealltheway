package de.steinwachsit.reactivealltheway.database.movies

import com.mongodb.client.model.changestream.OperationType
import de.steinwachsit.reactivealltheway.models.Movie
import org.slf4j.LoggerFactory
import org.springframework.data.mongodb.core.ReactiveMongoTemplate
import org.springframework.stereotype.Component
import reactor.core.publisher.Flux
import java.util.*
import javax.annotation.PostConstruct

@Component
class MovieReader(
    private val repository: MovieRepository,
    private val template: ReactiveMongoTemplate
) {

    val logger = LoggerFactory.getLogger(MovieReader::class.java)

    val changes by lazy {
        template.changeStream(MovieDocument::class.java)
            .listen()
    }

    // just for demo purposes
    @PostConstruct
    fun logAllChanges() {
        all().subscribe {
            logger.info("Observed data change:\n${it.joinToString("\n")}")
        }
    }

    fun all(): Flux<List<Movie>> {
        val current = repository.findAll().collectList().map { it.map { it.toModel() } }

        return current.flatMapMany { initialMovies ->
            Flux.concat(
                Flux.just(initialMovies),
                changes.scan(initialMovies) { acc, changeStreamEvent ->
                    val id = changeStreamEvent.raw?.documentKey?.get("_id")?.asObjectId()?.value.toString()
                    when (changeStreamEvent.operationType) {
                        OperationType.UPDATE, OperationType.REPLACE ->
                            acc.filter { it.id != id } + changeStreamEvent.body!!.toModel()
                        OperationType.DELETE ->
                            acc.filter { it.id != id }
                        OperationType.INSERT ->
                            acc + changeStreamEvent.body!!.toModel()
                        else -> acc
                    }
                }
            )
        }.map { it.sortedByDescending { it.likes } }

    }
}