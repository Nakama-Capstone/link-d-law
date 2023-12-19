package com.nakama.capstone.linkdlaw.screen.profile

import androidx.compose.foundation.Image
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.layout.wrapContentHeight
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.ArrowBack
import androidx.compose.material3.AlertDialog
import androidx.compose.material3.Button
import androidx.compose.material3.ButtonDefaults
import androidx.compose.material3.ExperimentalMaterial3Api
import androidx.compose.material3.Icon
import androidx.compose.material3.IconButton
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.OutlinedTextField
import androidx.compose.material3.Text
import androidx.compose.material3.TopAppBar
import androidx.compose.runtime.Composable
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.State
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.res.painterResource
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import com.nakama.capstone.linkdlaw.R
import com.nakama.capstone.linkdlaw.remote.dto.ProfileData
import com.nakama.capstone.linkdlaw.remote.dto.UpdateProfileRequest

@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun EditProfileScreen(
    profileData: State<ProfileData?>,
    navigateBack: () -> Unit,
    onSaveClick: (UpdateProfileRequest) -> Unit,
    getProfileData: () -> Unit,
    editResult: Boolean
) {
    getProfileData()

    var showDialog by remember { mutableStateOf(false) }
    var operationSuccessful by remember { mutableStateOf(false) }
    
    var firstName = remember {
        mutableStateOf("")
    }

    var lastName = remember {
        mutableStateOf("")
    }

    var email = remember {
        mutableStateOf("")
    }
    
    LaunchedEffect(profileData.value){
        firstName.value = profileData.value?.firstName ?: ""
        lastName.value = profileData.value?.lastName ?: ""
        email.value = profileData.value?.email ?: ""
    }
    
    LaunchedEffect(editResult){
        operationSuccessful = editResult
    }
    
    Column {
        TopAppBar(
            title = { Text(text = "Ubah Profil") },
            navigationIcon = {
                IconButton(onClick = {
                    navigateBack()
                }) {
                    Icon(
                        imageVector = Icons.Default.ArrowBack,
                        contentDescription = null,
                        modifier = Modifier.padding(horizontal = 8.dp)
                    )
                }
            }
        )
        Box(
            contentAlignment = Alignment.Center, modifier = Modifier
                .fillMaxWidth()
                .height(100.dp)
        ) {
            Text(text = "Foto Profil", modifier = Modifier.align(Alignment.TopCenter))
            Image(
                painter = painterResource(id = R.drawable.profile),
                contentDescription = null,
                modifier = Modifier
                    .size(60.dp)
                    .clip(CircleShape)
            )
        }
        Box {
            Column(
                modifier = Modifier.padding(horizontal = 8.dp)
            ) {

                OutlinedTextField(
                    value = firstName.value,
                    onValueChange = { firstName.value = it },
                    label = { Text(text = "Nama Depan") },
                    modifier = Modifier
                        .fillMaxWidth()
                        .padding(horizontal = 16.dp)
                )
                Spacer(modifier = Modifier.height(8.dp))

                OutlinedTextField(
                    value = lastName.value,
                    onValueChange = { lastName.value = it },
                    label = { Text(text = "Nama Belakang") },
                    modifier = Modifier
                        .fillMaxWidth()
                        .padding(horizontal = 16.dp)
                )
                Spacer(modifier = Modifier.height(8.dp))

                OutlinedTextField(
                    value = email.value,
                    onValueChange = { email.value = it },
                    label = { Text(text = "Email") },
                    modifier = Modifier
                        .fillMaxWidth()
                        .padding(horizontal = 16.dp)
                )
            }
        }
        Box(modifier = Modifier.fillMaxSize(), contentAlignment = Alignment.BottomCenter) {
            Button(
                onClick = {
                    onSaveClick(
                        UpdateProfileRequest(firstName.value, lastName.value, email.value)
                        
                    )
                    showDialog = true
                },
                modifier = Modifier
                    .fillMaxWidth()
                    .wrapContentHeight()
                    .padding(16.dp),
                shape = RoundedCornerShape(8.dp),
                colors = ButtonDefaults.buttonColors(
                    containerColor = MaterialTheme.colorScheme.primary,
                    contentColor = Color.White
                )
            ) {
                Text(text = "Simpan", fontSize = 16.sp)
            }
        }
    }

    if (showDialog) {
        AlertDialog(
            onDismissRequest = { showDialog = false },
            title = {
                Text(
                    text = if (operationSuccessful) "Berhasil" else "Gagal"
                )
            },
            text = {
                // Tambahkan animasi atau gambar untuk sukses/gagal
                if (operationSuccessful) {
                    // Tampilkan animasi sukses atau gambar
                    // Anda dapat menggunakan LottieAnimation di sini
                    Text("Operasi berhasil!")
                } else {
                    // Tampilkan animasi gagal atau gambar
                    // Anda dapat menggunakan LottieAnimation di sini
                    Text("Operasi gagal, coba lagi.")
                }
            },
            confirmButton = {
                Button(
                    onClick = {
                        showDialog = false
                        if (operationSuccessful) {
                            // Lakukan sesuatu jika berhasil, misal kembali ke layar sebelumnya
                            navigateBack()
                        }
                    }
                ) {
                    Text("OK")
                }
            }
        )
    }
}

@Composable
fun SaveButtonWithConfirmationDialog(
    show: Boolean,
    editResult: Boolean
) {
    var showDialog by remember { mutableStateOf(show) }
    var operationSuccessful by remember { mutableStateOf(editResult) }
    val context = LocalContext.current

    
}

@Preview(
    showSystemUi = true,
    showBackground = true
)
@Composable
fun DetailProfilePreview() {
    val test = remember {
        mutableStateOf(ProfileData())
    }
    EditProfileScreen(test,
        {}, {}, {},false
    )
}