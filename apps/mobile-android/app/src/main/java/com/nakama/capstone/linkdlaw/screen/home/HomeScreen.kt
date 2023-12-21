package com.nakama.capstone.linkdlaw.screen.home

import android.widget.Toast
import androidx.compose.foundation.Image
import androidx.compose.foundation.background
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.PaddingValues
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.RowScope
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.lazy.LazyRow
import androidx.compose.foundation.lazy.items
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material.BottomNavigation
import androidx.compose.material.BottomNavigationItem
import androidx.compose.material.OutlinedTextField
import androidx.compose.material.TextFieldDefaults
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.AccountCircle
import androidx.compose.material.icons.filled.Search
import androidx.compose.material3.ElevatedCard
import androidx.compose.material3.ExperimentalMaterial3Api
import androidx.compose.material3.Icon
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Scaffold
import androidx.compose.material3.SearchBar
import androidx.compose.material3.SearchBarDefaults
import androidx.compose.material3.Text
import androidx.compose.material3.TopAppBar
import androidx.compose.material3.TopAppBarDefaults
import androidx.compose.runtime.Composable
import androidx.compose.runtime.State
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Brush
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.res.painterResource
import androidx.compose.ui.text.TextStyle
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.tooling.preview.Devices
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import androidx.constraintlayout.compose.ConstraintLayout
import androidx.navigation.NavController
import androidx.navigation.NavDestination
import androidx.navigation.NavDestination.Companion.hierarchy
import androidx.navigation.NavGraph.Companion.findStartDestination
import androidx.navigation.NavHostController
import androidx.navigation.compose.currentBackStackEntryAsState
import androidx.navigation.compose.rememberNavController
import com.dicoding.sampleui.components.HomeSection
import com.nakama.capstone.linkdlaw.R
import com.nakama.capstone.linkdlaw.navigation.model.BottomBarScreen
import com.nakama.capstone.linkdlaw.navigation.navgraph.HomeNavGraph
import com.nakama.capstone.linkdlaw.remote.dto.GetTanyakimResponse
import com.nakama.capstone.linkdlaw.screen.components.SearchBar
import com.nakama.capstone.linkdlaw.ui.theme.LinkDLawTheme
import com.nakama.capstone.linkdlaw.ui.theme.Poppins

@Composable
fun HomeScreen(
    rootNavController: NavController,
    navController: NavHostController = rememberNavController()
) {
    Scaffold(
        bottomBar = {
            BottomBar(navController = navController)
        }
    ) {
        Box(
            modifier = Modifier
                .fillMaxSize()
                .padding(it)
        ) {
            HomeNavGraph(rootNavController, navController = navController)
        }
    }
}

@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun TopBar(
    onSearch: () -> Unit,
    onClick: () -> Unit,
    modifier: Modifier = Modifier
) {
    TopAppBar(
        title =
        {
            SearchBar("Cari hukum, pengacara ...", modifier = modifier)
        },
        actions = {
            Box(
                modifier
                    .size(40.dp)
                    .clickable {
                        onClick()
                    },
                contentAlignment = Alignment.Center
            ) {
                Icon(
                    imageVector = Icons.Default.AccountCircle,
                    contentDescription = null,
                    modifier.fillMaxSize()
                )
            }
        },
        colors = TopAppBarDefaults.centerAlignedTopAppBarColors(
            containerColor = MaterialTheme.colorScheme.background
        )
    )
}

@Composable
fun BottomBar(navController: NavHostController) {
    val screens = listOf(
        BottomBarScreen.Home,
        BottomBarScreen.Law,
        BottomBarScreen.Lawyer,
        BottomBarScreen.Chat,
    )

    val navBackStackEntry by navController.currentBackStackEntryAsState()
    val currentDestination = navBackStackEntry?.destination

    val bottomDestination = screens.any { it.route == currentDestination?.route }
    if (bottomDestination) {
        BottomNavigation {
            screens.forEach { screen ->
                AddItem(
                    screen = screen,
                    currentDestination = currentDestination,
                    navController = navController
                )
            }
        }
    }

}

