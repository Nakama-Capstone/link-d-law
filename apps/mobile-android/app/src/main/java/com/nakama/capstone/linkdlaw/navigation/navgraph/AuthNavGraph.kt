package com.nakama.capstone.linkdlaw.navigation.navgraph

import androidx.navigation.NavController
import androidx.navigation.NavGraphBuilder
import androidx.navigation.compose.composable
import com.nakama.capstone.linkdlaw.navigation.Screen
import com.nakama.capstone.linkdlaw.screen.auth.login.LoginScreen
import com.nakama.capstone.linkdlaw.screen.auth.register.RegisterScreen

fun NavGraphBuilder.authNavGraph(
    navController: NavController
) {
    composable(
        route = Screen.Login.route
    ){
        LoginScreen(navController = navController)
    }
    composable(
        route = Screen.Register.route
    ){
        RegisterScreen(navController = navController)
    }
}