package com.nakama.capstone.linkdlaw.navigation.navgraph

import androidx.compose.runtime.Composable
import androidx.navigation.NavHostController
import androidx.navigation.compose.NavHost
import androidx.navigation.navigation
import com.nakama.capstone.linkdlaw.navigation.GRAPH_AUTH
import com.nakama.capstone.linkdlaw.navigation.Screen

@Composable
fun Navigation(navController: NavHostController){
    
    NavHost(navController = navController, startDestination = GRAPH_AUTH){
        navigation(
            startDestination = Screen.Login.route,
            route = GRAPH_AUTH
        ){
            authNavGraph(navController)
        }
        
    }
    
}