package com.nakama.capstone.linkdlaw.navigation.navgraph

import androidx.compose.runtime.Composable
import androidx.navigation.NavController
import androidx.navigation.NavHostController
import androidx.navigation.compose.NavHost
import androidx.navigation.compose.composable
import com.nakama.capstone.linkdlaw.navigation.model.BottomBarScreen
import com.nakama.capstone.linkdlaw.screen.auth.login.LoginViewModel
import com.nakama.capstone.linkdlaw.screen.daftarhukum.DaftarhukumScreen
import com.nakama.capstone.linkdlaw.screen.home.HomeContent
import com.nakama.capstone.linkdlaw.screen.pengacara.PengacaraScreen
import com.nakama.capstone.linkdlaw.screen.pesan.PesanScreen
import com.nakama.capstone.linkdlaw.screen.settings.SettingScreen
import com.nakama.capstone.linkdlaw.screen.settings.SettingsViewModel
import org.koin.androidx.compose.koinViewModel

@Composable
fun HomeNavGraph(rootNavController: NavController ,navController: NavHostController) {
    NavHost(
        navController = navController,
        route = Graph.HOME,
        startDestination = BottomBarScreen.Home.route
    ){
        composable(route = BottomBarScreen.Home.route){
            val authViewModel: LoginViewModel = koinViewModel()
            
            HomeContent(
                item = listOf("text1", "text2", "text3"),
                onSearch = {},
                onClick = {
                    navController.navigate(HomeGraph.Setting.route)
                    
                    //testing logout
//                    authViewModel.logout()
//                    rootNavController.popBackStack()
//                    rootNavController.navigate(Graph.AUTH)
                }
            )
        }
        
        composable(route = HomeGraph.Setting.route){
            val settingsViewModel:SettingsViewModel = koinViewModel()
            
            SettingScreen(
                logoutClick = {
                    settingsViewModel.logout()
                    rootNavController.popBackStack()
                    rootNavController.navigate(Graph.AUTH)
                }
            )
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
    object Home: HomeGraph("home")
    
    object Profile: HomeGraph("profile")
    
    object Setting: HomeGraph("setting")
    
}