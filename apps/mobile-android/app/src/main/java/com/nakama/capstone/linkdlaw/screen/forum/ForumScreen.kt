package com.nakama.capstone.linkdlaw.screen.forum

import androidx.compose.foundation.border
import androidx.compose.foundation.clickable
import androidx.compose.foundation.excludeFromSystemGesture
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.rememberScrollState
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.foundation.verticalScroll
import androidx.compose.material3.Button
import androidx.compose.material3.OutlinedTextField
import androidx.compose.material3.Scaffold
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import androidx.navigation.NavController
import androidx.navigation.NavHostController
import androidx.navigation.compose.rememberNavController
import com.nakama.capstone.linkdlaw.navigation.navgraph.HomeNavGraph
import com.nakama.capstone.linkdlaw.remote.dto.GetCommunityPostResponseDataItem
import com.nakama.capstone.linkdlaw.screen.home.BottomBar
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.getValue
import androidx.compose.runtime.livedata.observeAsState
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.draw.clip
import androidx.compose.ui.layout.ContentScale
import androidx.compose.ui.res.painterResource
import androidx.compose.ui.text.TextStyle
import androidx.compose.ui.text.font.Font
import androidx.compose.ui.text.font.FontFamily
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import com.nakama.capstone.linkdlaw.ui.theme.Poppins

@Composable
fun ForumScreen(
    navController: NavHostController = rememberNavController(),
    toForumDetail: (String, GetCommunityPostResponseDataItem) -> Unit,
    posts: List<GetCommunityPostResponseDataItem?>?,
    sendPost: (String, String) -> Unit
) {
            var postContent by remember {
                mutableStateOf("")
            }
    
            var postTitle by remember {
                mutableStateOf("")
            }
    
            val scrollState = rememberScrollState()


    
            Column (
                modifier = Modifier
                    .fillMaxSize()
                    .verticalScroll(scrollState)
                    .padding(16.dp)
            ) {
                Text(
                    text = "Forum",
                    style = TextStyle(
                        fontSize = 20.sp,
                        fontFamily = Poppins,
                        fontWeight = FontWeight.Bold,
                        color = Color(0xFF242B32),
                    )
                )

                Spacer(modifier = Modifier.height(10.dp))


                Box(
                    modifier = Modifier
                        .padding(horizontal = 16.dp, vertical = 6.dp)
                        .clip(RoundedCornerShape(10.dp)) // Rounded corners
                        .border(1.dp, Color.Black, RoundedCornerShape(10.dp)) // Border
                        .fillMaxWidth()
                ) {
                    Box(
                        modifier = Modifier
                            .padding(16.dp)
                            .fillMaxWidth()
                    ) {
                        Column() {
                            // sow forumId
                            Text(text = "Tanyakan sesuatu", fontSize = 22.sp)
                            OutlinedTextField(
                                value = postContent,
                                onValueChange = { postContent = it },
                                label = { Text(text = "Tulis judul pertanyaan") },
                                modifier = Modifier
                                    .padding(horizontal = 16.dp, vertical = 6.dp)
                            )

                            OutlinedTextField(
                                value = postTitle,
                                onValueChange = { postTitle = it },
                                label = { Text(text = "Tulis pertanyaanmu disini") },
                                modifier = Modifier
                                    .padding(horizontal = 16.dp, vertical = 6.dp)
                            )
                            Row (
                                modifier = Modifier.fillMaxWidth(),
                                horizontalArrangement = Arrangement.End
                            ) {
                                
                                Box (
                                    modifier = Modifier
                                        .padding(horizontal = 2.dp, vertical = 10.dp)
                                ) {
                                    Button(onClick = {
                                        sendPost(postTitle, postContent)
                                    }) {
                                        Text(text = "Gas kirim")
                                    }
                                }
                            }
                        }
                    }
                }
                
                posts?.forEach() { it ->
                    Box(
                        modifier = Modifier
                            .padding(vertical = 6.dp)
                            .clip(RoundedCornerShape(10.dp)) // Rounded corners
                            .border(1.dp, Color.Black, RoundedCornerShape(10.dp)) // Border
                            .fillMaxWidth()
                            .clickable {
                                toForumDetail(it?.id.toString(), it!!)
                            }
                    ) {
                        Box (
                            modifier = Modifier.padding(16.dp)
                        ) {
                            Column() {
                                Text(text = it?.title.toString(), fontSize = 22.sp)
                                Box(
                                    modifier = Modifier.padding(top = 8.dp)
                                ) {
                                    Text(text = it?.user?.firstName.toString() + " . " + it?.count?.postComment.toString() + " komentar", fontSize = 16.sp)
                                }
                                Text(
                                    text = it?.content.toString().split(" ").take(10).joinToString(" ") + "...",
                                    fontSize = 18.sp
                                )
                            }
                        }
                    }
                }
            }
}