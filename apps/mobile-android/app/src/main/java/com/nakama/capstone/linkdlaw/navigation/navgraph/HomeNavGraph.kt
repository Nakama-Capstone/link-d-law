package com.nakama.capstone.linkdlaw.navigation.navgraph

import androidx.compose.runtime.Composable
import androidx.navigation.NavHostController
import androidx.navigation.compose.NavHost
import androidx.navigation.compose.composable
import com.nakama.capstone.linkdlaw.navigation.model.BottomBarScreen
import com.nakama.capstone.linkdlaw.screen.daftarhukum.DaftarhukumScreen
import com.nakama.capstone.linkdlaw.screen.home.HomeContent
import com.nakama.capstone.linkdlaw.screen.pengacara.PengacaraScreen
import com.nakama.capstone.linkdlaw.screen.pesan.PesanScreen
import com.nakama.capstone.linkdlaw.screen.settings.SettingScreen

@Composable
fun HomeNavGraph(navController: NavHostController) {
    NavHost(
        navController = navController,
        route = Graph.HOME,
        startDestination = BottomBarScreen.Home.route
    ){
        composable(route = BottomBarScreen.Home.route){
            HomeContent(
                item = listOf("text1", "text2", "text3"),
                onSearch = {},
                onClick = {
                    navController.navigate(HomeGraph.Setting.route)
                }
            )
        }
        
        composable(route = HomeGraph.Setting.route){
            SettingScreen()
        }
        
        composable(route = BottomBarScreen.Law.route){
            DaftarhukumScreen()
        }
        composable(route = BottomBarScreen.Lawyer.route){
            PengacaraScreen()
        }
        composable(route = BottomBarScreen.Chat.route){
            PesanScreen()
        }
    }
}

sealed class HomeGraph(val route: String) {
    object Profile: HomeGraph("profile")
    
    object Setting: HomeGraph("setting")
    
}