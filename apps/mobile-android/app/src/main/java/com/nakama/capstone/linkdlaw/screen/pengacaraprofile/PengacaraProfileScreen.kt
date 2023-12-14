package com.nakama.capstone.linkdlaw.screen.pengacaraprofile

import androidx.compose.animation.animateContentSize
import androidx.compose.animation.core.LinearOutSlowInEasing
import androidx.compose.animation.core.animateFloatAsState
import androidx.compose.animation.core.tween
import androidx.compose.foundation.Image
import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.offset
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.layout.width
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.ArrowBack
import androidx.compose.material.icons.filled.ArrowDropDown
import androidx.compose.material.icons.filled.Share
import androidx.compose.material3.Card
import androidx.compose.material3.CardDefaults
import androidx.compose.material3.ExperimentalMaterial3Api
import androidx.compose.material3.Icon
import androidx.compose.material3.IconButton
import androidx.compose.material3.Text
import androidx.compose.material3.TopAppBar
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.alpha
import androidx.compose.ui.draw.rotate
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.layout.ContentScale
import androidx.compose.ui.res.painterResource
import androidx.compose.ui.text.TextStyle
import androidx.compose.ui.text.font.Font
import androidx.compose.ui.text.font.FontFamily
import androidx.compose.ui.text.style.TextOverflow
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import com.nakama.capstone.linkdlaw.R

@Composable
fun PengacaraProfileScreen(){
    PengacaraProfileContent()
}

