package com.nakama.capstone.linkdlaw.navigation.navgraph

import androidx.compose.runtime.Composable
import androidx.navigation.NavController
import androidx.navigation.NavHostController
import androidx.navigation.compose.NavHost
import androidx.navigation.compose.composable
import com.nakama.capstone.linkdlaw.navigation.model.BottomBarScreen
import com.nakama.capstone.linkdlaw.screen.auth.login.LoginViewModel
import com.nakama.capstone.linkdlaw.screen.chat.ChatClassificationScreen
import com.nakama.capstone.linkdlaw.screen.chat.ChatKimScreen
import com.nakama.capstone.linkdlaw.screen.chat.ChatLawyerScreen
import com.nakama.capstone.linkdlaw.screen.daftarhukum.DaftarhukumScreen
import com.nakama.capstone.linkdlaw.screen.detailhukum.DetailHukumScreen
import com.nakama.capstone.linkdlaw.screen.home.HomeContent
import com.nakama.capstone.linkdlaw.screen.pengacara.PengacaraScreen
import com.nakama.capstone.linkdlaw.screen.pengacaraprofile.PengacaraProfileScreen
import com.nakama.capstone.linkdlaw.screen.pesan.PesanScreen
import com.nakama.capstone.linkdlaw.screen.profile.EditProfileScreen
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
                },
                toChatKimScreen = {
                    navController.navigate(HomeGraph.ChatKim.route)
                },
                toClassificationScreen = {
                    navController.navigate(HomeGraph.LawClassification.route)
                }
            )
        }
        
        composable(route = HomeGraph.LawClassification.route){
            ChatClassificationScreen(
                navigateBack = {
                    navController.navigateUp()
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
                },
                onProfileClick = {
                    navController.navigate(HomeGraph.EditProfile.route)
                }
            )
        }
        
        composable(route = BottomBarScreen.Law.route){
            DaftarhukumScreen(
                toLawDetail = {
                    navController.navigate(HomeGraph.DetailLaw.route)
                }
            )
        }
        
        composable(route = HomeGraph.DetailLaw.route){
            DetailHukumScreen(
                navigateBack = {
                    navController.navigateUp()
                }
            )
        }
        
        composable(route = BottomBarScreen.Lawyer.route){
            PengacaraScreen(
                toDetailLawyer = {
                    navController.navigate(route = HomeGraph.DetailLawyer.route)
                }
            )
        }
        composable(route = BottomBarScreen.Chat.route){
            PesanScreen(
                toDetailChat = {
                    navController.navigate(route = HomeGraph.LawyerChatDetail.route)
                }
            )
        }
        composable(route = HomeGraph.DetailLawyer.route){
            PengacaraProfileScreen(
                navigateBack = {
                    navController.navigateUp()
                }
            )
        }
        composable(route = HomeGraph.LawyerChatDetail.route){
            ChatLawyerScreen(
                navigateBack = {
                    navController.navigateUp()
                }
            )
        }
        composable(HomeGraph.ChatKim.route){
            ChatKimScreen(
                navigateBack = {
                    navController.navigateUp()
                }
            )
        }
        composable(HomeGraph.EditProfile.route){
            EditProfileScreen(
                navigateBack = {
                    navController.navigateUp()
                },
                onSaveClick = {
                    
                }
            )
        }
    }
}


sealed class HomeGraph(val route: String) {
    object Home: HomeGraph("home")
    
    object Profile: HomeGraph("profile")
    
    object Setting: HomeGraph("setting")
    
    object DetailLawyer: HomeGraph("detail_lawyer")
    
    object DetailLaw: HomeGraph("detail_law")
    
    object LawyerChatDetail: HomeGraph("lawyer_chat_detail")
    
    object ChatKim: HomeGraph("chat_kim")
    
    object LawClassification: HomeGraph("classification")
    
    object EditProfile: HomeGraph("edit_profile")
    
}