@Composable
fun RowScope.AddItem(
    screen: BottomBarScreen,
    currentDestination: NavDestination?,
    navController: NavHostController
) {
    val navBackStackEntry by navController.currentBackStackEntryAsState()
    val currentRoute = navBackStackEntry?.destination?.route

    BottomNavigationItem(
        icon = {
            Icon(
                painter = painterResource(id = screen.icon),
                contentDescription = screen.title,
                tint = if (currentRoute == screen.route) {
                    MaterialTheme.colorScheme.primary
                } else {
                    Color.Gray
                }
            )
        },
        onClick = {
            navController.navigate(screen.route) {
                popUpTo(navController.graph.findStartDestination().id)
                launchSingleTop = true
            }
        },
        selected = currentDestination?.hierarchy?.any {
            it.route == screen.route
        } == true,
        modifier = Modifier.background(MaterialTheme.colorScheme.background),
        selectedContentColor = MaterialTheme.colorScheme.primary,
    )
}

@Composable
fun HomeContent(
    item: List<String>,
    onSearch: () -> Unit,
    tanyakimResult: State<GetTanyakimResponse?>,
    sendTanyaKim: (String) -> Unit,
    onClick: () -> Unit,
    toChatKimScreen: () -> Unit,
    toClassificationScreen: () -> Unit,
    modifier: Modifier = Modifier
) {
    Column {
        val context = LocalContext.current

        TopBar(
            onSearch,
            onClick
        )
        

        CardWithConstraint(
            toChatKimScreen = toChatKimScreen,
            sendTanyaKim = sendTanyaKim
        )

        HomeSection(
            title = "Fitur Kim",
            modifier = modifier
        ) {
            Row(
                horizontalArrangement = Arrangement.SpaceEvenly,
                modifier = Modifier.fillMaxWidth()
            ) {
                Column(
                    horizontalAlignment = Alignment.CenterHorizontally,
                    modifier = Modifier.clickable {
                        toClassificationScreen()
                    }
                ) {
                    Image(
                        painter = painterResource(id = R.drawable.img_classified_law),
                        contentDescription = null,
                        modifier = Modifier
                            .padding(5.dp)
                            .size(70.dp)
                    )
                    Text(
                        text = "Klasifikasi Hukum", fontFamily = Poppins,
                        fontWeight = FontWeight.Bold
                    )
                }
                Column(
                    horizontalAlignment = Alignment.CenterHorizontally,
                    modifier = Modifier.clickable {
                        Toast.makeText(context, "Coming soon", Toast.LENGTH_SHORT).show()
                    }
                ) {
                    Image(
                        painter = painterResource(id = R.drawable.img_coming_soon),
                        contentDescription = null,
                        modifier = Modifier
                            .padding(10.dp)
                            .size(60.dp)
                    )
                    Text(
                        text = "Coming soon", fontFamily = Poppins,
                        fontWeight = FontWeight.Bold
                    )
                }
            }
        }

        HomeSection(
            title = "Top Pengacara",
            modifier = modifier
        ) {
            LazyRow(
                contentPadding = PaddingValues(10.dp),
                horizontalArrangement = Arrangement.spacedBy(8.dp)
            ) {
                items(item) {
                    HomeListItem(
                        text = it,
                        modifier = modifier
                    )
                }
            }
        }
    }
}

@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun Search(
    query: String,
    modifier: Modifier = Modifier
) {
    SearchBar(
        query = query,
        onQueryChange = {},
        onSearch = {},
        active = false,
        onActiveChange = {},
        leadingIcon = {
            Icon(
                imageVector = Icons.Default.Search, contentDescription = null,
                tint = MaterialTheme.colorScheme.onSurfaceVariant
            )
        },
        placeholder = {
            Text("Cari hukum, pengacara ...", color = Color.Black)
        },
        shape = MaterialTheme.shapes.large,
        colors = SearchBarDefaults.colors(
            containerColor = MaterialTheme.colorScheme.background
        ),
        modifier = modifier
            .padding(end = 8.dp)
    ) {

    }

}

@Composable
fun HomeListItem(text: String, modifier: Modifier) {
    ElevatedCard {
        Box(
            modifier = modifier
                .size(100.dp),
            contentAlignment = Alignment.Center
        ) {
            Text(text = text)
        }
    }
}

