package com.dicoding.sampleui.components

import androidx.compose.foundation.Image
import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.layout.width
import androidx.compose.foundation.layout.wrapContentHeight
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.KeyboardArrowRight
import androidx.compose.material3.ElevatedCard
import androidx.compose.material3.Icon
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.painter.Painter
import androidx.compose.ui.res.painterResource
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import com.dicoding.sampleui.R

@Composable
fun SettingSection(
    icon: Painter,
    head: String,
    body: String,
    modifier: Modifier = Modifier
) {
    ElevatedCard(
        modifier = modifier
            .width(360.dp)
            .wrapContentHeight(Alignment.CenterVertically)
    ) {
        Row(
            verticalAlignment = Alignment.CenterVertically
        ) {
            Box(
                modifier = modifier
                    .size(80.dp)
                    .weight(1f)
                    .background(color = Color(0xfff3f2fb), shape = CircleShape),
                contentAlignment = Alignment.Center
            ) {
                Image(
                    painter = icon,
                    contentDescription = null,
                    modifier = modifier.size(60.dp).padding(8.dp)
                )
            }
            Column(
                verticalArrangement = Arrangement.Center,
                modifier = modifier.weight(3f)
            ) {
                Text(
                    text = head,
                    fontSize = 20.sp,
                    color = MaterialTheme.colorScheme.onSurface
                )
                Spacer(modifier = Modifier.padding(4.dp))
                Text(text = body)
            }
            Box(
                modifier = modifier.padding(horizontal = 8.dp),
                contentAlignment = Alignment.CenterEnd
            ) {
                Icon(
                    imageVector = Icons.Default.KeyboardArrowRight,
                    contentDescription = null
                )
            }
        }
    }
}

@Preview
@Composable
fun SettingSectionPreview() {
    SettingSection(
        painterResource(id = R.drawable.ic_globe),
        "Language",
        "Change the language"
    )
}