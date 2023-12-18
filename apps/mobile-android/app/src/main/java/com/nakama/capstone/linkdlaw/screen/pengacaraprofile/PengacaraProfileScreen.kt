@file:OptIn(ExperimentalMaterial3Api::class)

package com.nakama.capstone.linkdlaw.screen.pengacaraprofile

import androidx.compose.animation.animateContentSize
import androidx.compose.animation.core.LinearOutSlowInEasing
import androidx.compose.animation.core.animateFloatAsState
import androidx.compose.animation.core.tween
import androidx.compose.foundation.Image
import androidx.compose.foundation.background
import androidx.compose.foundation.clickable
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
import androidx.compose.foundation.layout.wrapContentHeight
import androidx.compose.foundation.rememberScrollState
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.foundation.verticalScroll
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.ArrowBack
import androidx.compose.material.icons.filled.ArrowDropDown
import androidx.compose.material.icons.filled.Share
import androidx.compose.material3.Card
import androidx.compose.material3.CardDefaults
import androidx.compose.material3.ExperimentalMaterial3Api
import androidx.compose.material3.Icon
import androidx.compose.material3.IconButton
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Scaffold
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
import com.nakama.capstone.linkdlaw.ui.theme.Poppins

@Composable
fun PengacaraProfileScreen(
    navigateBack: () -> Unit
){
    PengacaraProfileContent(
        navigateBack
    )
}

@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun PengacaraProfileContent(
    navigateBack: () -> Unit
){
    val scrollState = rememberScrollState()

    Scaffold(
        topBar = {
            TopAppBar(
                modifier = Modifier
                    .fillMaxWidth(),
                title = {

                },
                navigationIcon = {
                    IconButton(onClick = {
                        navigateBack()
                    }) {
                        Icon(imageVector = Icons.Filled.ArrowBack, contentDescription = "Back")
                    }
                },
                actions = {
                    IconButton(onClick = { /* Handle more icon click */ }) {
                        Icon(Icons.Filled.Share, contentDescription = "More")
                    }
                }
            )
        }
    ) {
        Column(
            modifier = Modifier
                .padding(it)
                .fillMaxSize()
                .verticalScroll(scrollState),
            horizontalAlignment = Alignment.CenterHorizontally
        ) {
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
                                .fillMaxSize()
                                .padding(16.dp)
                                .background(color = MaterialTheme.colorScheme.background),
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
                                    .fillMaxWidth()
                                    .wrapContentHeight()
                                    .background(Color(0xFF011429))
                                    .padding(16.dp),
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
            Box(modifier = Modifier){
                Column(
                    modifier = Modifier
                        .padding(20.dp),
                    horizontalAlignment = Alignment.CenterHorizontally
                ) {
                    Column(
                        modifier = Modifier
                            .fillMaxWidth()
                            .wrapContentHeight()
                            .background(
                                color = Color(0xFFD9D9D9),
                                shape = RoundedCornerShape(size = 10.dp)
                            )
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
                                .wrapContentHeight()
                                .background(
                                    color = Color(0xFFFFFFFF),
                                    shape = RoundedCornerShape(size = 10.dp)
                                ).padding(16.dp),
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
                            .background(
                                color = Color(0xFFD9D9D9),
                                shape = RoundedCornerShape(size = 10.dp)
                            )
                            .padding(10.dp)
                    ) {
                        Column {
                            Text(
                                text = "Nomer PERADI",
                                style = TextStyle(
                                    fontSize = 14.sp,
                                    fontFamily = Poppins,
                                    color = Color(0xFF494949),
                                )
                            )
                            Text(
                                text = "00000000000",
                                style = TextStyle(
                                    fontSize = 14.sp,
                                    fontFamily = Poppins,
                                    color = Color(0xFF494949),
                                )
                            )
                        }
                    }
                    Spacer(modifier = Modifier.height(15.dp))

                    DropDownItem(textHeader = "Riwayat Pendidikan", textBody = "", modifier = Modifier.fillMaxWidth())
                    Spacer(modifier = Modifier.height(15.dp))
                    DropDownItem(textHeader = "Firma Hukum", textBody = "", modifier = Modifier.fillMaxWidth())

                }
            }
            
            Spacer(modifier = Modifier.weight(1f))
            
            Box(
                modifier = Modifier
                    .fillMaxSize(),
                contentAlignment = Alignment.BottomCenter
            ){
                Row(
                    modifier = Modifier
                        .fillMaxWidth()
                        .height(80.dp)
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
                                fontFamily = Poppins,
                                color = Color(0xFFFDFAFA),
                            )
                        )
                        Text(
                            text = "RP.100.000",
                            style = TextStyle(
                                fontSize = 12.sp,
                                fontFamily = Poppins,
                                color = Color(0xFF79CC26),
                            )
                        )
                    }
                    Row(
                        modifier = Modifier
                            .width(133.dp)
                            .height(46.dp)
                            .background(
                                color = Color(0xFF91D8E4),
                                shape = RoundedCornerShape(size = 10.dp)
                            )
                            .clickable { },
                        verticalAlignment = Alignment.CenterVertically,
                        horizontalArrangement = Arrangement.Center
                    ) {
                        Text(
                            text = "Chat Sekarang",
                            style = TextStyle(
                                fontSize = 14.sp,
                                fontFamily = Poppins,
                                color = Color(0xFF494949),
                            )
                        )
                    }
                }
            }
        }
    }
}

@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun DropDownItem(
    textHeader: String,
    textBody: String,
    modifier: Modifier = Modifier
) {
    var expandedState by remember { mutableStateOf(false) }
    val rotationState by animateFloatAsState(
        targetValue = if (expandedState) 180f else 0f, label = "Animation"
    )
    
    Card(
        modifier = modifier
            .fillMaxWidth()
            .animateContentSize(
                animationSpec = tween(
                    delayMillis = 300,
                    easing = LinearOutSlowInEasing
                )
            ),
        colors = CardDefaults.cardColors(Color(0xFFD9D9D9)),
        shape = RoundedCornerShape(10.dp),
        onClick = {
            expandedState = !expandedState
        }
    ) {
        Column(
            modifier = Modifier
                .fillMaxWidth()
                .padding(horizontal = 12.dp, vertical = 0.dp)
        ) {
            Row(verticalAlignment = Alignment.CenterVertically) {
                Text(
                    modifier = Modifier
                        .weight(6f),
                    text = textHeader,
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
                    text = "Lorem Ipsum is simply dummy text of the printing and typesetting industry." +
                        "Lorem Ipsum has been the industry's standard dummy text ever since" +
                        "the 1500s, when an unknown printer took a galley of type and scrambled it" +
                        "to make a type specimen book. It has survived not only five centuries, but" +
                        "also the leap into electronic typesetting, remaining essentially unchanged.",
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

@Preview(
    showBackground = true,
    showSystemUi = true
)
@Composable
fun PengacaraProfilePreview(){
    PengacaraProfileScreen(
        navigateBack = {}
    )
}