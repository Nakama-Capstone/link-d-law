package com.nakama.capstone.linkdlaw.screen.auth.register

import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.width
import androidx.compose.foundation.shape.CornerSize
import androidx.compose.material3.Button
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import androidx.navigation.NavController
import androidx.navigation.compose.rememberNavController
import com.nakama.capstone.linkdlaw.screen.auth.components.TextField
import com.nakama.capstone.linkdlaw.screen.auth.login.AppIcon

@Composable
fun RegisterScreen(
    navController: NavController
) {
    RegisterContent(navController = navController, modifier = Modifier)
}

@Composable
fun RegisterContent(
    navController: NavController,
    modifier: Modifier
) {
    Box(modifier = modifier.fillMaxSize(), contentAlignment = Alignment.TopCenter){
        Column(horizontalAlignment = Alignment.CenterHorizontally) {
            Spacer(modifier = modifier.height(50.dp))
            Text(
                text = "Link D Law",
                style = MaterialTheme.typography.headlineMedium,
                fontWeight = FontWeight.Bold
            )
            AppIcon(
                modifier
            )
            Spacer(modifier = Modifier.height(50.dp))
            Text(text = "Register", fontWeight = FontWeight.Bold, fontSize = 24.sp)
            TextField(label = "Name", text = "", modifier = Modifier.padding(top = 8.dp))
            TextField(label = "Email", text = "")
            TextField(label = "Password", text = "")
            Button(
                onClick = {
                    navController.navigateUp()
                },
                modifier = Modifier
                    .width(300.dp)
                    .padding(8.dp),
                shape = MaterialTheme.shapes.medium.copy(all = CornerSize(10.dp))
            ) {
                Text(text = "Register")
            }
        }
    }
}

@Preview(
    showBackground = true,
    showSystemUi = true
)
@Composable
fun RegisterContentPreview() {
    RegisterContent( rememberNavController(),modifier = Modifier)
}