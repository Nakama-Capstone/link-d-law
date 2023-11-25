package com.nakama.capstone.linkdlaw.screen.auth.login

import androidx.compose.foundation.Image
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.layout.width
import androidx.compose.foundation.shape.CornerSize
import androidx.compose.material3.Button
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.res.painterResource
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import androidx.navigation.NavController
import androidx.navigation.compose.rememberNavController
import com.nakama.capstone.linkdlaw.R
import com.nakama.capstone.linkdlaw.navigation.Screen
import com.nakama.capstone.linkdlaw.screen.auth.components.TextField

@Composable
fun LoginScreen(
    navController: NavController
) {
    LoginContent(navController = navController, modifier = Modifier)
}

@Composable
fun LoginContent(
    navController: NavController,
    modifier: Modifier
) {
    Column(horizontalAlignment = Alignment.CenterHorizontally) {
        Spacer(modifier = Modifier.height(50.dp))
        Text(
            text = "Link D Law",
            style = MaterialTheme.typography.headlineMedium,
            fontWeight = FontWeight.Bold
        )
        AppIcon(
            modifier
        )
        Spacer(modifier = Modifier.height(50.dp))
        Text(text = "Login", fontWeight = FontWeight.Bold, fontSize = 24.sp)
        TextField(label = "Email", text = "")
        TextField(label = "Password", text = "")
        Button(
            onClick = {

            },
            modifier = Modifier
                .width(300.dp)
                .padding(8.dp),
            shape = MaterialTheme.shapes.medium.copy(all = CornerSize(10.dp))
        ) {
            Text(text = "Login")
        }
        Text(text = "Or", modifier = Modifier.padding(8.dp))
        LoginOption()
        Row(
            modifier = Modifier.padding(4.dp)
        ) {
            Text(text = "Don't have account?", fontSize = 12.sp)
            Text(text = " Register now!", color = MaterialTheme.colorScheme.primary, fontSize = 12.sp, modifier = Modifier.clickable {
                navController.navigate(route = Screen.Register.route)
            })
        }
    }
}

@Composable
fun AppIcon(
    modifier: Modifier
) {
    Box(modifier = modifier.size(200.dp), contentAlignment = Alignment.Center) {
        Image(
            painter = painterResource(id = R.drawable.app_image),
            contentDescription = null,
            modifier = Modifier.size(180.dp)
        )
    }
}

@Composable
fun LoginOption() {
    Row {
        Image(
            painter = painterResource(id = R.drawable.ic_google),
            contentDescription = null,
            modifier = Modifier
                .size(50.dp)
                .padding(4.dp)
        )
        Image(
            painter = painterResource(id = R.drawable.ic_facebook),
            contentDescription = null,
            modifier = Modifier
                .size(50.dp)
                .padding(4.dp)
        )
    }
}

@Preview(
    showBackground = true,
    showSystemUi = true
)
@Composable
fun LoginContentPreview() {
    LoginContent(navController = rememberNavController(),modifier = Modifier)
}