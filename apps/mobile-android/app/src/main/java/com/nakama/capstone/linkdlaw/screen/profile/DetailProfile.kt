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
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.ArrowBack
import androidx.compose.material3.Button
import androidx.compose.material3.ExperimentalMaterial3Api
import androidx.compose.material3.Icon
import androidx.compose.material3.OutlinedTextField
import androidx.compose.material3.Text
import androidx.compose.material3.TopAppBar
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.res.painterResource
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import com.nakama.capstone.linkdlaw.R

@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun DetailProfile() {
    Column {
        TopAppBar(
            title = { Text(text = "Ubah Profil") },
            navigationIcon = {
                Icon(
                    imageVector = Icons.Default.ArrowBack,
                    contentDescription = null,
                    modifier = Modifier.padding(horizontal = 8.dp)
                )
            }
        )
        Box(contentAlignment = Alignment.Center, modifier = Modifier
            .fillMaxWidth()
            .height(100.dp)) {
            Text(text = "Foto Profil", modifier = Modifier.align(Alignment.TopCenter))
            Image(painter = painterResource(id = R.drawable.img_preview), contentDescription = null, modifier = Modifier.size(60.dp))
        }
        Box{
            Column(
                modifier = Modifier.padding(horizontal = 8.dp)
            ) {
                Text(text = "Name", fontSize = 16.sp, fontWeight = FontWeight.Bold, modifier = Modifier.padding(horizontal = 16.dp))
                OutlinedTextField(value = "", onValueChange = {}, modifier = Modifier
                    .fillMaxWidth()
                    .padding(horizontal = 16.dp))
                Spacer(modifier = Modifier.padding(vertical = 8.dp))
                Text(text = "Email", fontSize = 16.sp, fontWeight = FontWeight.Bold, modifier = Modifier.padding(horizontal = 16.dp))
                OutlinedTextField(value = "", onValueChange = {}, modifier = Modifier
                    .fillMaxWidth()
                    .padding(horizontal = 16.dp))
                Spacer(modifier = Modifier.padding(vertical = 8.dp))
                Text(text = "Password", fontSize = 16.sp, fontWeight = FontWeight.Bold, modifier = Modifier.padding(horizontal = 16.dp))
                OutlinedTextField(value = "", onValueChange = {}, modifier = Modifier
                    .fillMaxWidth()
                    .padding(horizontal = 16.dp))
            }
        }
        Box(modifier = Modifier.fillMaxSize(), contentAlignment = Alignment.BottomCenter){
            Button(
                onClick = {

            },
                modifier = Modifier
                    .fillMaxWidth()
                    .wrapContentHeight()
                    .padding(16.dp),
                shape = RoundedCornerShape(8.dp),

            ) {
                Text(text = "Simpan", fontSize = 16.sp)
            }
        }
    }
}

@Preview(
    showSystemUi = true,
    showBackground = true
)
@Composable
fun DetailProfilePreview() {
    DetailProfile()
}