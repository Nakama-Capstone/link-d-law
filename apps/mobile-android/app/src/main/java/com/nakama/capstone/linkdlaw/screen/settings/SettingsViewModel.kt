package com.nakama.capstone.linkdlaw.screen.settings

import android.util.Log
import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import com.nakama.capstone.linkdlaw.repository.AuthRepository
import kotlinx.coroutines.launch

class SettingsViewModel(private val authRepository: AuthRepository): ViewModel() {

    fun logout() {
        viewModelScope.launch {
            authRepository.logout()
            Log.d("logout", "logout: DataStore Cleared")
        }
    }
    
}