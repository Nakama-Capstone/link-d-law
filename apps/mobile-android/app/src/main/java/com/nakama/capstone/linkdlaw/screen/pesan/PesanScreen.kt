package com.nakama.capstone.linkdlaw.screen.pesan

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
import com.nakama.capstone.linkdlaw.remote.dto.GetChatDataItem
import com.nakama.capstone.linkdlaw.ui.theme.Poppins

@Composable
fun PesanScreen(
    toDetailChat: (String, String, String, String) -> Unit,
    listChat: List<GetChatDataItem?>?
) {
    PesanContent(
        toDetailChat = toDetailChat,
        listChat = listChat
    )
}

@Composable
fun PesanContent(
    toDetailChat: (String, String, String, String) -> Unit,
    listChat: List<GetChatDataItem?>?
) {
    //Dummy data for preview
    val listLawyer = listOf<String>(
        "Jokowo",
        "Prabowi"
    )
    val listMessage = listOf<String>(
        "Jika saya terpilih, akan saya buka 1jt lapangan kerja",
        "Jika bukan karena saya, kamu tidak akan jadi gubernur Jakarta!"
    )

    Column(
        modifier = Modifier
            .padding(vertical = 18.dp, horizontal = 22.dp),
        horizontalAlignment = Alignment.CenterHorizontally
    ) {
        Text(
            modifier = Modifier.align(Alignment.Start),
            text = "Pesan",
            style = TextStyle(
                fontSize = 20.sp,
                fontFamily = Poppins,
                fontWeight = FontWeight.Bold,
                color = Color(0xFF242B32),
            )
        )
        Spacer(modifier = Modifier.height(25.dp))
        
        LazyColumn() {

            items(listChat?.size ?: 0) { index ->
                if (listChat != null) {
                    PesanScreenItem(
                        image = R.drawable.profile,
                        lawyerName = listChat[index]?.user2?.firstName.toString(),
                        latestMessage = listChat[index]?.message?.firstOrNull()?.message.orEmpty(),
                        latestMessageTime = listChat[index]?.message?.firstOrNull()?.time.orEmpty(),
                        modifier = Modifier.fillMaxWidth(),
                        toDetailChat = {
                            toDetailChat(
                                listChat[index]?.id.toString(),
                                listChat[index]?.user1Id.toString(),
                                listChat[index]?.user2Id.toString(),
                                listChat[index]?.user2?.firstName.toString()
                            )
                        }
                    )
                }
            }
        }
    }
}

@Composable
fun PesanScreenItem(
    image: Int,
    lawyerName: String,
    latestMessage: String,
    latestMessageTime: String,
    modifier: Modifier = Modifier,
    toDetailChat: () -> Unit
) {
    Row(
        modifier = modifier.clickable {
            toDetailChat()
        },
        verticalAlignment = Alignment.CenterVertically,
    ) {
        Image(
            painter = painterResource(id = image),
            contentDescription = "lawyer profile picture",
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
                text = lawyerName,
                style = TextStyle(
                    fontSize = 16.sp,
                    fontFamily = FontFamily(Font(R.font.poppins_medium)),
                    color = Color(0xFF242B32),
                )
            )
            Text(
                text = latestMessage,
                style = TextStyle(
                    fontSize = 12.sp,
                    fontFamily = FontFamily(Font(R.font.poppins_light)),
                    color = Color(0xFF242B32),
                ),
                maxLines = 1
            )
            Text(
                text = latestMessageTime,
                style = TextStyle(
                    fontSize = 10.sp,
                    fontFamily = FontFamily(Font(R.font.poppins_medium)),
                    color = Color(0xFF242B32),
                )
            )
        }
    }
}

@Preview(
    showSystemUi = true,
    showBackground = true
)
@Composable
fun PesanScreenPreview() {
    val data = listOf<GetChatDataItem>()

    PesanScreen(toDetailChat = { _, _, _, _ -> }, listChat = data)
}