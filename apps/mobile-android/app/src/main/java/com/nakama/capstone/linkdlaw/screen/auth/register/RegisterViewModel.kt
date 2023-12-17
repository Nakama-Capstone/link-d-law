package com.nakama.capstone.linkdlaw.screen.auth.register

import androidx.lifecycle.ViewModel
import com.nakama.capstone.linkdlaw.remote.dto.RegisterRequest
import com.nakama.capstone.linkdlaw.repository.AuthRepository

class RegisterViewModel(private val authRepository: AuthRepository) : ViewModel() {
    suspend fun register(
        firstName: String,
        lastName: String,
        email: String,
        password: String,
        passwordConfirm: String
    ) = authRepository.register(RegisterRequest(firstName, lastName, email, password, passwordConfirm))
}