package com.nakama.capstone.linkdlaw.screen.profile

import android.util.Log
import androidx.compose.runtime.mutableStateOf
import androidx.lifecycle.LiveData
import androidx.lifecycle.MutableLiveData
import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import com.nakama.capstone.linkdlaw.remote.dto.ProfileData
import com.nakama.capstone.linkdlaw.remote.dto.UpdateProfileRequest
import com.nakama.capstone.linkdlaw.repository.HomeRepository
import kotlinx.coroutines.launch
import retrofit2.HttpException

class EditProfileViewModel(private val homeRepository: HomeRepository):ViewModel() {
    
    private val _loading = MutableLiveData<Boolean>()
    val loading: LiveData<Boolean> = _loading

    private val _profileData = MutableLiveData<ProfileData?>()
    val profileData:LiveData<ProfileData?> = _profileData
    
    var firstNameValue = mutableStateOf("")
    var lastNameValue = mutableStateOf("")
    var emailValue = mutableStateOf("")
    
    private val _editResult = MutableLiveData<Boolean>()
    val editResult:LiveData<Boolean> = _editResult
    
    private val _profileLoading = MutableLiveData<Boolean>()
    val profileLoading: LiveData<Boolean> = _profileLoading

    fun getProfileData(){
        viewModelScope.launch {

            _profileLoading.value = true
            try {
                val response = homeRepository.getProfileData()
                firstNameValue.value = response.data?.firstName.toString()
                lastNameValue.value = response.data?.lastName.toString()
                emailValue.value = response.data?.email.toString()
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
    
    fun updateProfile(updateProfileRequest: UpdateProfileRequest){
        viewModelScope.launch {
            _loading.value = true
            try {
            
                val response = homeRepository.updateProfileData(updateProfileRequest)
                Log.d("Update profile", "updateProfile: ${response.message}")
                _editResult.value = response.ok ?: false
                _loading.value = false
                
            }catch (e: HttpException){
                _loading.value = false
            }catch (e: Exception){
                _loading.value = false
            }
            
        }
    }
    
}