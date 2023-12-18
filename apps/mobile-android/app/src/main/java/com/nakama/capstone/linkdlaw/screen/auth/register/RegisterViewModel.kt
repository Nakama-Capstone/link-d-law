package com.nakama.capstone.linkdlaw.screen.auth.register

import androidx.lifecycle.MutableLiveData
import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import com.nakama.capstone.linkdlaw.remote.dto.RegisterRequest
import com.nakama.capstone.linkdlaw.repository.AuthRepository
import kotlinx.coroutines.launch

class RegisterViewModel(private val authRepository: AuthRepository) : ViewModel() {
    
    private val _loading = MutableLiveData<Boolean>()
    val loading: MutableLiveData<Boolean> = _loading
    
    private val _registerStatus = MutableLiveData<Boolean>()
    val registerStatus: MutableLiveData<Boolean> = _registerStatus
    
    fun register(
        registerRequest: RegisterRequest
    ) {
        viewModelScope.launch {
            _loading.value = true
            try {
                val response = authRepository.register(
                    registerRequest
                )
                _registerStatus.value = response.ok ?: false
                _loading.value = false
            } catch (e: Exception) {
                _loading.value = false
                _registerStatus.value = false
            }
        }
    }
    
}