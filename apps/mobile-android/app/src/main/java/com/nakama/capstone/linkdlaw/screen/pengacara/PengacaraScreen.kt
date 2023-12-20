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
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.items
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
import com.nakama.capstone.linkdlaw.screen.components.SearchBar
import com.nakama.capstone.linkdlaw.ui.theme.Poppins

@Composable
fun PengacaraScreen(
    toDetailLawyer: () -> Unit
) {
    PengacaraContent(
        toDetailLawyer
    )
}

@Composable
fun PengacaraContent(
    toDetailLawyer: () -> Unit
) {
    Column(
        modifier = Modifier
            .padding(vertical = 18.dp, horizontal = 22.dp),
        horizontalAlignment = Alignment.CenterHorizontally
    ) {
//        var rating by remember { mutableFloatStateOf(2f) }

        val lawyerData = listOf<String>(
            "Brock Lesnar",
            "Jokowo Prabowi"
        )

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
        SearchBar("Cari", modifier = Modifier)
        Spacer(modifier = Modifier.height(10.dp))

        LazyColumn() {
            items(lawyerData) { lawyerName ->
                LawyerItem(
                    name = lawyerName,
                    specialization = "YTTA",
                    rating = 3f,
                    toDetailLawyer = { toDetailLawyer() },
                    modifier = Modifier.fillMaxWidth()
                )
            }
        }

    }
}

@Composable
fun LawyerItem(
    name: String,
    specialization: String,
    rating: Float,
    modifier: Modifier = Modifier,
    toDetailLawyer: () -> Unit,
) {
    Row(
        modifier = modifier
            .clickable {
                toDetailLawyer()
            },
        verticalAlignment = Alignment.CenterVertically,
    ) {
        Image(
            painter = painterResource(id = R.drawable.profile),
            contentDescription = "Lawyer Image",
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
                text = name,
                style = TextStyle(
                    fontSize = 16.sp,
                    fontFamily = FontFamily(Font(R.font.poppins_medium)),
                    color = Color(0xFF242B32),
                )
            )
            Text(
                text = specialization,
                style = TextStyle(
                    fontSize = 12.sp,
                    fontFamily = FontFamily(Font(R.font.poppins_light)),
                    color = Color(0xFF242B32),
                )
            )
            RatingBar(rating = rating)
        }
    }
}

@Composable
fun RatingBar(
    rating: Float,
//    onRatingChanged: (Float) -> Unit,

) {
    Row {
        for (i in 1..5) {
            val icon = if (i <= rating) R.drawable.gold_star else R.drawable.grey_star
            Image(
                painter = painterResource(id = icon),
                contentDescription = "Rating Star",
                modifier = Modifier
                    .size(15.dp)
//                    .clickable { onRatingChanged(i.toFloat()) }
            )
        }
    }
}

@Preview(
    showBackground = true,
    showSystemUi = true
)
@Composable
fun PengacaraScreenPreview() {
    PengacaraScreen(
        toDetailLawyer = {}
    )
}