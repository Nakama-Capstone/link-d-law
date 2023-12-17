package com.nakama.capstone.linkdlaw.screen.auth.login

import android.util.Log
import androidx.lifecycle.LiveData
import androidx.lifecycle.MutableLiveData
import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import com.google.gson.Gson
import com.nakama.capstone.linkdlaw.preferences.UserSession
import com.nakama.capstone.linkdlaw.remote.dto.LoginRequest
import com.nakama.capstone.linkdlaw.remote.dto.LoginResponse
import com.nakama.capstone.linkdlaw.repository.AuthRepository
import kotlinx.coroutines.launch
import retrofit2.HttpException

class LoginViewModel(private val authRepository: AuthRepository) : ViewModel() {

    private val _loading = MutableLiveData<Boolean>()
    val loading: LiveData<Boolean> = _loading

    private val _loginStatus = MutableLiveData<Boolean>()
    val loginStatus: LiveData<Boolean> = _loginStatus

    fun login(email: String, password: String) {
        viewModelScope.launch {
            _loading.value = true
            try {
                _loading.value = false
                val response =
                    authRepository.login(LoginRequest(email = email, password = password))
                _loginStatus.postValue(true)
                val token = response.data?.auth?.accessToken ?: ""
                val isLogin = true
                authRepository.saveUserSession(UserSession(token, isLogin))
                Log.d("Login", "login: $token")
            } catch (e: HttpException) {
                _loading.value = false
                val jsonInString = e.response()?.errorBody()?.string()
                val errorBody = Gson().fromJson(jsonInString, LoginResponse::class.java)
                val errorMessage = errorBody?.message ?: "Gagal"
                
                _loginStatus.postValue(false)
                Log.d("Login", "login: $errorMessage")
            } catch (e: Exception) {
                _loading.value = false
                _loginStatus.postValue(false)
                Log.d("Login", "login: $e")
            }
        }
    }

}