package com.nakama.capstone.linkdlaw.screen.forum

import android.util.Log
import androidx.lifecycle.LiveData
import androidx.lifecycle.MutableLiveData
import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import com.nakama.capstone.linkdlaw.remote.api.PostBodyCommunityPost
import com.nakama.capstone.linkdlaw.remote.api.PostBodyCommunityPostComment
import com.nakama.capstone.linkdlaw.remote.dto.GetCommunityPostCommentResponse
import com.nakama.capstone.linkdlaw.remote.dto.GetCommunityPostResponse
import com.nakama.capstone.linkdlaw.repository.CommunityRepository
import kotlinx.coroutines.launch
import retrofit2.HttpException

class ForumScreenViewModel(private val communityRepository: CommunityRepository): ViewModel() {
    
    private val _getPostsResult = MutableLiveData<GetCommunityPostResponse?>()
    var getPostsResult: LiveData<GetCommunityPostResponse?> = _getPostsResult
    
    private val _getCommentsResult = MutableLiveData<GetCommunityPostCommentResponse?>()
    var getCommentsResult: LiveData<GetCommunityPostCommentResponse?> = _getCommentsResult
    
    private val _loadingState = MutableLiveData<Boolean>()
    val loadingState: LiveData<Boolean> = _loadingState

    fun SendPostComment(postId: Int, content: String) {
        viewModelScope.launch {
            _loadingState.value = true
            try {
                Log.d("owaekoawekoawekoawkoeawoe", "a")
                communityRepository.sendPostComment(postId, PostBodyCommunityPostComment(content))
                _loadingState.value = false
                Log.d("SendComment", "sendComment")
            }catch (e: HttpException){
                _loadingState.value = false
                Log.d("SendComment", "sendComment: ${e.message}")
            }catch (e: Exception){
                _loadingState.value = false
                Log.d("SendComment", "sendComment: ${e.message}")
            }
        }
    }

    fun SendPost(title: String, content: String) {
        viewModelScope.launch {
            _loadingState.value = true
            try {
                Log.d("owaekoawekoawekoawkoeawoe", "a")
                communityRepository.sendPost(PostBodyCommunityPost(title, content))
                _loadingState.value = false
                Log.d("SendComment", "sendComment")
            }catch (e: HttpException){
                _loadingState.value = false
                Log.d("SendComment", "sendComment: ${e.message}")
            }catch (e: Exception){
                _loadingState.value = false
                Log.d("SendComment", "sendComment: ${e.message}")
            }
        }
    }
    
    fun GetPostsComments(id: Int){
        viewModelScope.launch {
            try {
                val response = communityRepository.getPostsComments(id)
                _getCommentsResult.value = response
                Log.d("GetComments", "getComments: ${response.message}")
            }catch (e: HttpException){
                Log.d("GetComments", "getComments: ${e.message}")
            }catch (e: Exception){
                Log.d("GetComments", "getComments: ${e.message}")
            }
        }
    }

    fun GetPosts(){
        viewModelScope.launch {
            try {
                val response = communityRepository.getPosts()
                _getPostsResult.value = response
                Log.d("GetPosts", "getPosts: ${response.message}")
            }catch (e: HttpException){
                Log.d("GetPosts", "getPosts: ${e.message}")
            }catch (e: Exception){
                Log.d("GetPosts", "getPosts: ${e.message}")
            }
        }
    }
}