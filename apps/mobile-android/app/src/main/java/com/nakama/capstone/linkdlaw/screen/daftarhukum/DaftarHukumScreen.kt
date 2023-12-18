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
fun DaftarhukumScreen(
    toLawDetail: () -> Unit
) {
    DaftarHukumContent(
        toLawDetail
    )
}

@Composable
fun DaftarHukumContent(
    toLawDetail: () -> Unit
) {
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
        Spacer(modifier = Modifier.height(16.dp))

        ListHukumItem(
            image = R.drawable.uud_1945,
            title = "UUD 1945",
            body = "Undang-undang Dasar Republik Indonesia 1945",
            count = 34,
            toLawDetail = {
                toLawDetail()
            }
        )
        ListHukumItem(
            image = R.drawable.kuh_perdata,
            title = "KUH PERDATA",
            body = "Kitab Undang-undang Hukum Perdata",
            count = 1993,
            toLawDetail = {
                toLawDetail()
            }
        )

    }
}

@Composable
fun ListHukumItem(
    image: Int,
    title: String,
    body: String,
    count: Int,
    toLawDetail: () -> Unit
) {
    Row(
        modifier = Modifier
            .fillMaxWidth()
            .padding(vertical = 6.dp)
            .clickable {
                toLawDetail()
            }
            .padding(6.dp),
        verticalAlignment = Alignment.Top,
    ) {
        Image(
            painter = painterResource(id = image),
            contentDescription = "UUD 1945",
            contentScale = ContentScale.Crop,
            modifier = Modifier.size(70.dp)
        )
        Column(
            modifier = Modifier
                .padding(horizontal = 12.dp),
            verticalArrangement = Arrangement.Center
        ) {
            Text(
                text = title,
                style = TextStyle(
                    fontSize = 16.sp,
                    fontFamily = FontFamily(Font(R.font.poppins_medium)),
                    color = Color(0xFF242B32),
                )
            )
            Text(
                text = body,
                style = TextStyle(
                    fontSize = 12.sp,
                    fontFamily = FontFamily(Font(R.font.poppins_light)),
                    color = Color(0xFF242B32),
                )
            )
            Text(
                text = "$count Pasal",
                style = TextStyle(
                    fontSize = 10.sp,
                    fontFamily = FontFamily(Font(R.font.poppins_medium)),
                    color = Color(0xFF242B32),
                )
            )
        }
    }
}

@Preview(
    showBackground = true,
    showSystemUi = true
)
@Composable
fun DaftarHukumScreenPreview() {
    DaftarhukumScreen(
        {}
    )
}