@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun PengacaraProfileContent(){
    Column(
        modifier = Modifier,
        horizontalAlignment = Alignment.CenterHorizontally
    ) {
        TopAppBar(
            modifier = Modifier
                .fillMaxWidth(),
            title = {

            },
            navigationIcon = {
                IconButton(onClick = { /*TODO*/ }) {
                    Icon(imageVector = Icons.Filled.ArrowBack, contentDescription = "Back")
                }
            },
            actions = {
                IconButton(onClick = { /* Handle more icon click */ }) {
                    Icon(Icons.Filled.Share, contentDescription = "More")
                }
            }
        )
        Box(
            modifier = Modifier
                .padding(horizontal = 28.dp) ,
            contentAlignment = Alignment.Center,
        ){
            Box(
                modifier = Modifier
                    .fillMaxWidth()
                    .height(200.dp),
                contentAlignment = Alignment.BottomCenter
            ){
                Card(
                    modifier = Modifier,
                    shape = RoundedCornerShape(15.dp)
                ) {
                    Image(
                        modifier = Modifier
                            .fillMaxSize(),
                        painter = painterResource(id = R.drawable.profile),
                        contentDescription = "Pengacara",
                        contentScale = ContentScale.Crop
                    )
                }
                Box(
                    modifier = Modifier
                        .width(300.dp)
                        .height(100.dp)
                        .offset(0.dp, 45.dp),
                ){
                    Card(
                        modifier = Modifier
                    ) {
                        Column(
                            modifier = Modifier
                                .fillMaxSize()
                                .background(Color(0xFF011429)),
                            horizontalAlignment = Alignment.CenterHorizontally,
                            verticalArrangement = Arrangement.Center
                        ) {
                            Text(
                                text = "Dr. Hotman Paris Hutapea, S.H., LL.M., M.Hum.",
                                style = TextStyle(
                                    fontSize = 12.sp,
                                    fontFamily = FontFamily(Font(R.font.poppins_regular)),
                                    color = Color(0xFFFFFFFF),
                                )
                            )
                            Text(
                                text = "Pengacara Specialis Hukum Perdata",
                                style = TextStyle(
                                    fontSize = 12.sp,
                                    fontFamily = FontFamily(Font(R.font.poppins_regular)),
                                    color = Color(0xFFFFFFFF),
                                )
                            )
                        }
                    }
                }
            }
        }
        Spacer(modifier = Modifier.height(40.dp))
        Column(
            modifier = Modifier
                .padding(20.dp),
            horizontalAlignment = Alignment.CenterHorizontally
        ) {
            Column(
                modifier = Modifier
                    .fillMaxWidth()
                    .height(129.dp)
                    .background(color = Color(0xFFD9D9D9), shape = RoundedCornerShape(size = 10.dp))
                    .padding(10.dp)
            ) {
                Row(
                    modifier = Modifier
                        .fillMaxWidth(),
                    horizontalArrangement = Arrangement.SpaceBetween,
                    verticalAlignment = Alignment.CenterVertically
                ) {
                    Row(
                        modifier = Modifier,
                        verticalAlignment = Alignment.CenterVertically
                    ) {
                        Icon(
                            modifier = Modifier
                                .size(24.dp),
                            painter = painterResource(id = R.drawable.like),
                            contentDescription = "like",
                        )
                        Text(
                            text = "99% Puas",
                            style = TextStyle(
                                fontSize = 14.sp,
                                fontFamily = FontFamily(Font(R.font.poppins_regular)),
                                color = Color(0xFF494949),
                            )
                        )
                    }
                    Text(
                        text = "Semua (999)",
                        style = TextStyle(
                            fontSize = 14.sp,
                            fontFamily = FontFamily(Font(R.font.poppins_regular)),
                            color = Color(0xFF494949)
                        )
                    )    
                }
                Spacer(modifier = Modifier.height(10.dp))
                Column(
                    modifier = Modifier
                        .fillMaxWidth()
                        .height(66.dp)
                        .background(
                            color = Color(0xFFFFFFFF),
                            shape = RoundedCornerShape(size = 10.dp)
                        ),
                    verticalArrangement = Arrangement.Center,
                    horizontalAlignment = Alignment.CenterHorizontally
                ) {
                    Text(
                        text = "“Saya puas dengan pak hotman karena agresif”",
                        style = TextStyle(
                            fontSize = 12.sp,
                            fontFamily = FontFamily(Font(R.font.poppins_regular)),
                            color = Color(0xFF494949),
                        )
                    )
                }
            }
            Spacer(modifier = Modifier.height(15.dp))
            Column(
                modifier = Modifier
                    .fillMaxWidth()
                    .height(63.dp)
                    .background(color = Color(0xFFD9D9D9), shape = RoundedCornerShape(size = 10.dp))
                    .padding(10.dp)
            ) {
                Column {
                    Text(
                        text = "Nomer PERADI",
                        style = TextStyle(
                            fontSize = 14.sp,
                            fontFamily = FontFamily(Font(R.font.poppins_regular)),
                            color = Color(0xFF494949),
                        )
                    )
                    Text(
                        text = "00000000000",
                        style = TextStyle(
                            fontSize = 14.sp,
                            fontFamily = FontFamily(Font(R.font.poppins_regular)),
                            color = Color(0xFF494949),
                        )
                    )
                }
            }
            Spacer(modifier = Modifier.height(15.dp))
            var expandedState by remember { mutableStateOf(false) }
            val rotationState by animateFloatAsState(
                targetValue = if (expandedState) 180f else 0f, label = "Animation"
            )

            Card(
                colors = CardDefaults.cardColors(Color(0xFFD9D9D9)),
                modifier = Modifier
                    .fillMaxWidth()
                    .animateContentSize(
                        animationSpec = tween(
                            delayMillis = 300,
                            easing = LinearOutSlowInEasing
                        )
                    ),
                shape = RoundedCornerShape(10.dp),
                onClick = {
                    expandedState = !expandedState
                }
            ) {
                Column(
                    modifier = Modifier
                        .fillMaxWidth()
                        .height(45.dp)
                        .padding(12.dp)
                ) {
                    Row(verticalAlignment = Alignment.CenterVertically) {
                        Text(
                            modifier = Modifier
                                .weight(6f),
                            text = "Riwayat Pendidikan",
                            fontSize = 14.sp,
                            fontFamily = FontFamily(Font(R.font.poppins_regular)),
                            color = Color(0xFF494949),
                            maxLines = 1,
                            overflow = TextOverflow.Ellipsis
                        )
                        IconButton(
                            modifier = Modifier
                                .alpha(0.5f)
                                .weight(1f)
                                .rotate(rotationState),
                            onClick = { expandedState = !expandedState }
                        ) {
                            Icon(imageVector = Icons.Default.ArrowDropDown, contentDescription = "Arrow drop down")
                        }
                    }
                    if (expandedState){
                        Text(
                            text = "Lulusan Planet Luar 2010",
                            fontSize = 14.sp,
                            fontFamily = FontFamily(Font(R.font.poppins_regular)),
                            color = Color(0xFF494949),
                            maxLines = 4,
                            overflow = TextOverflow.Ellipsis
                        )
                    }
                }
            }
            Spacer(modifier = Modifier.height(15.dp))
            Card(
                colors = CardDefaults.cardColors(Color(0xFFD9D9D9)),
                modifier = Modifier
                    .fillMaxWidth()
                    .animateContentSize(
                        animationSpec = tween(
                            delayMillis = 300,
                            easing = LinearOutSlowInEasing
                        )
                    ),
                shape = RoundedCornerShape(10.dp),
                onClick = {
                    expandedState = !expandedState
                }
            ) {
                Column(
                    modifier = Modifier
                        .fillMaxWidth()
                        .height(45.dp)
                        .padding(12.dp)
                ) {
                    Row(verticalAlignment = Alignment.CenterVertically) {
                        Text(
                            modifier = Modifier
                                .weight(6f),
                            text = "Firma Hukum",
                            fontSize = 14.sp,
                            fontFamily = FontFamily(Font(R.font.poppins_regular)),
                            color = Color(0xFF494949),
                            maxLines = 1,
                            overflow = TextOverflow.Ellipsis
                        )
                        IconButton(
                            modifier = Modifier
                                .alpha(0.5f)
                                .weight(1f)
                                .rotate(rotationState),
                            onClick = { expandedState = !expandedState }
                        ) {
                            Icon(imageVector = Icons.Default.ArrowDropDown, contentDescription = "Arrow drop down")
                        }
                    }
                    if (expandedState){
                        Text(
                            text = "Lulusan Planet Luar 2010",
                            fontSize = 14.sp,
                            fontFamily = FontFamily(Font(R.font.poppins_regular)),
                            color = Color(0xFF494949),
                            maxLines = 4,
                            overflow = TextOverflow.Ellipsis
                        )
                    }
                }
            }
        }
    }
    Box(
        modifier = Modifier,
        contentAlignment = Alignment.BottomCenter
    ){
        Row(
            modifier = Modifier
                .fillMaxWidth()
                .height(84.dp)
                .background(color = Color(0xFF011429))
                .padding(horizontal = 10.dp),
            verticalAlignment = Alignment.CenterVertically,
            horizontalArrangement = Arrangement.SpaceBetween,
        ){
            Column {
                Text(
                    text = "Biaya Konsultasi",
                    style = TextStyle(
                        fontSize = 12.sp,
                        fontFamily = FontFamily(Font(R.font.poppins_regular)),
                        color = Color(0xFFFDFAFA),
                    )
                )
                Text(
                    text = "RP.100.000",
                    style = TextStyle(
                        fontSize = 12.sp,
                        fontFamily = FontFamily(Font(R.font.poppins_regular)),
                        color = Color(0xFF79CC26),
                    )
                )
            }
            Row(
                modifier = Modifier
                    .width(133.dp)
                    .height(46.dp)
                    .background(color = Color(0xFF91D8E4), shape = RoundedCornerShape(size = 10.dp)),
                verticalAlignment = Alignment.CenterVertically,
                horizontalArrangement = Arrangement.Center
            ) {
                Text(
                    text = "Chat Sekarang",
                    style = TextStyle(
                        fontSize = 14.sp,
                        fontFamily = FontFamily(Font(R.font.poppins_regular)),
                        color = Color(0xFF494949),
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
fun PengacaraProfilePreview(){
    PengacaraProfileScreen()
}