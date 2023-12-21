package com.nakama.capstone.linkdlaw.screen.chat

import androidx.compose.foundation.background
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.layout.width
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.ArrowBack
import androidx.compose.material3.BottomAppBar
import androidx.compose.material3.CenterAlignedTopAppBar
import androidx.compose.material3.ExperimentalMaterial3Api
import androidx.compose.material3.Icon
import androidx.compose.material3.IconButton
import androidx.compose.material3.OutlinedTextField
import androidx.compose.material3.Scaffold
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.State
import androidx.compose.runtime.mutableStateListOf
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.snapshots.SnapshotStateList
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.res.painterResource
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.dp
import com.nakama.capstone.linkdlaw.R
import com.nakama.capstone.linkdlaw.remote.dto.GetTanyakimResponse

@Composable
fun ChatKimScreen(
    navigateBack: () -> Unit,
    tanyakimResult: State<GetTanyakimResponse?>,
    loadingState: State<Boolean?>,
    sendMessage: (String) -> Unit
) {
    val messageList = remember {
        mutableStateListOf<Message>()
    }

    LaunchedEffect(loadingState.value) {
        if (loadingState.value == false) {
            tanyakimResult.value?.let {
                val isi = it.pasal + "\n" + it.isi
                messageList.add(Message(isi, false))
            }
        }
    }

    ChatKimContent(
        navigateBack = navigateBack,
        tanyakimResult = tanyakimResult,
        messageList = messageList,
        sendMessage = sendMessage
    )
}

@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun ChatKimContent(
    navigateBack: () -> Unit,
    tanyakimResult: State<GetTanyakimResponse?>,
    messageList: SnapshotStateList<Message>,
    sendMessage: (String) -> Unit
) {
    val message = remember {
        mutableStateOf("")
    }
    
    Scaffold(
        topBar = {
            CenterAlignedTopAppBar(
                title = {
                    Text(
                        text = "Tanya k!m",
                        modifier = Modifier,
                        fontWeight = FontWeight.Bold
                    )
                },
                navigationIcon = {
                    IconButton(onClick = { navigateBack() }) {
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
                        value = message.value,
                        onValueChange = { message.value = it},
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
                                messageList.add(Message(message.value, true))
                                sendMessage(message.value)
                            }
                            .padding(8.dp),
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
        ChatUI(messages = messageList, modifier = Modifier
            .fillMaxWidth()
            .padding(4.dp)
            .padding(it))
    }
}

@Preview(showBackground = true, showSystemUi = true)
@Composable
fun ChatContentPreview() {
    ChatKimContent(
        navigateBack = {},
        tanyakimResult = remember {
            mutableStateOf(GetTanyakimResponse())
        },
        messageList = SnapshotStateList<Message>(),
        sendMessage = {}
    )
}