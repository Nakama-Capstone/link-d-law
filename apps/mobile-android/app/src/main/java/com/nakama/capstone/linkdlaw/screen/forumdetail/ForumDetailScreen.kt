package com.nakama.capstone.linkdlaw.screen.forumdetail

import androidx.compose.foundation.border
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
import androidx.compose.material3.ExperimentalMaterial3Api
import androidx.compose.material3.OutlinedTextField
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import com.nakama.capstone.linkdlaw.remote.dto.GetCommunityPostCommentResponseDataItem
import com.nakama.capstone.linkdlaw.remote.dto.GetCommunityPostResponseDataItem
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.getValue
import androidx.compose.runtime.livedata.observeAsState
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.text.TextStyle
import androidx.compose.ui.text.font.FontWeight
import com.nakama.capstone.linkdlaw.ui.theme.Poppins

@Composable
fun ForumDetailScreen (
    forumId: String,
    post: GetCommunityPostResponseDataItem,
    comments: List<GetCommunityPostCommentResponseDataItem?>?,
    sendComment: (Int, String) -> Unit
) {
    ForumDetailContent(forumId, post, comments, sendComment)
}

@Composable
fun ForumDetailContent (
    forumId: String,
    post: GetCommunityPostResponseDataItem,
    comments: List<GetCommunityPostCommentResponseDataItem?>?,
    sendComment: (Int, String) -> Unit
) {
            var commentContent by remember {
                mutableStateOf("")
            }
            val scrollState = rememberScrollState()

    
    
            Column (
                modifier = Modifier
                    .fillMaxSize()
                    .verticalScroll(scrollState)
                    .padding(top = 16.dp)
            ) {
                Box(
                    modifier = Modifier
                        .fillMaxWidth()
                ) {
                    Box(
                        modifier = Modifier.padding(16.dp)
                    ) {
                        Column() {
                            // sow forumId
                            Text(text = post.title.toString(), fontSize = 22.sp)
                            Text(text = post.content.toString(), fontSize = 18.sp)
                            Box(
                                modifier = Modifier.padding(top = 8.dp)
                            ) {
                                Text(text = post.user?.firstName.toString() + " . " + comments?.count().toString() + " Komentar", fontSize = 16.sp)
                            }
                        }
                    }
                }


                Spacer(modifier = Modifier.height(25.dp))

                Box(
                    modifier = Modifier
                        .padding(horizontal = 16.dp, vertical = 6.dp)
                ) {
                    Text(
                        text = comments?.count().toString() + " Komentar",
                        style = TextStyle(
                            fontSize = 20.sp,
                            fontFamily = Poppins,
                            fontWeight = FontWeight.Bold,
                            color = Color(0xFF242B32),
                        )
                    )
                }
                Spacer(modifier = Modifier.height(10.dp))
                
                comments?.forEach {
                    Box(
                        modifier = Modifier
                            .padding(horizontal = 16.dp, vertical = 6.dp)
                            .clip(RoundedCornerShape(10.dp)) // Rounded corners
                            .border(1.dp, Color.Black, RoundedCornerShape(10.dp)) // Border
                            .fillMaxWidth()
                    ) {
                        Box(
                            modifier = Modifier.padding(16.dp)
                        ) {
                            Column() {
                                Box(
                                    modifier = Modifier.padding(top = 8.dp)
                                ) {
                                    Text(text = it?.user?.firstName.toString(), fontSize = 16.sp)
                                }
                                Text(text = it?.content.toString(), fontSize = 18.sp)
                            }
                        }
                    }
                }
                
                Row {
                    OutlinedTextField(
                        value = commentContent,
                        onValueChange = { commentContent = it },
                        label = { Text(text = "Komentar") },
                        modifier = Modifier
                            .padding(horizontal = 16.dp, vertical = 6.dp)
                    )
                    Box (
                        modifier = Modifier
                            .padding(horizontal = 2.dp, vertical = 10.dp)
                    ) {
                        Button(onClick = {
                            if (post.id !== null) {
                                sendComment(post.id, commentContent)
                            }
                        }) {
                            Text(text = ">")
                        }
                    }
                }
            }
}