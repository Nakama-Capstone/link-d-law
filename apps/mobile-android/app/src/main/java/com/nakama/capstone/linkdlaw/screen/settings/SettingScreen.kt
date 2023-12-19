package com.nakama.capstone.linkdlaw.screen.settings

import android.content.Context
import android.widget.Toast
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.padding
import androidx.compose.material3.ExperimentalMaterial3Api
import androidx.compose.material3.Text
import androidx.compose.material3.TopAppBar
import androidx.compose.material3.TopAppBarDefaults
import androidx.compose.runtime.Composable
import androidx.compose.runtime.State
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.res.painterResource
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import com.dicoding.sampleui.components.SettingSection
import com.nakama.capstone.linkdlaw.R
import com.nakama.capstone.linkdlaw.remote.dto.ProfileData

@Composable
fun SettingScreen(
    profileData: State<ProfileData?>,
    logoutClick: () -> Unit,
    onProfileClick: () -> Unit,
    getProfileData: () -> Unit
) {
    getProfileData()
    SettingScreenContent(
        profileData = profileData,
        logoutClick = logoutClick,
        onProfileClick = onProfileClick
    )
}

@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun SettingScreenContent(
    profileData: State<ProfileData?>,
    logoutClick: () -> Unit,
    onProfileClick: () -> Unit,
    modifier: Modifier = Modifier
) {
    val context = LocalContext.current
    
    Column(
        horizontalAlignment = Alignment.CenterHorizontally
    ) {
        TopAppBar(
            title = { Text(text = "Settings", color = Color.White) },
            colors = TopAppBarDefaults.topAppBarColors(containerColor = Color(0xFF011429))
        )
        Spacer(modifier = modifier.padding(vertical = 12.dp))
        Text(
            text = "Account",
            fontSize = 24.sp,
            modifier = Modifier
                .padding(horizontal = 16.dp)
                .align(Alignment.Start)
        )
        SettingSection(
            icon = painterResource(id = R.drawable.profile),
            head = profileData.value?.firstName + " " + profileData.value?.lastName,
            body = "Detail Profil",
            modifier = modifier.padding(vertical = 4.dp),
            onClick = onProfileClick
        )
        Spacer(modifier = modifier.padding(vertical = 12.dp))
        Text(
            text = "Preferences",
            fontSize = 24.sp,
            modifier = Modifier
                .padding(horizontal = 16.dp)
                .align(Alignment.Start)
        )

        SettingSection(
            icon = painterResource(id = R.drawable.ic_globe),
            head = "Bahasa",
            body = "Ubah bahasa aplikasi",
            modifier = modifier
                .padding(vertical = 4.dp)
                .clickable { showToast(context) }
        )
        SettingSection(
            icon = painterResource(id = R.drawable.ic_payment),
            head = "Opsi Pembayaran",
            body = "Ubah opsi pembayaran",
            modifier = modifier
                .padding(vertical = 4.dp)
                .clickable { showToast(context) }
        )
        SettingSection(
            icon = painterResource(id = R.drawable.ic_question),
            head = "Bantuan",
            body = "Melihat bantuan terkait aplikasi",
            modifier = modifier
                .padding(vertical = 4.dp)
                .clickable { showToast(context) }
        )
        SettingSection(
            icon = painterResource(id = R.drawable.ic_about),
            head = "Tentang",
            body = "Melihat detail tentang aplikasi",
            modifier = modifier
                .padding(vertical = 4.dp)
                .clickable { showToast(context) }
        )
        SettingSection(
            icon = painterResource(id = R.drawable.ic_signout),
            head = "Logout",
            body = "Keluar dari aplikasi",
            modifier = modifier.padding(vertical = 4.dp),
            onClick = logoutClick
        )
        
    }
}

private fun showToast(context: Context){
    Toast.makeText(context, "Coming soon", Toast.LENGTH_SHORT).show()
}

@Preview(
    showBackground = true,
    showSystemUi = true
)
@Composable
fun SettingScreenPreview() {
    var profileData: State<ProfileData?> = remember {
        mutableStateOf(ProfileData())
    }
    SettingScreenContent(profileData = profileData,{}, {})
}