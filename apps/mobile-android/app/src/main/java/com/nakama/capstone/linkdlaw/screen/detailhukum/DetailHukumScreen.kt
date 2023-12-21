@file:OptIn(ExperimentalFoundationApi::class)

package com.nakama.capstone.linkdlaw.screen.detailhukum

import androidx.compose.animation.core.animateFloatAsState
import androidx.compose.foundation.ExperimentalFoundationApi
import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.wrapContentHeight
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.ArrowBack
import androidx.compose.material.icons.filled.KeyboardArrowRight
import androidx.compose.material3.Icon
import androidx.compose.material3.IconButton
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.rotate
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.TextStyle
import androidx.compose.ui.text.font.Font
import androidx.compose.ui.text.font.FontFamily
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.text.style.TextOverflow
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import androidx.paging.compose.LazyPagingItems
import com.nakama.capstone.linkdlaw.R
import com.nakama.capstone.linkdlaw.remote.dto.GetPasalDataItem
import com.nakama.capstone.linkdlaw.screen.components.SearchBar
import com.nakama.capstone.linkdlaw.ui.theme.Poppins

@Composable
fun DetailHukumScreen(
    id: Int,
    navigateBack: () -> Unit,
    pasalResult: LazyPagingItems<GetPasalDataItem>?
) {
    DetailHukumContent(
        navigateBack = navigateBack,
        daftarPasal = pasalResult,
        id = id
    )
}

@OptIn(ExperimentalFoundationApi::class)
@Composable
fun DetailHukumContent(
    id: Int,
    navigateBack: () -> Unit,
    daftarPasal: LazyPagingItems<GetPasalDataItem>?
) {
    val listPasal = listOf(
        "Pasalaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa 1",
        "Pasal 2",
        "Pasal 3",
        "Pasal 4",
        "Pasal 5"
    )

    LazyColumn() {
        item {
            Box(
                modifier = Modifier
                    .fillMaxWidth()
                    .wrapContentHeight()
            ) {
//                Image(
//                    modifier = Modifier
//                        .fillMaxWidth(),
//                    painter = painterResource(id = R.drawable.banner_listpasal),
//                    contentDescription = "Banner",
//                    contentScale = ContentScale.Crop
//                )
                Box(
                    modifier = Modifier
                        .fillMaxSize()
                        .background(Color(0x941986EE))
                )
                Box(
                    modifier = Modifier
                ) {
                    Row(
                        modifier = Modifier
                            .fillMaxWidth()
                            .padding(top = 10.dp, start = 10.dp),
                        horizontalArrangement = Arrangement.SpaceBetween,
                        verticalAlignment = Alignment.CenterVertically
                    ) {
                        IconButton(onClick = { navigateBack() }) {
                            Icon(
                                imageVector = Icons.Default.ArrowBack,
                                contentDescription = "Arrow Back",
                            )
                        }
                    }
                }
            }
        }
        stickyHeader {
            Column(
                horizontalAlignment = Alignment.CenterHorizontally
            ) {
                Spacer(modifier = Modifier.height(15.dp))
                Text(
                    text = if (id == 1) "KUH PERDATA" else "UUD 1945",
                    style = TextStyle(
                        fontFamily = Poppins,
                        fontWeight = FontWeight.Bold,
                        color = Color(0xFF242B32)
                    )
                )
                SearchBar("Cari", modifier = Modifier.padding(horizontal = 12.dp))
                Spacer(modifier = Modifier.height(6.dp))
            }
        }
//        items(listPasal) { item ->
//            PasalItem(
//                pasalTitle = item, pasalBody = "", modifier = Modifier
//                    .fillMaxWidth()
//                    .padding(horizontal = 12.dp, vertical = 6.dp)
//            )
//        }

//        if (daftarPasal != null) {
//            items(daftarPasal.itemCount) { 
//                Text(text = daftarPasal[it]?. ?: "")
//                item?.lawData?.sortedBy { it?.id }?.forEach { lawDataItem ->
//                    PasalItem(
//                        pasalTitle = lawDataItem?.pasal ?: "",
//                        pasalBody = lawDataItem?.content ?: "",
//                        modifier = Modifier.fillMaxWidth().padding(horizontal = 12.dp, vertical = 6.dp)
//                    )
//                }
//                
//            }
//        }

        if (daftarPasal != null) {
            items(daftarPasal.itemCount){
                Text(text = daftarPasal[it]?.name ?: " ", modifier = Modifier.padding(horizontal = 12.dp, vertical = 6.dp))
                daftarPasal[it]?.lawData?.forEach { lawDataItem ->
//                    if(id == 1){
//                        PasalItem(
//                            pasalTitle = ("Pasal " + lawDataItem?.pasal) ?: "",
//                            pasalBody = lawDataItem?.content ?: "",
//                            modifier = Modifier.fillMaxWidth().padding(horizontal = 12.dp, vertical = 6.dp)
//                        )
//                    }else{
//                        PasalItem(
//                            pasalTitle = daftarPasal[it]?.name ?: "",
//                            pasalBody = lawDataItem?.content ?: "",
//                            modifier = Modifier.fillMaxWidth().padding(horizontal = 12.dp, vertical = 6.dp)
//                        )
//                    }
                    PasalItem(
                        pasalTitle = ("Pasal " + lawDataItem?.pasal) ?: "",
                        pasalBody = lawDataItem?.content ?: "",
                        modifier = Modifier.fillMaxWidth().padding(horizontal = 12.dp, vertical = 6.dp)
                    )
                }
            }
        }
    }
}

@Composable
fun PasalItem(
    pasalTitle: String,
    pasalBody: String,
    modifier: Modifier = Modifier
) {
    var expandedState by remember { mutableStateOf(false) }
    val rotationState by animateFloatAsState(
        targetValue = if (expandedState) 90f else 0f, label = "Animation"
    )

    Column(
        modifier = modifier
            .wrapContentHeight()
            .background(color = Color(0xFFD9D9D9), shape = RoundedCornerShape(size = 9.dp))
    ) {
        Row(
            modifier = Modifier
                .fillMaxWidth()
                .wrapContentHeight()
                .padding(horizontal = 12.dp),
            verticalAlignment = Alignment.CenterVertically,
            horizontalArrangement = Arrangement.SpaceBetween
        ) {
            Text(
                text = pasalTitle,
                style = TextStyle(
                    fontSize = 14.sp,
                    fontFamily = FontFamily(Font(R.font.poppins_regular)),
                    color = Color(0xFF494949),
                ),
                modifier = Modifier
                    .weight(11f)
                    .padding(2.dp)
            )
            IconButton(
                modifier = Modifier.weight(1f),
                onClick = {
                    expandedState = !expandedState
                }
            ) {
                Icon(
                    imageVector = Icons.Default.KeyboardArrowRight,
                    contentDescription = "Drop-Down Arrow",
                    modifier = Modifier.rotate(rotationState)
                )
            }
        }
        if (expandedState) {
            Text(
                text = pasalBody,
                fontSize = 14.sp,
                fontFamily = FontFamily(Font(R.font.poppins_regular)),
                color = Color(0xFF494949),
                overflow = TextOverflow.Ellipsis,
                textAlign = TextAlign.Justify,
                modifier = Modifier.padding(horizontal = 12.dp)
            )
            Spacer(modifier = Modifier.height(6.dp))
        }
    }
}

@Preview(
    showSystemUi = true,
    showBackground = true
)

@Composable
fun BannerPreview() {
    DetailHukumScreen(
        navigateBack = {},
        pasalResult = null,
        id = 0
    )
}