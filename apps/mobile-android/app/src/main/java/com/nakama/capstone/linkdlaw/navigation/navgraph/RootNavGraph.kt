package com.nakama.capstone.linkdlaw.navigation.navgraph

import android.util.Log
import androidx.compose.runtime.Composable
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.collectAsState
import androidx.navigation.NavHostController
import androidx.navigation.compose.NavHost
import androidx.navigation.compose.composable
import com.nakama.capstone.linkdlaw.preferences.SessionPreferences
import com.nakama.capstone.linkdlaw.screen.home.HomeScreen
import org.koin.compose.koinInject


@Composable
fun RootNavGraph(navController: NavHostController){
    
    val pref: SessionPreferences = koinInject()
    val user = pref.getUserSession().collectAsState(initial = null)
    
    
    NavHost(navController = navController, startDestination = Graph.AUTH, route = Graph.ROOT){
        
        authNavGraph(navController)
        composable(route = Graph.HOME) {
            HomeScreen(rootNavController = navController)
        }
    }
    
    LaunchedEffect(user.value?.isLogin) {
        if (user.value?.isLogin == true){
            navController.navigate(Graph.HOME)
            Log.d("home", "RootNavGraph: ${user.value?.token}")
        } else {
            Log.d("auth", "RootNavGraph: ${user.value?.token}")
            navController.navigate(Graph.AUTH)
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