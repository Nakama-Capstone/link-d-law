package com.nakama.capstone.linkdlaw.navigation

sealed class Screen(val route: String) {
    
    object Login: Screen("login_screen")
    
    object Register: Screen("register_screen")
    
    object Home: Screen("home_screen")
    
    object Setting: Screen("setting_screen")
    
    object Predict: Screen("predict_screen")
    
}
