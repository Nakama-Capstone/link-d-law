package com.nakama.capstone.linkdlaw.navigation.navgraph

import androidx.compose.runtime.Composable
import androidx.navigation.NavHostController
import androidx.navigation.compose.NavHost
import androidx.navigation.navigation

import com.nakama.capstone.linkdlaw.navigation.Screen
import com.nakama.capstone.linkdlaw.navigation.navgraph.Graph.AUTH


@Composable
fun Navigation(navController: NavHostController){
    

    NavHost(navController = navController, startDestination = AUTH){
        navigation(
            startDestination = Screen.Login.route,
            route = AUTH

        ){
            authNavGraph(navController)
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