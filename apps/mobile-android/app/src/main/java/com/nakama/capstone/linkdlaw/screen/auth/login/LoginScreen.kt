package com.nakama.capstone.linkdlaw.screen.auth.login

import android.util.Log
import androidx.compose.foundation.Image
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.layout.width
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material3.Button
import androidx.compose.material3.ButtonDefaults
import androidx.compose.material3.CircularProgressIndicator
import androidx.compose.material3.ExperimentalMaterial3Api
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.OutlinedTextField
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.getValue
import androidx.compose.runtime.livedata.observeAsState
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.res.painterResource
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import com.nakama.capstone.linkdlaw.R
import com.nakama.capstone.linkdlaw.ui.theme.Poppins
import org.koin.androidx.compose.koinViewModel

@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun LoginScreen(
    onClick: () -> Unit,
    onRegisterClick: () -> Unit
) {
    val loginViewModel:LoginViewModel = koinViewModel()
    val loginState by loginViewModel.loginStatus.observeAsState()
    val loading by loginViewModel.loading.observeAsState()
    
    LoginContent(loginState, loading,loginViewModel::login,onClick, onRegisterClick, modifier = Modifier)
}

@Composable
fun LoginContent(
    loginState: Boolean?,
    loading: Boolean?,
    loginCLick: (String, String) -> Unit,
    onClick: () -> Unit,
    onRegisterClick: () -> Unit,
    modifier: Modifier
) {
    var email by remember {
        mutableStateOf("")
    }
    var password by remember {
        mutableStateOf("")
    }

    Box(
        contentAlignment = Alignment.Center,
        modifier = Modifier.fillMaxSize()
    ) {
        if (loading == true){
            CircularProgressIndicator()
        }
    }
    
    Box(modifier = modifier.fillMaxSize(), contentAlignment = Alignment.TopCenter){
        Column(horizontalAlignment = Alignment.CenterHorizontally) {
            Spacer(modifier = Modifier.height(50.dp))
            Text(
                text = "Link D Law",
                fontSize = 26.sp,
                fontFamily = Poppins,
                fontWeight = FontWeight.Bold
            )
            AppIcon(
                modifier
            )
            Spacer(modifier = Modifier.height(50.dp))
            Text(
                text = "Login",
                fontFamily = Poppins,
                fontWeight = FontWeight.Bold,
                fontSize = 24.sp
            )
            OutlinedTextField(value = email, onValueChange = {email = it}, label = { Text(text = "Email")})
            OutlinedTextField(value = password, onValueChange = {password = it}, label = { Text(text = "Password")})
            Button(
                onClick = {
                    loginCLick(email,password)
                    Log.d("Login", "LoginContent: Clicked")
                },
                enabled = true,
                modifier = Modifier
                    .width(300.dp)
                    .padding(8.dp),
                shape = RoundedCornerShape(8.dp),
                colors = ButtonDefaults.buttonColors(
                    containerColor = Color(0xFF00396B)
                )
            ) {
                Text(text = "Login",fontFamily = Poppins,
                    fontWeight = FontWeight.Bold)
            }
            Text(
                text = "Or",
                fontFamily = Poppins,
                fontWeight = FontWeight.Bold,
                modifier = Modifier.padding(8.dp)
            )
            LoginOption()
            Row(
                modifier = Modifier.padding(4.dp)
            ) {
                Text(text = "Don't have account?", fontSize = 12.sp, fontFamily = Poppins,
                    fontWeight = FontWeight.Bold)
                Text(
                    text = " Register now!",
                    color = MaterialTheme.colorScheme.primary,
                    fontFamily = Poppins,
                    fontWeight = FontWeight.Bold,
                    fontSize = 12.sp,
                    modifier = Modifier.clickable {
                        onRegisterClick()
                    }
                )
            }
            LaunchedEffect(loginState) {
                if (loginState == true) {
                    onClick()
                }
            }
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
    LoginContent(
        loading = false,
        loginState = false,
        loginCLick = { _, _ -> /*TODO*/ },
        onClick = { /*TODO*/ },
        onRegisterClick = { /*TODO*/ },
        modifier = Modifier
    )
}