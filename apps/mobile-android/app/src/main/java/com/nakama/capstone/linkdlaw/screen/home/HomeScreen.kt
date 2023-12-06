package com.nakama.capstone.linkdlaw.screen.home

import androidx.compose.foundation.Image
import androidx.compose.foundation.background
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.PaddingValues
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.heightIn
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.lazy.LazyRow
import androidx.compose.foundation.lazy.items
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.AccountCircle
import androidx.compose.material.icons.filled.Search
import androidx.compose.material3.ElevatedCard
import androidx.compose.material3.ExperimentalMaterial3Api
import androidx.compose.material3.Icon
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.SearchBar
import androidx.compose.material3.SearchBarDefaults
import androidx.compose.material3.Text
import androidx.compose.material3.TextField
import androidx.compose.material3.TextFieldDefaults
import androidx.compose.material3.TopAppBar
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Brush
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.res.painterResource
import androidx.compose.ui.text.TextStyle
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.tooling.preview.Devices
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import androidx.constraintlayout.compose.ConstraintLayout
import com.dicoding.sampleui.components.HomeSection
import com.nakama.capstone.linkdlaw.R
import com.nakama.capstone.linkdlaw.ui.theme.LinkDLawTheme

@Composable
fun HomeScreen() {
    
}

@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun HomeContent(item: List<String>, modifier: Modifier = Modifier) {
    Column {

        TopAppBar(title = {
            Search(query = "", modifier = modifier)
        }, actions = {
            Box(
                modifier.size(40.dp),
                contentAlignment = Alignment.Center
            ){
                Icon(imageVector = Icons.Default.AccountCircle, contentDescription = null, modifier.fillMaxSize())
            }
        },
        )

        CardWithConstraint()

        HomeSection(
            title = "Hukum Tersesuai",
            modifier = modifier
        ) {
            LazyRow(
                contentPadding = PaddingValues(10.dp),
                horizontalArrangement = Arrangement.spacedBy(8.dp)
            ){
                items(item){
                    HomeListItem(
                        text = it,
                        modifier = modifier
                    )
                }
            }
        }

        HomeSection(
            title = "Top Pengacara",
            modifier = modifier
        ) {
            LazyRow(
                contentPadding = PaddingValues(10.dp),
                horizontalArrangement = Arrangement.spacedBy(8.dp)
            ){
                items(item){
                    HomeListItem(
                        text = it,
                        modifier = modifier
                    )
                }
            }
        }
    }
}

@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun Search(
    query: String,
    modifier: Modifier = Modifier
) {
    SearchBar(
        query = query,
        onQueryChange = {},
        onSearch = {},
        active = false,
        onActiveChange = {},
        leadingIcon = {
            Icon(
                imageVector = Icons.Default.Search, contentDescription = null,
                tint = MaterialTheme.colorScheme.onSurfaceVariant
            )
        },
        placeholder = {
            Text("Search", color = Color.Black)
        },
        shape = MaterialTheme.shapes.large,
        colors = SearchBarDefaults.colors(
            containerColor = MaterialTheme.colorScheme.background
        ),
        modifier = modifier
            .padding(end = 8.dp)
            .heightIn(min = 48.dp)
    ) {

    }

}

@Composable
fun HomeListItem(text: String, modifier: Modifier) {
    ElevatedCard {
        Box(
            modifier = modifier
                .size(100.dp),
            contentAlignment = Alignment.Center
        ){
            Text(text = text)
        }
    }
}

@Composable
fun CardWithConstraint() {
    Box(
        modifier = Modifier
            .padding(8.dp)
            .background(
                shape = RoundedCornerShape(10.dp),
                brush = Brush.linearGradient(listOf(Color(0xFF0B5DA6), Color(0xFF3979B1)))
            )
            .fillMaxWidth()
            .height(240.dp)
    ) {
        ConstraintLayout(
            modifier = Modifier.fillMaxSize()
        ) {
            val (image, header, body, textField, button) = createRefs()

            Image(
                painter = painterResource(id = R.drawable.img_ask),
                contentDescription = null,
                modifier = Modifier
                    .constrainAs(image){
                        top.linkTo(parent.top, margin = 8.dp)
                        start.linkTo(parent.start, margin = 16.dp)
                    }
            )

            Text(
                text = "Tanya Dong\n Bang K!m",
                color = MaterialTheme.colorScheme.onPrimary,
                fontSize = MaterialTheme.typography.headlineMedium.fontSize,
                fontWeight = FontWeight.Bold,
                modifier = Modifier
                    .constrainAs(header){
                        top.linkTo(parent.top, margin = 16.dp)
                        end.linkTo(parent.end, margin = 16.dp)
                    },
                textAlign = TextAlign.Right
            )
            Text(
                text = "Ceritakan masalahmu kami\n akan berikan pasal yang\n berhubungan",
                fontSize = 13.sp,
                style = TextStyle(
                    lineHeight = 20.sp
                ),
                color = MaterialTheme.colorScheme.onPrimary,
                textAlign = TextAlign.Right,
                modifier = Modifier
                    .constrainAs(body){
                        top.linkTo(header.bottom, margin = 4.dp)
                        end.linkTo(parent.end, margin = 16.dp)
                    },
                maxLines = 3
            )

            TextField(
                value = "",
                onValueChange = {},
                modifier = Modifier
                    .constrainAs(textField){
                        top.linkTo(image.bottom, margin = 8.dp)
                        start.linkTo(parent.start, margin = 16.dp)
                    },
                label = {
                    Text(
                        text = "Ceritakan masalahmu"
                    )
                },
                colors = TextFieldDefaults.colors(
                    unfocusedContainerColor = MaterialTheme.colorScheme.background,
                    focusedContainerColor = MaterialTheme.colorScheme.background,
                    focusedTextColor = MaterialTheme.colorScheme.background
                ),
                shape = RoundedCornerShape(10.dp)
            )

            Box(
                modifier = Modifier
                    .size(50.dp)
                    .background(shape = RoundedCornerShape(10.dp), color = Color(0xFF001D36))
                    .clickable {

                    }
                    .constrainAs(button) {
                        top.linkTo(textField.top, margin = 0.dp)
                        start.linkTo(textField.end, margin = 8.dp)
                        end.linkTo(parent.end, margin = 8.dp)
                        bottom.linkTo(textField.bottom, margin = 0.dp)
                    },
                contentAlignment = Alignment.Center
            ) {
                Icon(
                    painter = painterResource(id = R.drawable.ic_arrow),
                    contentDescription = null,
                    tint = Color.White,
                    modifier = Modifier.size(26.dp)
                )
            }


        }
    }
}

@Preview(
    showBackground = true
)
@Composable
fun HomeItemPreview() {
    HomeListItem(text = "text", modifier = Modifier)
}

@Preview(showBackground = true, device = Devices.PIXEL_4, showSystemUi = true, )
@Composable
fun GreetingPreview() {
    LinkDLawTheme {
        HomeContent(item = listOf("text1", "text2", "text3"))
    }
}