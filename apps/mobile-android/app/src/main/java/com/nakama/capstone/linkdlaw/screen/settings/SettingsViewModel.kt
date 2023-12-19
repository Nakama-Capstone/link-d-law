package com.nakama.capstone.linkdlaw.screen.settings

import android.util.Log
import androidx.lifecycle.LiveData
import androidx.lifecycle.MutableLiveData
import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import com.nakama.capstone.linkdlaw.remote.dto.ProfileData
import com.nakama.capstone.linkdlaw.repository.AuthRepository
import com.nakama.capstone.linkdlaw.repository.HomeRepository
import kotlinx.coroutines.launch
import retrofit2.HttpException

class SettingsViewModel(private val authRepository: AuthRepository, private val homeRepository: HomeRepository): ViewModel() {

    private val _profileData = MutableLiveData<ProfileData?>()
    val profileData:LiveData<ProfileData?> = _profileData
    
    private val _profileLoading = MutableLiveData<Boolean>()
    val profileLoading: LiveData<Boolean> = _profileLoading
    
    fun logout() {
        viewModelScope.launch {
            try {
                val response = authRepository.logout()
                if (response.ok){
                    authRepository.clearUserSession()
                    Log.d("logout", "logout: DataStore Cleared")
                }else{
                    Log.d("logout", "logout: DataStore Not Cleared")
                }
            }catch (e: HttpException){
                Log.d("logout", "logout: Failed")
            }catch (e: Exception){
                Log.d("logout", "logout: Failed")
            }
        }
    }
    
    fun getProfileData(){
        viewModelScope.launch { 
            
            _profileLoading.value = true
            try {
                val response = homeRepository.getProfileData()
                _profileData.value = response.data
                _profileLoading.value = false
            }catch (e: HttpException){
                _profileLoading.value = true
                Log.d("GetProfileData", "getProfileData: Failed get profile data")
            }catch (e: Exception){
                _profileLoading.value = true
                Log.d("GetProfileData", "getProfileData: Failed get profile data")
            }
            
        }
    }
}