package com.nakama.capstone.linkdlaw.navigation.navgraph

import androidx.compose.runtime.Composable
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.livedata.observeAsState
import androidx.navigation.NavController
import androidx.navigation.NavHostController
import androidx.navigation.NavType
import androidx.navigation.compose.NavHost
import androidx.navigation.compose.composable
import androidx.navigation.navArgument
import androidx.paging.compose.collectAsLazyPagingItems
import com.nakama.capstone.linkdlaw.navigation.model.BottomBarScreen
import com.nakama.capstone.linkdlaw.screen.chat.ChatClassificationScreen
import com.nakama.capstone.linkdlaw.screen.chat.ChatKimScreen
import com.nakama.capstone.linkdlaw.screen.chat.ChatLawyerScreen
import com.nakama.capstone.linkdlaw.screen.chat.ChatViewModel
import com.nakama.capstone.linkdlaw.screen.daftarhukum.DaftarhukumScreen
import com.nakama.capstone.linkdlaw.screen.daftarhukum.LawScreenViewModel
import com.nakama.capstone.linkdlaw.screen.detailhukum.DetailHukumScreen
import com.nakama.capstone.linkdlaw.screen.home.HomeContent
import com.nakama.capstone.linkdlaw.screen.pengacara.PengacaraScreen
import com.nakama.capstone.linkdlaw.screen.pengacara.PengacaraScreenViewModel
import com.nakama.capstone.linkdlaw.screen.pengacaraprofile.PengacaraProfileScreen
import com.nakama.capstone.linkdlaw.screen.pengacaraprofile.PengacaraProfileViewModel
import com.nakama.capstone.linkdlaw.screen.pesan.PesanScreen
import com.nakama.capstone.linkdlaw.screen.pesan.PesanScreenViewModel
import com.nakama.capstone.linkdlaw.screen.profile.EditProfileScreen
import com.nakama.capstone.linkdlaw.screen.profile.EditProfileViewModel
import com.nakama.capstone.linkdlaw.screen.settings.SettingScreen
import com.nakama.capstone.linkdlaw.screen.settings.SettingsViewModel
import org.koin.androidx.compose.koinViewModel

