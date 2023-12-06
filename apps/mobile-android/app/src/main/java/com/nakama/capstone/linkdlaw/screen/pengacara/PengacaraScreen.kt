package com.nakama.capstone.linkdlaw.screen.pengacara

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
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableFloatStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
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
import com.nakama.capstone.linkdlaw.screen.components.SearchBar
import com.nakama.capstone.linkdlaw.ui.theme.Poppins

@Composable
fun PengacaraScreen() {
    PengacaraContent()
}

@Composable
fun PengacaraContent(

) {
    Column(
        modifier = Modifier
            .padding(vertical = 18.dp, horizontal = 22.dp),
        horizontalAlignment = Alignment.CenterHorizontally
    ) {
        var rating by remember { mutableFloatStateOf(2f) }
        
        Text(
            modifier = Modifier.align(Alignment.Start),
            text = "Pengacara",
            style = TextStyle(
                fontSize = 20.sp,
                fontFamily = Poppins,
                fontWeight = FontWeight.Bold,
                color = Color(0xFF242B32),
            )
        )
        SearchBar(modifier = Modifier)
        Spacer(modifier = Modifier.height(25.dp))
        Row(
            modifier = Modifier
                .fillMaxWidth(),
            verticalAlignment = Alignment.CenterVertically,
        ) {
            Image(
                painter = painterResource(id = com.nakama.capstone.linkdlaw.R.drawable.brock_lesnar),
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
                        fontFamily = FontFamily(Font(com.nakama.capstone.linkdlaw.R.font.poppins_medium)),
                        color = Color(0xFF242B32),
                    )
                )
                Text(
                    text = "Pengacara Spesialis Kriminalis Korea",
                    style = TextStyle(
                        fontSize = 12.sp,
                        fontFamily = FontFamily(Font(com.nakama.capstone.linkdlaw.R.font.poppins_light)),
                        color = Color(0xFF242B32),
                    )
                )
                RatingBar(rating = rating, onRatingChanged = {newRating -> rating = newRating})
            }
        }
        Spacer(modifier = Modifier.height(22.dp))
        Row(
            modifier = Modifier
                .fillMaxWidth(),
            verticalAlignment = Alignment.CenterVertically,
        ) {
            Image(
                painter = painterResource(id = com.nakama.capstone.linkdlaw.R.drawable.brock_lesnar),
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
                        fontFamily = FontFamily(Font(com.nakama.capstone.linkdlaw.R.font.poppins_medium)),
                        color = Color(0xFF242B32),
                    )
                )
                Text(
                    text = "Pengacara Spesialis Kriminalis Korea",
                    style = TextStyle(
                        fontSize = 12.sp,
                        fontFamily = FontFamily(Font(com.nakama.capstone.linkdlaw.R.font.poppins_light)),
                        color = Color(0xFF242B32),
                    )
                )
                RatingBar(rating = rating, onRatingChanged = {newRating -> rating = newRating})
            }
        }
    }
}

@Composable
fun RatingBar(rating: Float, onRatingChanged: (Float) -> Unit) {
    Row {
        for (i in 1..5) {
            val icon = if (i <= rating) com.nakama.capstone.linkdlaw.R.drawable.gold_star else com.nakama.capstone.linkdlaw.R.drawable.grey_star
            Image(
                painter = painterResource(id = icon),
                contentDescription = "Rating Star",
                modifier = Modifier
                    .size(15.dp)
                    .clickable { onRatingChanged(i.toFloat()) }
            )
        }
    }
}

@Preview(
    showBackground = true,
    showSystemUi = true
)
@Composable
fun PengacaraScreenPreview(){
    PengacaraScreen()
}