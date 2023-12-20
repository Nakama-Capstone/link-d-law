@file:OptIn(ExperimentalMaterial3Api::class)

package com.nakama.capstone.linkdlaw.screen.chat

import androidx.compose.foundation.Image
import androidx.compose.foundation.background
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.layout.width
import androidx.compose.foundation.layout.widthIn
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.items
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.ArrowBack
import androidx.compose.material3.BottomAppBar
import androidx.compose.material3.Card
import androidx.compose.material3.CardDefaults
import androidx.compose.material3.ExperimentalMaterial3Api
import androidx.compose.material3.Icon
import androidx.compose.material3.IconButton
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.OutlinedTextField
import androidx.compose.material3.Scaffold
import androidx.compose.material3.Text
import androidx.compose.material3.TopAppBar
import androidx.compose.runtime.Composable
import androidx.compose.runtime.remember
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.res.painterResource
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.dp
import com.nakama.capstone.linkdlaw.R


@Composable
fun ChatLawyerScreen(
    navigateBack: () -> Unit
) {
    ChatLawyerContent(
        navigateBack
    )
}

@Composable
fun ChatLawyerContent(
    navigateBack: () -> Unit
) {
    val messageList = remember {
        mutableListOf(Message("",false))
    }
    
    Scaffold(
        topBar = {
            TopAppBar(
                title = {
                    Row(
                        verticalAlignment = Alignment.CenterVertically
                    ) {
                        Image(
                            painter = painterResource(id = R.drawable.profile),
                            contentDescription = null,
                            modifier = Modifier
                                .size(60.dp)
                                .clip(shape = CircleShape)
                        )
                        Text(text = "Lawyer name")
                    }
                },
                navigationIcon = {
                    IconButton(onClick = { 
                        navigateBack()
                    }) {
                        Icon(
                            imageVector = Icons.Default.ArrowBack,
                            contentDescription = null,
                            modifier = Modifier.padding(8.dp)
                        )
                    }
                },
                actions = {},
            )
        },
        bottomBar = {
            BottomAppBar(
                actions = {
                    OutlinedTextField(
                        value = "",
                        onValueChange = {},
                        label = {
                            Text(text = "Ketik....")
                        },
                        modifier = Modifier
                            .padding(8.dp)
                            .width(310.dp)
                    )
                    Box(
                        modifier = Modifier
                            .size(50.dp)
                            .clip(shape = RoundedCornerShape(10.dp))
                            .background(
                                color = Color(0xFF001D36)
                            )
                            .clickable {

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
                },
                containerColor = Color.White
            )
        }
    ) {
        Column(modifier = Modifier.padding(it)) {
            val sampleMessages = listOf(
                Message("Hello!", false),
                Message("Hi there!", true),
                Message("How are you?", false)
            )
            ChatUI(messages = sampleMessages)
        }
    }
}

data class Message(val content: String, val isSentByMe: Boolean)

@Composable
fun ChatUI(messages: List<Message>, modifier: Modifier = Modifier) {
    LazyColumn(
        modifier = modifier,
        verticalArrangement = Arrangement.spacedBy(4.dp)
    ) {
        items(messages) { message ->
            MessageCard(message = message)
        }
    }
}

@Composable
fun MessageCard(message: Message) {
    Row(
        modifier = Modifier
            .fillMaxWidth()
            .padding(4.dp),
        horizontalArrangement = if (message.isSentByMe) Arrangement.End else Arrangement.Start
    ) {
        Card(
            colors = CardDefaults.cardColors(
                containerColor = if (message.isSentByMe) MaterialTheme.colorScheme.primary else Color.LightGray,
                contentColor = if (message.isSentByMe) Color.White else Color.Black
            ),
            modifier = Modifier
                .widthIn(max = 250.dp)
        ) {
            Box(
                modifier = Modifier
                    .padding(8.dp)
            ) {
                Text(message.content)
            }
        }
    }
}

@Preview(showBackground = true)
@Composable
fun ChatUIPreview() {
    val sampleMessages = listOf(
        Message("Hello!", false),
        Message("Hi there!", true),
        Message("How are you?", false)
    )
    ChatUI(messages = sampleMessages)
}

@Preview(
    showBackground = true,
    showSystemUi = true
)
@Composable
fun ChatLawyerPreview() {
    ChatLawyerContent(
        navigateBack = {}
    )
}