@Composable
fun HomeNavGraph(rootNavController: NavController, navController: NavHostController) {
    NavHost(
        navController = navController,
        route = Graph.HOME,
        startDestination = BottomBarScreen.Home.route
    ) {
        composable(route = BottomBarScreen.Home.route) {
            val chatViewModel: ChatViewModel = koinViewModel()
            
            HomeContent(
                item = listOf("text1", "text2", "text3"),
                onSearch = {},
                onClick = {
                    navController.navigate(HomeGraph.Setting.route)
                },
                toChatKimScreen = {
                    navController.navigate(HomeGraph.ChatKim.route)
                },
                toClassificationScreen = {
                    navController.navigate(HomeGraph.LawClassification.route)
                },
                tanyakimResult = chatViewModel.tanyakimResult.observeAsState(),
                sendTanyaKim = chatViewModel::getTanyakimResult
            )
        }

        composable(route = HomeGraph.LawClassification.route) {
            val chatViewModel: ChatViewModel = koinViewModel()
            val loadingState = chatViewModel.loading.observeAsState()
            val resultState = chatViewModel.predictResult.observeAsState()

            ChatClassificationScreen(
                navigateBack = {
                    navController.navigateUp()
                },
                predictResult = resultState,
                sendMessage = chatViewModel::getPredict,
                loadingState = loadingState
            )
        }

        composable(route = HomeGraph.Setting.route) {
            val settingsViewModel: SettingsViewModel = koinViewModel()
            LaunchedEffect(Unit){
                settingsViewModel.getProfileData()
            }

            SettingScreen(
                logoutClick = {
                    settingsViewModel.logout()
                    rootNavController.popBackStack()
                    rootNavController.navigate(Graph.AUTH)
                },
                onProfileClick = {
                    navController.navigate(HomeGraph.EditProfile.route)
                },
                getProfileData = { settingsViewModel.getProfileData() },
                profileData = settingsViewModel.profileData.observeAsState()
            )
        }

        composable(route = BottomBarScreen.Law.route) {
            val lawScreenViewModel: LawScreenViewModel = koinViewModel()
            
            LaunchedEffect(Unit){
                lawScreenViewModel.getLaws()
            }
            
            val lawsResult = lawScreenViewModel.getLawsResult.observeAsState()
            
            DaftarhukumScreen(
                toLawDetail = {id ->
                    navController.navigate(HomeGraph.DetailLaw.route+"/$id")
                },
                lawsResult = lawsResult.value
            )
        }

        composable(route = HomeGraph.DetailLaw.route + "/{id}") { navBackStackEntry ->
            val lawScreenViewModel: LawScreenViewModel = koinViewModel()
            val id = navBackStackEntry.arguments?.getString("id") ?: "0"
            
            LaunchedEffect(Unit){
                lawScreenViewModel.getPasal(id.toInt())
            }
            
//            val pasalResult = lawScreenViewModel.getPasalResult.observeAsState()
            
            val pasalResult = lawScreenViewModel.lawListDataFlow(id.toInt()).collectAsLazyPagingItems()
            
            DetailHukumScreen(
                navigateBack = {
                    navController.navigateUp()
                },
                pasalResult = pasalResult,
                id = id.toInt()
            )
        }

        composable(route = BottomBarScreen.Lawyer.route) {
            val pengacaraScreenViewModel: PengacaraScreenViewModel = koinViewModel()
            LaunchedEffect(Unit){
                pengacaraScreenViewModel.getLawyers()
            }
//            val listPengacara = pengacaraScreenViewModel.listLawyer.observeAsState()
            val listPengacara = pengacaraScreenViewModel.lawyerDataFlow.collectAsLazyPagingItems()
            
            PengacaraScreen(
                toDetailLawyer = { id ->
                    navController.navigate(route = HomeGraph.DetailLawyer.route+"/$id")
                },
                getLawyers = pengacaraScreenViewModel::getLawyers,
                listPengacara = listPengacara
            )
        }
        composable(route = BottomBarScreen.Chat.route) {
            val pesanScreenViewModel: PesanScreenViewModel = koinViewModel()
            LaunchedEffect(Unit){
                pesanScreenViewModel.getAllChat()
            }
            val getAllChatResult = pesanScreenViewModel.getAllChatResult.observeAsState()

            PesanScreen(
                toDetailChat = { id, user2Id ->
                    navController.navigate(route = HomeGraph.LawyerChatDetail.route + "/$id/$user2Id")
                },
                listChat = getAllChatResult.value?.data
            )
        }
        composable(route = HomeGraph.DetailLawyer.route + "/{id}") {backStackEntry ->
            val pengacaraProfileViewModel: PengacaraProfileViewModel = koinViewModel()
            val pengacaraScreenViewModel: PengacaraScreenViewModel = koinViewModel()
            val loadingState = pengacaraProfileViewModel.loadingState.observeAsState()
            val lawyerDetail = pengacaraScreenViewModel.singleLawyer.observeAsState()
            val createResult = pengacaraProfileViewModel.createChatResponse.observeAsState()
            
            val id = backStackEntry.arguments?.getString("id") ?: "0"
            LaunchedEffect(Unit){
                pengacaraScreenViewModel.getLawyersById(id.toInt())
            }
            
            PengacaraProfileScreen(
                lawyerId = id.toInt(),
                loadingState = loadingState,
                createState = createResult,
                navigateBack = {
                    navController.navigateUp()
                },
                toChatScreen = { chatId, user2Id ->
                    navController.navigate(route = HomeGraph.LawyerChatDetail.route + "/$chatId/$user2Id") {
                        popUpTo(BottomBarScreen.Chat.route)
                    }
                },
                createChat = pengacaraProfileViewModel::createChat,
                getDetailLawyer = pengacaraScreenViewModel::getLawyersById,
                lawyerData = lawyerDetail.value
            )
        }
        composable(
            route = HomeGraph.LawyerChatDetail.route + "/{chatId}/{user2Id}",
            arguments = listOf(
                navArgument("chatId") {
                    type = NavType.StringType
                    defaultValue = ""
                },
                navArgument("user2Id") {
                    type = NavType.StringType
                    defaultValue = ""
                }
            )
        ) { backStackEntry ->
            
            val chatId = backStackEntry.arguments?.getString("chatId")
            val user2Id = backStackEntry.arguments?.getString("user2Id")
            ChatLawyerScreen(
                chatId = chatId?.toInt() ?: 0,
                lawyerId = user2Id?.toInt() ?: 0,
                lawyerName = chatId ?: " ",
                navigateBack = {
                    navController.navigateUp()
                },
                sendMessage = { 
                    
                }
            )
        }
        composable(HomeGraph.ChatKim.route) {
            val chatViewModel: ChatViewModel = koinViewModel()
            val loadingState = chatViewModel.loading.observeAsState()
            val resultState = chatViewModel.tanyakimResult.observeAsState()
            
            ChatKimScreen(
                navigateBack = {
                    navController.navigateUp()
                },
                tanyakimResult = resultState,
                loadingState = loadingState,
                sendMessage = chatViewModel::getTanyakimResult
            )
        }
        composable(HomeGraph.EditProfile.route) {
            val editProfileViewModel: EditProfileViewModel = koinViewModel()
            LaunchedEffect(Unit){   
                editProfileViewModel.getProfileData()
            }
            val profileData = editProfileViewModel.profileData.observeAsState()
            val editResult = editProfileViewModel.editResult.observeAsState()

//            val editResult = editProfileViewModel.editResult.observeAsState()
//            
//            if (editResult.value == true){
//                navController.popBackStack()
//            }

            EditProfileScreen(
                profileData = profileData,
                navigateBack = {
                    navController.navigateUp()
                },
                onSaveClick = editProfileViewModel::updateProfile,
                getProfileData = { editProfileViewModel.getProfileData() },
                editResult = editResult.value ?: false
            )
        }
    }
}


sealed class HomeGraph(val route: String) {
    object Home : HomeGraph("home")

    object Profile : HomeGraph("profile")

    object Setting : HomeGraph("setting")

    object DetailLawyer : HomeGraph("detail_lawyer")

    object DetailLaw : HomeGraph("detail_law")

    object LawyerChatDetail : HomeGraph("lawyer_chat_detail")

    object ChatKim : HomeGraph("chat_kim")

    object LawClassification : HomeGraph("classification")

    object EditProfile : HomeGraph("edit_profile")

}