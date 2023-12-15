package com.nakama.capstone.linkdlaw

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.tooling.preview.Preview
import androidx.navigation.compose.rememberNavController
import com.nakama.capstone.linkdlaw.navigation.navgraph.RootNavGraph
import com.nakama.capstone.linkdlaw.ui.theme.LinkDLawTheme

class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContent {
            LinkDLawTheme {
                // A surface container using the 'background' color from the theme
//                Surface(
//                    modifier = Modifier.fillMaxSize(),
//                    color = MaterialTheme.colorScheme.background
//                ) {
//                    Greeting("Android")
//                }
                RootNavGraph(navController = rememberNavController())
            }
        }
    }
}

@Composable
fun Greeting(name: String, modifier: Modifier = Modifier) {
    Text(
        text = "Hello $name!",
        modifier = modifier
    )
}

@Preview(showBackground = true)
@Composable
fun GreetingPreview() {
    LinkDLawTheme {
        Greeting("Android")
    }
}