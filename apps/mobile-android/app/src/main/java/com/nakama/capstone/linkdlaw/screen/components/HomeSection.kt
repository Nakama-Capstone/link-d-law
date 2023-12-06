package com.dicoding.sampleui.components

import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.padding
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.unit.dp

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
            fontSize = MaterialTheme.typography.headlineSmall.fontSize,
            fontWeight = MaterialTheme.typography.headlineSmall.fontWeight,
            modifier = modifier.padding(8.dp)
        )
        content()
    }
}