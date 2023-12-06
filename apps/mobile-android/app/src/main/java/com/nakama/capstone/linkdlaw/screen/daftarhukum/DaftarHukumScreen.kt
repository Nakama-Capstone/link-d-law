package com.nakama.capstone.linkdlaw.screen.daftarhukum

import androidx.compose.foundation.Image
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.layout.width
import androidx.compose.material3.Icon
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
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
fun DaftarhukumScreen() {
    DaftarHukumContent()
}

@Composable
fun DaftarHukumContent(

){
    Column(
        modifier = Modifier
            .padding(20.dp)
    ) {
        Row(
            modifier = Modifier
                .fillMaxWidth(),
            horizontalArrangement = Arrangement.SpaceBetween,
            verticalAlignment = Alignment.CenterVertically
        ) {
            Text(
                text = "Daftar Hukum",
                style = TextStyle(
                    fontSize = 20.sp,
                    fontFamily = Poppins,
                    fontWeight = FontWeight.Bold,
                    color = Color(0xFF242B32),
                )
            )
            Icon(
                painter = painterResource(id = R.drawable.ic_search),
                contentDescription = "Search",
                tint = Color.DarkGray,
                modifier = Modifier
                    .size(24.dp)
                    .clickable { }
            )
        }
        Spacer(modifier = Modifier.height(25.dp))
        Row(
            modifier = Modifier
                .fillMaxWidth(),
            verticalAlignment = Alignment.Top,
        ) {
            Image(
                painter = painterResource(id = R.drawable.uud_1945),
                contentDescription = "UUD 1945",
                contentScale = ContentScale.Crop,
                modifier = Modifier
                    .width(69.dp)
                    .height(69.dp)
            )
            Column(
                modifier = Modifier
                    .padding(horizontal = 12.dp),
                verticalArrangement = Arrangement.Center
            ) {
                Text(
                    text = "UUD 1945",
                    style = TextStyle(
                        fontSize = 16.sp,
                        fontFamily = FontFamily(Font(R.font.poppins_medium)),
                        color = Color(0xFF242B32),
                    )
                )
                Text(
                    text = "Undang - Undang Dasar Republik indonesia 1945",
                    style = TextStyle(
                        fontSize = 12.sp,
                        fontFamily = FontFamily(Font(R.font.poppins_light)),
                        color = Color(0xFF242B32),
                    )
                )
                Text(
                    text = "34 Pasal",
                    style = TextStyle(
                        fontSize = 10.sp,
                        fontFamily = FontFamily(Font(R.font.poppins_medium)),
                        color = Color(0xFF242B32),
                    )
                )
            }
        }
        Spacer(modifier = Modifier.height(25.dp))
        Row(
            modifier = Modifier
                .fillMaxWidth(),
            verticalAlignment = Alignment.Top,
        ) {
            Image(
                painter = painterResource(id = R.drawable.kuh_perdata),
                contentDescription = "UUD 1945",
                contentScale = ContentScale.Crop,
                modifier = Modifier
                    .width(69.dp)
                    .height(69.dp)
            )
            Column(
                modifier = Modifier
                    .padding(horizontal = 12.dp),
                verticalArrangement = Arrangement.Center
            ) {
                Text(
                    text = "KUH PERDATA",
                    style = TextStyle(
                        fontSize = 16.sp,
                        fontFamily = FontFamily(Font(R.font.poppins_medium)),
                        color = Color(0xFF242B32),
                    )
                )
                Text(
                    text = "Kitab Undang - undang Hukum Perdata",
                    style = TextStyle(
                        fontSize = 12.sp,
                        fontFamily = FontFamily(Font(R.font.poppins_light)),
                        color = Color(0xFF242B32),
                    )
                )
                Text(
                    text = "1993 Pasal",
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
    showBackground = true,
    showSystemUi = true
)
@Composable
fun DaftarHukumScreenPreview(){
    DaftarhukumScreen()
}