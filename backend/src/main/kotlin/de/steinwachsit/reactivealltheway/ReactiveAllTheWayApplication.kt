package de.steinwachsit.reactivealltheway

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication

@SpringBootApplication
class ReactiveAllTheWayApplication

fun main(args: Array<String>) {
	runApplication<ReactiveAllTheWayApplication>(*args)
}
