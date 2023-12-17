package com.dicoding.sampleui.components

import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.padding
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import com.nakama.capstone.linkdlaw.ui.theme.Poppins

@Composable
fun HomeSection(
    title: String,
    modifier: Modifier,
    content: @Composable () -> Unit
) {
    Column {
        Text(
            text = title,
            color = Color.Black,
            fontFamily = Poppins,
            fontSize = 22.sp,
            fontWeight = FontWeight.Bold,
            modifier = modifier.padding(8.dp)
        )
        content()
    }
}