package com.nakama.capstone.linkdlaw.screen.pesan

import androidx.compose.foundation.Image
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.layout.ContentScale
import androidx.compose.ui.res.painterResource
import androidx.compose.ui.text.TextStyle
import androidx.compose.ui.text.font.Font
import androidx.compose.ui.text.font.FontFamily
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import com.nakama.capstone.linkdlaw.R
import com.nakama.capstone.linkdlaw.ui.theme.Poppins

@Composable
fun PesanScreen() {
    PesanContent()
}

@Composable
fun PesanContent(

){
    Column(
        modifier = Modifier
            .padding(vertical = 18.dp, horizontal = 22.dp),
        horizontalAlignment = Alignment.CenterHorizontally
    ) {
        Text(
            modifier = Modifier.align(Alignment.Start),
            text = "Pesan",
            style = TextStyle(
                fontSize = 20.sp,
                fontFamily = Poppins,
                fontWeight = FontWeight.Bold,
                color = Color(0xFF242B32),
            )
        )
        Spacer(modifier = Modifier.height(25.dp))
        Row(
            modifier = Modifier
                .fillMaxWidth(),
            verticalAlignment = Alignment.CenterVertically,
        ) {
            Image(
                painter = painterResource(id = R.drawable.brock_lesnar),
                contentDescription = "Brock Lesnar",
                contentScale = ContentScale.Crop,
                modifier = Modifier
                    .size(75.dp)
                    .clip(CircleShape)
            )
            Column(
                modifier = Modifier
                    .padding(12.dp),
                verticalArrangement = Arrangement.Center
            ) {
                Text(
                    text = "Brock Lesnar",
                    style = TextStyle(
                        fontSize = 16.sp,
                        fontFamily = FontFamily(Font(R.font.poppins_medium)),
                        color = Color(0xFF242B32),
                    )
                )
                Text(
                    text = "Pengacara Spesialis Kriminalis Korea",
                    style = TextStyle(
                        fontSize = 12.sp,
                        fontFamily = FontFamily(Font(R.font.poppins_light)),
                        color = Color(0xFF242B32),
                    )
                )
                Text(
                    text = "13.15",
                    style = TextStyle(
                        fontSize = 10.sp,
                        fontFamily = FontFamily(Font(R.font.poppins_medium)),
                        color = Color(0xFF242B32),
                    )
                )
            }
        }
        Spacer(modifier = Modifier.height(20.dp))
        Row(
            modifier = Modifier
                .fillMaxWidth(),
            verticalAlignment = Alignment.CenterVertically,
        ) {
            Image(
                painter = painterResource(id = R.drawable.brock_lesnar),
                contentDescription = "Brock Lesnar",
                contentScale = ContentScale.Crop,
                modifier = Modifier
                    .size(75.dp)
                    .clip(CircleShape)
            )
            Column(
                modifier = Modifier
                    .padding(12.dp),
                verticalArrangement = Arrangement.Center
            ) {
                Text(
                    text = "Brock Lesnar",
                    style = TextStyle(
                        fontSize = 16.sp,
                        fontFamily = FontFamily(Font(R.font.poppins_medium)),
                        color = Color(0xFF242B32),
                    )
                )
                Text(
                    text = "Pengacara Spesialis Kriminalis Korea",
                    style = TextStyle(
                        fontSize = 12.sp,
                        fontFamily = FontFamily(Font(R.font.poppins_light)),
                        color = Color(0xFF242B32),
                    )
                )
                Text(
                    text = "13.15",
                    style = TextStyle(
                        fontSize = 10.sp,
                        fontFamily = FontFamily(Font(R.font.poppins_medium)),
                        color = Color(0xFF242B32),
                    )
                )
            }
        }
    }
}

@Preview(
    showSystemUi = true,
    showBackground = true
)
@Composable
fun PesanScreenPreview(){
    PesanScreen()
}