package com.nakama.capstone.linkdlaw.screen.profile

import android.content.Context
import android.net.Uri
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
import okhttp3.MediaType
import okhttp3.MediaType.Companion.toMediaTypeOrNull
import okhttp3.MultipartBody
import okhttp3.RequestBody
import okhttp3.RequestBody.Companion.asRequestBody
import retrofit2.HttpException
import java.io.ByteArrayOutputStream
import java.io.File
import java.io.InputStream

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


    private val _editImageResult = MutableLiveData<Boolean>()
    val editImageResult:LiveData<Boolean> = _editImageResult

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

    fun updateImageProfile(imageUri: Uri, context: Context){
        Log.d("awoekoawekawoke", imageUri.toString())
        viewModelScope.launch {
            _loading.value = true
            try {
//                val file = File(imageUri.path)
//                val requestFile = file.asRequestBody("image/jpeg".toMediaTypeOrNull())

                val inputStream: InputStream? = context.contentResolver.openInputStream(imageUri)
                val byteOutputStream = ByteArrayOutputStream()

                inputStream?.copyTo(byteOutputStream)
                
                var mimeType = context.contentResolver.getType(imageUri)
                var file = RequestBody.create(mimeType?.let { it.toMediaTypeOrNull() }, byteOutputStream.toByteArray())

                Log.d("awoekoawekawoke2", file.toString())
                val abc = MultipartBody.Part.createFormData("imgFile", "name.jpg", file)
                val response = homeRepository.updateImageProfile(abc)
                Log.d("Update image profile", "updateProfile: ${response.message}")
                _editImageResult.value = response.ok ?: false
                _loading.value = false

            }catch (e: HttpException){
                Log.d("Update image profile", "updateProfile: ${e.message()}")
                _loading.value = false
            }catch (e: Exception){
                Log.d("Update image profile", "updateProfile: ${e.message}")
                _loading.value = false
            }

        }
    }
    
}