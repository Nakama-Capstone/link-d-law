package com.nakama.capstone.linkdlaw.navigation.navgraph

import androidx.compose.runtime.Composable
import androidx.navigation.NavHostController
import androidx.navigation.compose.NavHost

import androidx.navigation.compose.composable

import com.nakama.capstone.linkdlaw.navigation.navgraph.Graph.AUTH
import com.nakama.capstone.linkdlaw.screen.home.HomeScreen


@Composable
fun RootNavGraph(navController: NavHostController){
    

    NavHost(navController = navController, startDestination = AUTH, route = Graph.ROOT){
        authNavGraph(navController)
        composable(route = Graph.HOME) {
            HomeScreen()
        }
    }
    
}

object Graph {
    const val ROOT = "root_graph"
    const val AUTH = "auth_graph"
    const val HOME = "home_graph"
    const val LAW = "law_graph"
    const val LAWYER = "lawyer_graph"
    const val CHAT = "chat_graph"

}