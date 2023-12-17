package com.nakama.capstone.linkdlaw.screen.settings

import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.padding
import androidx.compose.material3.ExperimentalMaterial3Api
import androidx.compose.material3.Text
import androidx.compose.material3.TopAppBar
import androidx.compose.material3.TopAppBarDefaults
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.res.painterResource
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import com.dicoding.sampleui.components.SettingSection
import com.nakama.capstone.linkdlaw.R

@Composable
fun SettingScreen() {
    SettingScreenContent()
}

@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun SettingScreenContent(
    modifier: Modifier = Modifier
) {
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
            icon = painterResource(id = R.drawable.img_preview),
            head = "Nama User",
            body = "Detail Profil",
            modifier = modifier.padding(vertical = 4.dp)
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
            modifier = modifier.padding(vertical = 4.dp)
        )
        SettingSection(
            icon = painterResource(id = R.drawable.ic_payment),
            head = "Opsi Pembayaran",
            body = "Ubah opsi pembayaran",
            modifier = modifier.padding(vertical = 4.dp)
        )
        SettingSection(
            icon = painterResource(id = R.drawable.ic_question),
            head = "Bantuan",
            body = "Melihat bantuan terkait aplikasi",
            modifier = modifier.padding(vertical = 4.dp)
        )
        SettingSection(
            icon = painterResource(id = R.drawable.ic_about),
            head = "Tentang",
            body = "Melihat detail tentang aplikasi",
            modifier = modifier.padding(vertical = 4.dp)
        )
        
    }
}

@Preview(
    showBackground = true,
    showSystemUi = true
)
@Composable
fun SettingScreenPreview() {
    SettingScreenContent()
}