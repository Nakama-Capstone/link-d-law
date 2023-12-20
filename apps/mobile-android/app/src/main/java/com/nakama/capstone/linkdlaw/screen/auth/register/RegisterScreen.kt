package com.nakama.capstone.linkdlaw.screen.auth.register


import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.width
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.foundation.text.KeyboardActions
import androidx.compose.foundation.text.KeyboardOptions
import androidx.compose.material3.Button
import androidx.compose.material3.ButtonDefaults
import androidx.compose.material3.CircularProgressIndicator
import androidx.compose.material3.ExperimentalMaterial3Api
import androidx.compose.material3.Icon
import androidx.compose.material3.IconButton
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
import androidx.compose.ui.focus.FocusDirection
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.platform.LocalFocusManager
import androidx.compose.ui.res.painterResource
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.input.ImeAction
import androidx.compose.ui.text.input.KeyboardType
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import androidx.navigation.NavController
import androidx.navigation.compose.rememberNavController
import com.nakama.capstone.linkdlaw.R
import com.nakama.capstone.linkdlaw.remote.dto.RegisterRequest
import com.nakama.capstone.linkdlaw.screen.auth.login.AppIcon
import com.nakama.capstone.linkdlaw.ui.theme.Poppins
import org.koin.androidx.compose.koinViewModel

@OptIn(ExperimentalMaterial3Api::class)

@Composable
fun RegisterScreen(
    navController: NavController
) {
    val registerViewModel: RegisterViewModel = koinViewModel()
    val loading by registerViewModel.loading.observeAsState()
    val registerState by registerViewModel.registerStatus.observeAsState()
    
    RegisterContent( registerViewModel::register, loading, registerState, navController = navController, modifier = Modifier)
}

@Composable
fun RegisterContent(
    onRegisterClick: (RegisterRequest) -> Unit,
    loading: Boolean?,
    registerState: Boolean?,
    navController: NavController,
    modifier: Modifier = Modifier
) {
    var firstName by remember { mutableStateOf("") }
    var lastName by remember { mutableStateOf("") }
    var email by remember { mutableStateOf("") }
    var password by remember { mutableStateOf("") }
    var passwordConfirm by remember { mutableStateOf("") }
    
    var showPassword by remember { mutableStateOf(false) }
    val localFocusManager = LocalFocusManager.current

    Box(
        contentAlignment = Alignment.Center,
        modifier = Modifier.fillMaxSize()
    ) {
        if (loading == true) {
            CircularProgressIndicator()
        }
    }
    
    Box(modifier = modifier.fillMaxSize(), contentAlignment = Alignment.TopCenter) {
        Column(horizontalAlignment = Alignment.CenterHorizontally) {
            Spacer(modifier = modifier.height(50.dp))
            Text(
                text = "Link D Law",
                fontSize = 26.sp,
                fontFamily = Poppins,
                fontWeight = FontWeight.Bold
            )
            AppIcon(
                modifier
            )
            Spacer(modifier = Modifier.height(30.dp))
            Text(
                text = "Register",
                fontFamily = Poppins,
                fontWeight = FontWeight.Bold,
                fontSize = 24.sp
            )
            OutlinedTextField(
                value = firstName,
                onValueChange = { firstName = it },
                label = { Text(text = "First Name") },
                keyboardOptions = KeyboardOptions(
                    imeAction = ImeAction.Done,
                ),
                keyboardActions = KeyboardActions(
                    onDone = {
                        localFocusManager.moveFocus(FocusDirection.Down)
                    }
                ),
                singleLine = true
            )
            OutlinedTextField(
                value = lastName,
                onValueChange = { lastName = it },
                label = { Text(text = "Last Name") },
                keyboardOptions = KeyboardOptions(
                    imeAction = ImeAction.Done,
                ),
                keyboardActions = KeyboardActions(
                    onDone = {
                        localFocusManager.moveFocus(FocusDirection.Down)
                    }
                ),
                singleLine = true
            )
            OutlinedTextField(
                value = email,
                onValueChange = { email = it },
                label = { Text(text = "Email") },
                keyboardOptions = KeyboardOptions(
                    imeAction = ImeAction.Done,
                ),
                keyboardActions = KeyboardActions(
                    onDone = {
                        localFocusManager.moveFocus(FocusDirection.Down)
                    }
                ),
                singleLine = true
            )
            OutlinedTextField(
                value = password,
                onValueChange = { password = it },
                label = { Text(text = "Password") },
                visualTransformation = if (!showPassword) {
                    androidx.compose.ui.text.input.PasswordVisualTransformation()
                } else {
                    androidx.compose.ui.text.input.VisualTransformation.None
                },
                keyboardActions = KeyboardActions(
                    onDone = {
                        localFocusManager.clearFocus()
                    }
                ),
                keyboardOptions = KeyboardOptions(
                    imeAction = ImeAction.Done,
                    keyboardType = KeyboardType.Password
                ),
                trailingIcon = {
                    if (!showPassword) {
                        IconButton(onClick = { showPassword = true }) {
                            Icon(
                                painter = painterResource(id = R.drawable.ic_showed),
                                contentDescription = "hide password"
                            )
                        }
                    } else {
                        IconButton(onClick = { showPassword = false }) {
                            Icon(
                                painter = painterResource(id = R.drawable.ic_hided),
                                contentDescription = "show password"
                            )
                        }
                    }
                },
                singleLine = true
            )
            OutlinedTextField(
                value = passwordConfirm,
                onValueChange = { passwordConfirm = it },
                label = { Text(text = "Confirmation Password") },
                visualTransformation = if (!showPassword) {
                    androidx.compose.ui.text.input.PasswordVisualTransformation()
                } else {
                    androidx.compose.ui.text.input.VisualTransformation.None
                },
                keyboardActions = KeyboardActions(
                    onDone = {
                        localFocusManager.clearFocus()
                    }
                ),
                keyboardOptions = KeyboardOptions(
                    imeAction = ImeAction.Done,
                    keyboardType = KeyboardType.Password
                ),
                trailingIcon = {
                    if (!showPassword) {
                        IconButton(onClick = { showPassword = true }) {
                            Icon(
                                painter = painterResource(id = R.drawable.ic_showed),
                                contentDescription = "hide password"
                            )
                        }
                    } else {
                        IconButton(onClick = { showPassword = false }) {
                            Icon(
                                painter = painterResource(id = R.drawable.ic_hided),
                                contentDescription = "show password"
                            )
                        }
                    }
                },
                singleLine = true
            )
            Button(
                onClick = {
                          onRegisterClick(
                              RegisterRequest(
                                  firstName = firstName,
                                  lastName = lastName,
                                  email = email,
                                  password = password,
                                  passwordConfirmation = passwordConfirm
                              )
                          )
                },
                modifier = Modifier
                    .width(300.dp)
                    .padding(8.dp),
                shape = RoundedCornerShape(8.dp),
                colors = ButtonDefaults.buttonColors(
                    containerColor = Color(0xFF00396B)
                )
            ) {
                Text(text = "Register")
            }
        }
        LaunchedEffect(registerState){
            if(registerState == true){
                navController.navigateUp()
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
    RegisterContent( {}, true, false,rememberNavController(), modifier = Modifier)
}