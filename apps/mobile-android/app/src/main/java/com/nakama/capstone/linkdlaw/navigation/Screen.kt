package com.nakama.capstone.linkdlaw.navigation

//const val GRAPH_ROOT = "root"
const val GRAPH_AUTH = "auth"
//const val GRAPH_HOME = "home"

sealed class Screen(val route: String) {
    
    object Login: Screen("login_screen")
    
    object Register: Screen("register_screen")
    
}