@Composable
fun CardWithConstraint(
    toChatKimScreen: () -> Unit,
    sendTanyaKim: (String) -> Unit
) {
    val query = remember {
        mutableStateOf("")
    }
    
    Box(
        modifier = Modifier
            .padding(8.dp)
            .background(
                shape = RoundedCornerShape(10.dp),
                brush = Brush.linearGradient(listOf(Color(0xFF0B5DA6), Color(0xFF3979B1)))
            )
            .fillMaxWidth()
            .height(240.dp)
    ) {
        ConstraintLayout(
            modifier = Modifier.fillMaxSize()
        ) {
            val (image, header, body, textField, button) = createRefs()

            Image(
                painter = painterResource(id = R.drawable.img_ask),
                contentDescription = null,
                modifier = Modifier
                    .constrainAs(image) {
                        top.linkTo(parent.top, margin = 8.dp)
                        start.linkTo(parent.start, margin = 16.dp)
                    }
            )

            Text(
                text = "Tanya Dong\n Bang K!m",
                color = MaterialTheme.colorScheme.onPrimary,
                fontSize = MaterialTheme.typography.headlineMedium.fontSize,
                fontWeight = FontWeight.Bold,
                modifier = Modifier
                    .constrainAs(header) {
                        top.linkTo(parent.top, margin = 16.dp)
                        end.linkTo(parent.end, margin = 16.dp)
                    },
                textAlign = TextAlign.Right
            )
            Text(
                text = "Ceritakan masalahmu kami\n akan berikan pasal yang\n berhubungan",
                fontSize = 13.sp,
                style = TextStyle(
                    lineHeight = 20.sp
                ),
                color = MaterialTheme.colorScheme.onPrimary,
                textAlign = TextAlign.Right,
                modifier = Modifier
                    .constrainAs(body) {
                        top.linkTo(header.bottom, margin = 4.dp)
                        end.linkTo(parent.end, margin = 16.dp)
                    },
                maxLines = 3
            )

            OutlinedTextField(
                value = query.value,
                onValueChange = { query.value = it },
                modifier = Modifier.constrainAs(textField) {
                    top.linkTo(image.bottom, margin = 8.dp)
                    start.linkTo(parent.start, margin = 16.dp)
                },
                colors = TextFieldDefaults.outlinedTextFieldColors(
                    backgroundColor = Color.White,
                    unfocusedBorderColor = Color.Gray, // Warna border saat tidak fokus
                    focusedBorderColor = MaterialTheme.colorScheme.primary, // Warna border saat fokus

                ),
                label = {
                    Text(
                        text = "Ceritakan masalahmu"
                    )
                }
            )

            Box(
                modifier = Modifier
                    .size(50.dp)
                    .background(shape = RoundedCornerShape(10.dp), color = Color(0xFF001D36))
                    .clickable {
                        if (query.value != ""){
                            sendTanyaKim(query.value)
                            toChatKimScreen()
                        }else{
                            toChatKimScreen()
                        }
                    }
                    .constrainAs(button) {
                        top.linkTo(textField.top, margin = 0.dp)
                        start.linkTo(textField.end, margin = 8.dp)
                        end.linkTo(parent.end, margin = 8.dp)
                        bottom.linkTo(textField.bottom, margin = 0.dp)
                    },
                contentAlignment = Alignment.Center
            ) {
                Icon(
                    painter = painterResource(id = R.drawable.ic_arrow),
                    contentDescription = null,
                    tint = Color.White,
                    modifier = Modifier.size(26.dp)
                )
            }


        }
    }
}

@Preview(
    showBackground = true
)
@Composable
fun HomeItemPreview() {
    HomeListItem(text = "text", modifier = Modifier)
}

@Preview(showBackground = true, device = Devices.PIXEL_4, showSystemUi = true)
@Composable
fun GreetingPreview() {
    val data = remember {
        mutableStateOf(GetTanyakimResponse())
    }
    LinkDLawTheme {
        HomeContent(item = listOf("text1", "text2", "text3"),{}, data,{}, {}, {}, {})
    }
}