package de.steinwachsit.reactivealltheway.database.movies

import kotlinx.coroutines.reactor.awaitSingle
import org.springframework.stereotype.Component
import javax.annotation.PostConstruct

@Component
class MovieInitializer(
    private val repository: MovieRepository
) {

    @PostConstruct
    fun init() {
        repository.deleteAll().block()

        listOf(
            MovieDocument(
                id = null,
                title = "Die Verurteilten",
                description = "Zwei eingesperrte Männer wachsen über die Laufe der Jahre, Trost und letztendliche Erlösung durch Akte einfachen Anstands findend.",
                likes = 8
            ),
            MovieDocument(
                id = null,
                title = "The Dark Knight",
                description = "Als das Phantom bekannt als der Joker aus dem Schatten tritt, schreitet er wie ein Sturm durch Gotham. Der dunkle Ritter muss sich ihm entgegenstellen, und damit dem größten physikalischen und psychologischen Tests seiner Geschichte.",
                likes = 7
            ),
            MovieDocument(
                id = null,
                title = "Der Herr der Ringe: Die Rückkehr des Königs",
                description = "Nicht nur Frodo und Sam werden auf ihrer Reise mit dem Einen Ring von immensen Bedrohungen geplagt, sondern auch die anderen Gefährten sehen sich der Macht Saurons gegenübergestellt.",
                likes = 6
            ),
            MovieDocument(
                id = null,
                title = "Die zwölf Geschworenen",
                description = "Ein Jury versucht die anderen Geschworenen davon abzuhalten, das Glücken der Gerechtigkeit durch zu oberflächliches Betrachten der Beweislage zu gefährden.",
                likes = 5
            ),
            MovieDocument(
                id = null,
                title = "Der Pate",
                description = "Der alternde Patriarch einer organisierten Verbrecherdynasie überträgt die Kontrolle über sein Imperium zu seinem zögernden Sohn.",
                likes = 4
            ),
            MovieDocument(
                id = null,
                title = "Der Pate 2",
                description = "Das frühe Leben des Vito Corleone in den 1920ern wird gezeigt, während sein Sohn Michael den Einfluss des Syndikats vergrößert und seinen Einfluss stärker macht.",
                likes = 4
            ),
            MovieDocument(
                id = null,
                title = "Der Herr der Ringe: Die Gefährten",
                description = "Ein einfacher Hobbit macht sich gemeinsam mit acht Gefährten auf die gefährliche Reise, dein mächtigen Einen Ring zu zerstören, um Mittelerde vor Sauron zu retten, ehe es zu spät ist.",
                likes = 3
            ),
            MovieDocument(
                id = null,
                title = "Schindlers Liste",
                description = "Im von Deutschland besetzten Polen während des Zweiten Weltkriegs, sorgt sich Oskar Schindler zunehmend für seine jüdischen Arbeitskräfte, nachdem er deren Verfolgung durch die Nationalsozialisten beobachtete.",
                likes = 2
            ),
            MovieDocument(
                id = null,
                title = "Pulp Fiction",
                description = "Das Leben zweier Auftragsmörder, einem Boxer, der Frau eines Gangsters und eines Pärchens von Dinerbanditen verknüpfen sich in vier Geschichten von Gewalt und Erlösung.",
                likes = 1
            ),
        ).forEach {
            repository.insert(it).block()
        }
    }
}