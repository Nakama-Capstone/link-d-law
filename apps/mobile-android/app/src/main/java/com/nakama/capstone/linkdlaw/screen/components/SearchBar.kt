package com.nakama.capstone.linkdlaw.screen.components

import android.annotation.SuppressLint
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.size
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.Clear
import androidx.compose.material3.ExperimentalMaterial3Api
import androidx.compose.material3.Icon
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.SearchBarDefaults
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.res.painterResource
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.dp
import com.nakama.capstone.linkdlaw.R

@OptIn(ExperimentalMaterial3Api::class)
@SuppressLint("UnusedMaterial3ScaffoldPaddingParameter")
@Composable
fun SearchBar(labelText: String, modifier: Modifier = Modifier){
    var text by remember { mutableStateOf("") }
    var active by remember { mutableStateOf(false) }

    androidx.compose.material3.SearchBar(
        modifier = modifier,
        colors = SearchBarDefaults.colors(MaterialTheme.colorScheme.background),
        query = text,
        onQueryChange = { text = it },
        onSearch = { active = false },
        active = active,
        onActiveChange = { active = it },
        placeholder = { Text(text = labelText) },
        leadingIcon = {
            Icon(painterResource(id = R.drawable.ic_search), tint = Color.Black, contentDescription = "Search", modifier = Modifier.size(24.dp))
        },
        trailingIcon = {
            if (active){
                Icon(
                    modifier = Modifier.clickable {
                        if (text.isNotEmpty()){
                            text = ""
                        } else {
                            active = false
                        }
                    },
                    imageVector = Icons.Default.Clear, tint = Color.Black,contentDescription = "Clear Icon"
                )
            }
        }
    ) { }
}

@Preview
@Composable
fun SearchBarPreview(){
    SearchBar("")
}