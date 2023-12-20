package com.nakama.capstone.linkdlaw.screen.components

import androidx.compose.material3.ExperimentalMaterial3Api
import androidx.compose.material3.OutlinedTextField
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier


@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun TextField(label: String, textValue: String, modifier: Modifier = Modifier) {

    OutlinedTextField(
        value = textValue,
        onValueChange = {
            
        },
        label = { Text(text = label) },
        modifier = modifier
    )
}