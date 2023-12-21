package com.nakama.capstone.linkdlaw.screen.forum

import android.util.Log
import androidx.lifecycle.LiveData
import androidx.lifecycle.MutableLiveData
import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import androidx.paging.Pager
import androidx.paging.PagingConfig
import androidx.paging.PagingData
import androidx.paging.cachedIn
import com.google.gson.annotations.SerializedName
import com.nakama.capstone.linkdlaw.remote.api.PostBodyCommunityPost
import com.nakama.capstone.linkdlaw.remote.api.PostBodyCommunityPostComment
import com.nakama.capstone.linkdlaw.remote.dto.GetCommunityPostCommentResponse
import com.nakama.capstone.linkdlaw.remote.dto.GetCommunityPostResponse
import com.nakama.capstone.linkdlaw.remote.dto.GetCommunityPostResponseDataItem
import com.nakama.capstone.linkdlaw.remote.dto.GetLawsDataItem
import com.nakama.capstone.linkdlaw.remote.dto.GetPasalDataItem
import com.nakama.capstone.linkdlaw.remote.dto.GetPasalResponse
import com.nakama.capstone.linkdlaw.repository.CommunityRepository
import com.nakama.capstone.linkdlaw.repository.LawRepository
import com.nakama.capstone.linkdlaw.screen.detailhukum.DetailHukumPagingSource
import kotlinx.coroutines.flow.Flow
import kotlinx.coroutines.launch
import retrofit2.HttpException
import kotlin.math.log

class ForumScreenViewModel(private val communityRepository: CommunityRepository): ViewModel() {
    
    private val _getPostsResult = MutableLiveData<GetCommunityPostResponse?>()
    var getPostsResult: LiveData<GetCommunityPostResponse?> = _getPostsResult
    
    private val _getCommentsResult = MutableLiveData<GetCommunityPostCommentResponse?>()
    var getCommentsResult: LiveData<GetCommunityPostCommentResponse?> = _getCommentsResult

    fun SendPostComment(postId: Int, content: String) {
        viewModelScope.launch {
            try {
                Log.d("owaekoawekoawekoawkoeawoe", "a")
                communityRepository.sendPostComment(postId, PostBodyCommunityPostComment(content))
                Log.d("SendComment", "sendComment")
            }catch (e: HttpException){
                Log.d("SendComment", "sendComment: ${e.message}")
            }catch (e: Exception){
                Log.d("SendComment", "sendComment: ${e.message}")
            }
        }
    }

    fun SendPost(title: String, content: String) {
        viewModelScope.launch {
            try {
                Log.d("owaekoawekoawekoawkoeawoe", "a")
                communityRepository.sendPost(PostBodyCommunityPost(title, content))
                Log.d("SendComment", "sendComment")
            }catch (e: HttpException){
                Log.d("SendComment", "sendComment: ${e.message}")
            }catch (e: Exception){
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