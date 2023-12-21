package com.nakama.capstone.linkdlaw.navigation.model

import com.nakama.capstone.linkdlaw.R

sealed class BottomBarScreen(
    val route: String,
    val title: String,
    val icon: Int
) {
    object Home: BottomBarScreen(
        route = "HOME",
        title = "Home",
        icon = R.drawable.ic_home
    )

    object Law: BottomBarScreen(
        route = "LAW",
        title = "Law",
        icon = R.drawable.ic_laws
    )

    object Lawyer: BottomBarScreen(
        route = "LAWYER",
        title = "Lawyer",
        icon = R.drawable.ic_lawyer
    )

    object Chat: BottomBarScreen(
        route = "CHAT",
        title = "Chat",
        icon = R.drawable.ic_chat
    )

    object Forum: BottomBarScreen(
        route = "FORUM",
        title = "Forum",
        icon = R.drawable.ic_forum
    )
}
