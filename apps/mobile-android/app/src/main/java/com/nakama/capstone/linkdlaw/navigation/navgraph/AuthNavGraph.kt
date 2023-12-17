package com.nakama.capstone.linkdlaw.navigation.navgraph

import androidx.navigation.NavController
import androidx.navigation.NavGraphBuilder
import androidx.navigation.compose.composable
import androidx.navigation.navigation
import com.nakama.capstone.linkdlaw.screen.auth.login.LoginScreen
import com.nakama.capstone.linkdlaw.screen.auth.register.RegisterScreen

fun NavGraphBuilder.authNavGraph(
    navController: NavController
) {
    navigation(
        route = Graph.AUTH,
        startDestination = AuthScreen.Login.route
    ){
        composable(
            route = AuthScreen.Login.route
        ){
            
            LoginScreen(
                onClick = {
                    navController.popBackStack()
                    navController.navigate(Graph.HOME)
                },
                onRegisterClick = {
                    navController.navigate(AuthScreen.Register.route)
                }
            )
        }
        composable(
            route = AuthScreen.Register.route
        ){
            RegisterScreen(navController = navController)
        }
    }
}

sealed class AuthScreen(val route: String) {
    object Login: AuthScreen("login")
    object Register: AuthScreen("register")
}